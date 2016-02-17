var database = require('./config/database');

mongoose.connect(database.url);