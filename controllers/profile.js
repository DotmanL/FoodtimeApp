const Profile = require('../models/Profile');
const User = require('../models/User');
const cloudinary = require('../config/cloudinary');
const Products = require('../models/Products');
const { Order } = require('../models/Order');

exports.createProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    const { address } = req.body;
    const profileFields = {
      user: req.user.id,
      address,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      city: user.city,
      restaurant: user.restaurant,
      profileImage: '',
    };

    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.addImage = async (req, res) => {
  try {
    if (req.file) {
      const images = await cloudinary.uploader.upload(req.file.path);

      const profileFields = {
        user: req.user.id,
        profileImage: images.url,
      };

      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );

      res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.getCurrentProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//Get all users profile only admin access

exports.getProfile = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.getProfileById = async ({ params: { user_id } }, res) => {
  try {
    const profile = await Profile.findOne({
      user: user_id,
    });

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.name == 'CastError') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
};

//delte user and profile

exports.deleteProfile = async (req, res) => {
  try {
    //Remove Products
    await Products.deleteMany({ user: req.user.id });

    // Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });

    //Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.ProfileById = async (req, res, next) => {
  try {
    const user = User.findById(req.params.userId);

    req.profile = user;

    const profile = await Profile.findOne(req.profile._id);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    req.profile = profile;

    next();
  } catch (err) {
    console.error(err.message);
    if (err.name == 'CastError') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.addOrderToHistory = async (req, res, next) => {
  let history = [];

  try {
    req.body.order.products.forEach((item) => {
      history.push({
        _id: item._id,
        productName: item.productName,
        description: item.description,
        category: item.category,
        quantity: item.quantity,
        //transaction_id: req.body.order.transaction_id,
        amount: req.body.order.amount,
      });
    });

    const profile = await Profile.findOneAndUpdate(
      { _id: req.profile._id },
      { $push: { history: history } },
      { new: true }
    );
    //res.json(data)
    next();
    console.log(profile, 'data sent');
  } catch (err) {
    console.error(err.message);
    if (err.name == 'CastError') {
      return res.status(400).json({ msg: 'Order not added' });
    }
    res.status(500).send('Server Error');
  }
};

exports.purchaseHistory = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileid);

    req.profile = profile;

    const orders = await Order.find({ profile: req.profile }).sort({
      date: -1,
    });

    if (!orders) {
      return res.status(404).json({ msg: `Couldn't find any order` });
    }

    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
