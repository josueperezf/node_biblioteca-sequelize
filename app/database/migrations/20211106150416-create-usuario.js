'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tipo_usuarios',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
      },
      persona_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'personas',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
        unique : true,
      },
      login: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estatus: {
        type: Sequelize.INTEGER,
        default: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};