const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) =>{
//   res.send('Server is working ')

// })

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/category', require('./routes/api/category'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/order', require('./routes/api/order'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
