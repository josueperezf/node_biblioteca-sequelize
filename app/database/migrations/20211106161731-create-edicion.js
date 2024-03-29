'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ediciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idioma_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'idiomas',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
      },
      libro_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'libros',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
      },
      autor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'autores',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      fecha: {
        type: Sequelize.DATE
      },
      isbn: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      numero_paginas: {
        type: Sequelize.INTEGER,
      },
      tipo: {
        type: Sequelize.CHAR(1)
      },
      estatus: {
        type: Sequelize.INTEGER,
        default: 1
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ediciones');
  }
};