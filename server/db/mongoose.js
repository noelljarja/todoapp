var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://noel:noelnoel1@ds121371.mlab.com:21371/ntodoapp');
module.exports = {mongoose}