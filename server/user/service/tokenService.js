import jwt from 'jsonwebtoken'
import {Token} from '../../db/models.js';
import * as dotenv from 'dotenv';

dotenv.config();

class TokenService {
  generateTokens(module) {
    const accessToken = jwt.sign(module, process.env.JWT_ACCESS, {expiresIn: '15min'});
    const refreshToken = jwt.sign(module, process.env.JWT_REFRESH, {expiresIn: '60d'});
    return {
      accessToken,
      refreshToken,
    }
  }

  async saveToken(userId, refreshToken) {
    const token = await Token.findOne({where: {userId}});
    if (token) {
      token.refreshToken = refreshToken;
      return token.save();
    }
    return await Token.create({userId, refreshToken});
  }

  async removeToken(refreshToken) {
    return Token.destroy({where: {refreshToken}});
  }

  async validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS);
    } catch (e) {
      return null;
    }
  }

  async validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH);
    } catch (e) {
      return null;
    }
  }

  async findToken(token) {
    try {
      return Token.findOne({where: {token}})
    } catch (e) {
      return null;
    }
  }
}

export default new TokenService();