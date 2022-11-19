export default class UserDto {
  id;
  login;
  email;
  role;

  constructor(model) {
    this.id = model.id;
    this.login = model.login;
    this.email = model.email;
    this.role = model.role;
  }
};