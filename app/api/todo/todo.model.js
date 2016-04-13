/**
 * Created by olegrovenskyi on 06.04.16.
 */
'use strict';
var Todo = require('./todo.schema.js');
var Promise = require('promise');
var lodash = require('lodash');

function _getAllTasks () {
    return Todo.find();
}

module.exports = {
    getAllTasks: function getAllTasks() {
        return _getAllTasks();
    },
    createTask: function create(task) {
        return Todo.create(task)
            .then(function () {
                return _getAllTasks();
            })
            .catch(function (err) {
                var promise = new Promise (function (resolve, reject) {
                    reject({message: err});
                });

                return promise;
            })
    },
    updateTask: function updateTask(task_id, newInfo) {
        return Todo.findById(task_id)
            .then(function (modelInstance) {
                var updatedInstance = lodash.extend(modelInstance, newInfo);
                return updatedInstance.save();
            })
            .catch(function (err) {
                var promise = new Promise (function (resolve, reject) {
                    reject({message: err});
                });

                return promise;
            })
    },
    removeTask: function removeTask(task_id) {
        return Todo.remove({
                _id: task_id
            })
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