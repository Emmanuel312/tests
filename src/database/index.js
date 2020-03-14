import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];
class Database {
  constructor() {
    this.models = models;
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    this.models.forEach(model => model.init(this.connection));
    this.models.forEach(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
