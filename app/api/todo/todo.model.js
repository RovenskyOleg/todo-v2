/**
 * Created by olegrovenskyi on 06.04.16.
 */
'use strict';

var mongoose = require('mongoose');

var Todo = new mongoose.Schema({
        text: String,
        done: Boolean
    });

module.exports = mongoose.model('Todo', Todo);