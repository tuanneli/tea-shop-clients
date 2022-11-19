import bcrypt from "bcryptjs";
import UserDto from "../../dto/UserDto.js";
import ApiError from "../../errors/ApiError.js";
import {User} from '../../db/models.js'
import TokenService from "./tokenService.js";


class UserService {
  async registration(login, email, password, role) {
    const candidate = await User.findOne({where: {email}});
    if (candidate) {
      throw ApiError.badRequest('Пользователь уже зарегестрирован');
    }
    const hashPassword = bcrypt.hashSync(password, 5);
    // const activationLink = uuid.v4();
    // const userRole = await Role.findOne({value: role});
    const user = await User.create({login, email, password: hashPassword, role});
    const userDto = new UserDto(user);
    // await MailService.sendActivationLink(userDto, `${process.env.API_URL}/auth/activate/${activationLink}`);
    const token = TokenService.generateTokens({userDto});
    await TokenService.saveToken(userDto.id, token.refreshToken);
    return {
      user: userDto,
      ...token
    }
  }

  async login(email, login, password) {
    const user = email ? await User.findOne({where: {email}}) : await User.findOne({where: {login}});
    if (!user) {
      throw ApiError.badRequest(`Неверная почта или пароль`);
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw ApiError.badRequest("Ошибка авторизации, неверные данные");
    }
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      user: userDto,
      ...tokens
    };
  }

  async logout(refreshToken) {
    return TokenService.removeToken(refreshToken);
  }

  // async activate(activationLink) {
  //   const user = await User.findOne({activationLink});
  //   if (!user) {
  //     throw ApiError.badRequest('Неверная ссылка активации');
  //   }
  //   user.isActivated = true;
  //   await user.save();
  // }

  async findAll() {
    return User.findAll();
  }

  async findOne(id) {
    return User.findOne({where: {id}});
  }


  async deleteOne(email) {
    await User.destroy({where: {email}});
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.authorizationFailure();
    }
    const userData = await TokenService.validateRefreshToken(refreshToken);
    const token = await TokenService.findToken(refreshToken);
    if (!userData || !token) {
      throw ApiError.authorizationFailure();
    }
    const user = await User.findOne({where: {id: userData.userDto.id}});
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    }
  }
}

export default new UserService();