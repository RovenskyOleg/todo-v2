/**
 * Created by Oleg_Rovenskyi on 4/8/2016.
 */
'use strict';

var OK = 200;
var CREATED = 201;
var NOT_FOUND = 404;

var todoModel = require('./todo.model.js');
var lodash = require('lodash');

exports.get = function get(req, res) {
    return todoModel.getAllTasks()
        .then(function (result) {
            res.status(OK).json({
                status: 'success',
                total: result.length,
                response: result
            });
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
};

exports.create = function create(req, res) {
    return todoModel.createTask(req.body)
        .then(function (result) {
            res.status(OK).json({
                status: 'success',
                response: result
            });
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.update = function update(req, res) {
    return todoModel.updateTask(req.params.todo_id, req.body)       
        .then(function (result) {
            res.status(OK).json({
                status: 'success',
                response: result
            });
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
};

exports.remove = function remove(req, res) {
    return todoModel.removeTask(req.params.todo_id)        
        .then(function (result) {
            res.status(OK).json({
                status: 'success',
                total: result.length,
                response: result
            });
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });       
};

// exports.get = function get(req, res) {
//     return Todo.find(req.params)
//         .then(function (result) {
//             res.status(OK).json({
//                 status: 'success',
//                 total: result.length,
//                 response: result
//             });
//         })
//         .catch(function (err) {
//             res.status(NOT_FOUND).json(err);
//         });
// };
//
// exports.create = function create(req, res) {
//     return Todo.create(req.body)
//         .then(function () {
//             Todo.find()
//                 .then(function (result) {
//                     res.status(OK).json({
//                         status: 'success',
//                         total: result.length,
//                         response: result
//                     });
//                 })
//                 .catch(function (err) {
//                     res.status(NOT_FOUND).json(err);
//                 });
//         })
//         .catch(function (err) {
//             res.send(err);
//         });
// };
//
// exports.update = function update(req, res) {
//     return Todo.findById(req.params.todo_id)
//         .then(function (modelInstance) {
//             var updatedInstance = lodash.extend(modelInstance, req.body);
//             return updatedInstance.save();
//         })
//         .then(function (result) {
//             res.status(OK).json({
//                 status: 'success',
//                 response: result
//             });
//         })
//         .catch(function (err) {
//             res.status(NOT_FOUND).json(err);
//         });
// };
//
// exports.remove = function remove(req, res) {
//     return Todo.remove({
//             _id: req.params.todo_id
//         })
//         .then(function (result) {
//             Todo.find()
//                 .then(function (result) {
//                     res.status(OK).json({
//                         status: 'success',
//                         total: result.length,
//                         response: result
//                     });
//                 })
//                 .catch(function (err) {
//                     res.status(NOT_FOUND).json(err);
//                 });
//         })
//         .catch(function (err) {
//             res.status(NOT_FOUND).json(err);
//         });
// };