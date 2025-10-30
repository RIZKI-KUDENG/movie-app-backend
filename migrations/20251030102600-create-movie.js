"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "movies",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        deskripsi: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        tanggal_rilis: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        durasi: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipe_film: {
          type: Sequelize.ENUM("movie", "series"),
          allowNull: false,
        },
        rating: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        age_rating: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        kategori: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        engine: "InnoDB",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("episodes");
  },
};
