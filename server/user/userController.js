import * as dotenv from 'dotenv';
import {validationResult} from "express-validator";
import ApiError from "../errors/ApiError.js";
import UserService from "./service/userService.js";

dotenv.config();

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(ApiError.badRequest('Ошибка валидации', errors.array()));
      }
      const {login, email, password, role} = req.body;
      const user = await UserService.registration(login, email, password, role);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 60 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true
      })
      return res.json(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const {auth, password, isEmailOrLogin} = req.body;
      console.log(auth);
      console.log(password);
      console.log(isEmailOrLogin);
      const user = await UserService.login(auth, password, isEmailOrLogin);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 60 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true
      });
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const token = UserService.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.status(200).json(token);
    } catch (e) {
      next(e);
    }
  }

  // async activate(req, res, next) {
  //   try {
  //     const activationLink = req.params.link;
  //     await UserService.activate(activationLink);
  //     return res.status(200).json({Message: 'The user was activated successfully'});
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const user = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 60 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async findAll(req, res, next) {
    try {
      const users = await UserService.findAll();
      return res.status(200).json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async findOne(req, res, next) {
    try {
      const {id} = req.body;
      const user = await UserService.findOne(id);
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  //
  // async isAuth(req, res, next) {
  //   try {
  //     const {id} = req.body;
  //     const users = await UserService.isAuth(id);
  //     return res.status(200).json(users);
  //   } catch (e) {
  //     console.log(e);
  //     next(e);
  //   }
  // }

  async delete(req, res, next) {
    try {
      const {email} = req.body;
      await UserService.deleteOne(email);
      return res.status(200).json("Полтзователь был успешно удален");
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

export default new UserController;