import {Router} from 'express';
import userController from "./userController.js";
import {body, check} from "express-validator";

const router = new Router();

router.post('/registration',
  body('email').isEmail(),
  check('login', "Это поле не может быть пустым").notEmpty(),
  check('password', "Минимальная длина пароля должна быть 8 символов").isLength({min: 8}),
  userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
// router.get('/auth',)
router.get('/refresh', userController.refresh)
router.get('/findAll', userController.findAll)
router.post('/findOne', userController.findOne);
router.delete('/delete', userController.delete)

export default router;