'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('copias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'estados',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
      },
      edicion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ediciones',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      serial: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('copias');
  }
};