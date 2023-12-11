const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    // Define comment model attributes here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    commentText: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1] // Comments must be at least 1 character long
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = Comment;
