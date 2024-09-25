const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth-controllers");
const authValidate = require('../middlewares/validate');
const {singUpSchema,loginSchema} = require('../validators/auth-validators'); 
const AuthMiddleware = require('../middlewares/auth-middlewares'); 

router.route("/").get(AuthController.Home); 
router.route("/user").get(AuthMiddleware, AuthController.userInfo); 
router.route("/register").post(authValidate(singUpSchema),AuthController.register);
router.route("/profile-submit").post(AuthController.ChangeDetails);
router.route("/login").post(authValidate(loginSchema),AuthController.login); 
module.exports = router; 