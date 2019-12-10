const sequelize = require('sequelize');
const Model = require('../model');

const Ticket = Model.Ticket;
const Category = Model.Category;
const Department = Model.Department;
const User = Model.User;
const Monitor = Model.Monitor;

const Op = sequelize.Op;

module.exports = {
  Create: async ( data ) => {

      const department = await Department.findAll({
        where : {departmentId : data[5]}
      });
      const category = await Category.findAll({
        where : {categoryId : data[6]}
      });
      const user = await User.findAll({
        where : {userId : data[7]}
      });
      const manager = await User.findAll({
        where : {userId : data[8]}
      });

      const ticket = await Ticket.create({
          ticketId    : data[0],
          title       : data[1], 
          description : data[2],
          evidence    : data[3],
          status      : data[4]
        });

        await ticket.setDepartment(department[0]);
        await ticket.setCategory(category[0]);
        await ticket.setUser(user[0]);
        await ticket.setManager(manager[0]);

        return ticket;
  },

  Show: async ( id ) => {
      const ticket = await Ticket.findAll({
          where : {ID : id}, 
          include : [{model : Department, attributes : ["name", "priority"]}, 
                     {model : Category, attributes : ["name"]}, 
                     {model : User, attributes : ["name", "lastName"]},
                     {model : User, as : 'Manager', attributes : ["name", "lastName"]}]
      });
      
      return ticket[0];
  },

  ShowAll: async () => {
    const ticket = await Ticket.findAll({
        include : [{model : Department, attributes : ["name", "priority"]}, 
                   {model : Category, attributes : ["name"]}, 
                   {model : User, attributes : ["name", "lastName"]}]
    });
    
    return ticket;
  },

  Search : async ( date1, date2 ) =>{
    const search = await Ticket.findAll({
      where: { createdAt : { [Op.between]: [new Date(date1), new Date(date2)] }}, 
      include : [{model : Department, attributes : ["name", "priority"]}, 
                 {model : Category, attributes : ["name"]}, 
                 {model : User, attributes : ["name", "lastName"]}]
    });

    return search;
  },

  Monitors : async (id, title) => {
    const monitor = await Ticket.findAll({
      where: { 
        [Op.or] : [
          { ticketId : id},
          { title    : { [Op.like] : `%${title}%` }}
        ]
      }, include : [{model : Monitor}]
    });

    return monitor[0].Monitors;
  },

  Delete: async ( id ) => {
    const del = await Ticket.destroy({
        where : {ticketId : id}
    });

    return del;
  },

  Edit: async ( id, data ) => {

      const rows = await Ticket.update({
        description : data[0],
        evidence    : data[1],
        status      : data[2],
      },{where : {ticketId : id}});
      
      const department = await Department.findAll({
        where : {departmentId : data[3]}
      });
      const category = await Category.findAll({
        where : {categoryId : data[4]}
      });
      const manager = await User.findAll({
        where : {userId : data[5]}
      });
      const ticket = await Ticket.findAll({
        where : {ticketId : id}
      });

      await ticket[0].setDepartment(department[0]);
      await ticket[0].setCategory(category[0]);
      await ticket.setManager(manager[0]);

      return rows;
  }
};

