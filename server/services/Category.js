const sequelize = require('sequelize');
const Model = require('../model');

const Category = Model.Category;
const Ticket = Model.Ticket;
const Op = sequelize.Op;

module.exports = {
  Create : async ( data ) => {
      const category = await Category.create({
          categoryId : data[0],
          name       : data[1]
        });

        return category;
  },

  Show : async ( id ) => {
      const show = await Category.findAll({
          where : { ID : id }
      });

      return show[0];
  },

  ShowAll : async ( ) => {
    const show = await Category.findAll();

    return show;
  },

  Search: async ( query ) =>{
    const name = await Category.findAll({
      where: {
        name: {[Op.like]: `%${query}%`}
      },
    }); 
    
    return name;
  },

  Tickets: async ( query ) =>{
    const ticket = await Category.findAll({
      where: {
        name: {[Op.like]: `%${query}%`}
      }, include: [{model : Ticket}]
    }); 
    
    return ticket[0]. Tickets;
  },

  Delete : async ( id ) => {
    const del = await Category.destroy({
        where : { categoryId : id }
    });

    return del;
  },

  Edit : async ( id, data ) => {
      const rows = await Category.update({ categoryId : id },{
        name : data[0]
      });

      return rows;
  }
};

