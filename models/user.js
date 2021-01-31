const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING,
    },
    prefix: {
      type: DataTypes.STRING,
      unique: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    wechatAppId: DataTypes.STRING,
    wechatAppSecret: DataTypes.STRING,
    wechatTemplateId: DataTypes.STRING,
    wechatOpenId: DataTypes.STRING,
    wechatVerifyToken: DataTypes.STRING,
    smtpServer: {
      type: DataTypes.STRING,
      defaultValue: 'smtp.qq.com',
    },
    smtpUser: DataTypes.STRING,
    smtpPass: DataTypes.STRING,
  },
  { sequelize }
);

module.exports = User;
