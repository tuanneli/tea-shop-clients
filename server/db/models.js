import seq from './db.js';
import {DataTypes} from "sequelize";

export const User = seq.define('user', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  login: {type: DataTypes.STRING, unique: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
});

export const Token = seq.define('token', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  refreshToken: {type: DataTypes.STRING},
});

const Basket = seq.define('basket', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
});

const BasketProduct = seq.define('basket-product', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
});

const Paycheck = seq.define('paycheck', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
});

const Product = seq.define('product', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, unique: true},
  price: {type: DataTypes.INTEGER},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING},
});

const Category = seq.define('category', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, unique: true},
});

const Rating = seq.define('rating', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasOne(Token);
Token.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasMany(Paycheck);
Paycheck.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Basket.hasOne(Paycheck);
Paycheck.belongsTo(Basket);

BasketProduct.hasOne(Product);
Product.belongsTo(BasketProduct);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Category.hasMany(Product);
Product.belongsTo(Category);

export default {
  User,
  Token,
  Basket,
  BasketProduct,
  Paycheck,
  Product,
  Category,
  Rating
}
