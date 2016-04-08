/**
 * Created by Oleg_Rovenskyi on 4/8/2016.
 */
'use strict';

var OK = 200;
var CREATED = 201;
var NOT_FOUND = 404;

var Todo = require('./todo.model.js');

exports.get = function get(req, res) {
    return Todo.find(req.params)
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
    var modelInstance = new Todo(req.body);
    return modelInstance.save()
        .then(function (result) {
            res.status(CREATED).json({
                status: 'success',
                response: result
            });
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.update = function update(req, res) {
    return Todo.where({
            _id: req.params.todo_id
        })
        .then(function (modelInstance) {
            return modelInstance.update(req.body.updateObj);
        })
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
    return Todo.remove({
            _id: req.params.todo_id
        })
        .then(function (result) {
            //res.json({
            //    status: 'success',
            //    response: result
            //});
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
};