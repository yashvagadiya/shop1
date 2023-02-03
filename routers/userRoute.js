'use strict'
const express = require('express');
const router = express.Router();
const userController = require(`../controller/userController`);

router.get('/list',userController.getAlluser)
router.get('/list/:id',userController.getuserbyId)
router.post('/add',userController.adduser)
router.put('/update/:id',userController.updateuser)
router.delete('/delete/:id',userController.deleteuser)

module.exports = router;