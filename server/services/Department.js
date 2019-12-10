const sequelize = require('sequelize');
const Model = require('../model');

const Department = Model.Department;
const User = Model.User;
const Ticket = Model.Ticket;
const Op = sequelize.Op;

module.exports = {
  Create : async (data) => {
      const department = await Department.create({
          departmentId:data[0],
          name: data[1], 
          priority:data[2]
        });

        return department;
  },

  Show : async (id) => {
      const search = await Department.findAll({
          where : {ID : id}, 
      });

      return search[0];
  },

  ShowAll : async () => {
    const search = await Department.findAll();

    return search;
  },

  Search : async (query) =>{
    const name = await Department.findAll({
      where: {
        name: {[Op.like]: `%${query}%`}
      },
    }); 
    
    return name;
  },

  Users : async (query) => {
    const user = await Department.findAll({
      where : { name : {[Op.like] : `%${query}%`}}
    , include: [{model : User}]});

    return user[0]. Users;
  }, 

  Tickets : async (name, priority) => {
    const ticket = await Department.findAll({
      where: { 
        [Op.or] : [
          { name     : { [Op.like] : `%${name}%` }},
          { priority : { [Op.like] : `%${priority}%` }}
        ]
      }
    , include: [{model : Ticket}]});

    return ticket[0]. Tickets;
  }, 

  Delete : async(id) => {
    const del = await Department.destroy({
        where : {departmentId : id}
    });

    return del;
  },

  Edit : async (id, data) => {
      const rows = await Department.update({departmentId : id},{
        name     : data[0], 
        priority : data[1]
      });

      return rows;
  }
};

