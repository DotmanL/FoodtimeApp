const { Order, CartItem } = require('../models/Order');
const Profile = require('../models/Profile');
const Email = require('email-templates');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

exports.createOrder = async (req, res) => {
  try {
    req.body.order.profile = req.profile;
    const order = new Order(req.body.order);
    const orders = await order.save();

    const transport = {
      apiKey: process.env.SENDGRID_API_KEY,
    };

    const transporter = nodemailer.createTransport(
      nodemailerSendgrid(transport)
    );
    transporter.verify((error, success) => {
      if (error) {
        console.error(error);
      } else {
        console.log(success);
      }
    });

    const email = new Email({
      message: {
        from: process.env.THE_EMAIL,
        subject: `Order details`,
        html: `      
					<p>Customer name: ${req.profile.name}</p>
					<p>Total products: ${order.products.length}</p>
					<p>Total cost: ${order.amount}</p>
					<p>Login to the dashboard to see the full order in details.</p>`,
      },
      transport: transporter,
      send: true,
      preview: false,
    });

    email
      .send({
        message: {
          to: req.profile.email,
        },
      })
      .then(() => console.log('email has been sent!'));

    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.listOrdersByUser = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);

    if (!profile) {
      return res.status(404).json({ msg: `Profile doesn't exist` });
    }

    const orders = await Order.find()
      .populate('user', '_id name address')
      .sort({ date: -1 });

    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.getStatus = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);

    if (!profile) {
      return res.status(404).json({ msg: `Profile doesn't exist` });
    }

    const status = await Order.schema.path('status').enumValues;

    res.json(status);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);

    if (!profile) {
      return res.status(404).json({ msg: `Profile doesn't exist` });
    }

    const orderStatus = await Order.updateOne(
      { _id: req.params.orderId },
      { $set: { status: req.body.status } }
    );

    res.json(orderStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};
