'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Awesome Title",
          description: "The title is simply awesome",
          backgroundColor: "#ffffff",
          color: "#000000",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Awesomer Title",
          description: "This title is even more awesome",
          backgroundColor: "#ffffff",
          color: "#000000",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  }
};
