/**
 * Created by olegrovenskyi on 06.04.16.
 */
var mongoose = require('mongoose');

var Todo = new mongoose.Schema({
        text: String,
        done: false
    });

module.exports = mongoose.model('Todo', Todo);