/**
 * Created by Oleg_Rovenskyi on 4/8/2016.
 */
'use strict';

const express = require('express');
const controller = require('./todo.controller.js');
const router = express.Router();

router.route('')
    .get(controller.get)
    .post(controller.create);

router.route('/:todo_id')
    .post(controller.update)
    .delete(controller.remove);

module.exports = router;
