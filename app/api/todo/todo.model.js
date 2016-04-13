/**
 * Created by olegrovenskyi on 06.04.16.
 */
'use strict';
var Todo = require('./todo.schema');
var Promise = require('promise');

function _getAllTasks () {
    return Todo.find();
}

module.exports = {
    getAllTasks: function getAllTasks() {
        return _getAllTasks();
    },
    create: function create(task) {
        Todo.create(task)
            .then(function () {
                return _getAllTasks();
            })
            .catch(function (err) {
                var promise = new Promise (function (resolve, reject) {
                    reject({message: err});
                });

                return promise;
            })
    }
};