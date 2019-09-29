const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users_router = require('./routes/users-router');
const upload_router = require('./routes/upload-router');
const about_router = require('./routes/about-router');
const {MONGO_URI_LOCAL} = require('./config');


const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors()); // на продакшене убрать
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('useFindAndModify', false);

mongoose.connect(MONGO_URI_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

app.use('/api/user', users_router);
app.use('/api/upload', upload_router);
app.use('/api/about', about_router);


app.listen(PORT, () => console.log(`Сервер запущен порт: ${PORT}`));

db.once('open', () => console.log('Подключение к базе данных успешно'));
