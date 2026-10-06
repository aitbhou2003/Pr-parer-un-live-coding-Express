const express = require("express");

const router = express.Router();

const {createUserDto,loginDto} = require("../dtos/auth.dto")
const valide = require("../middlewares/validate")
const { register, login } = require("../controllers/auth.controller");
router.post("/register",valide(createUserDto), register);
router.post("/login", login);
module.exports = router;
