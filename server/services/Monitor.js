const sequelize = require('sequelize');
const Model = require('../model');

const Monitor = Model.Monitor;
const Ticket = Model.Ticket;
const Category = Model.Category;
const Department = Model.Department;
const User = Model.User;

const Op = sequelize.Op;

module.exports = {
  Create: async ( data ) => {

      const ticket = await Ticket.findAll({
        where : {ticketId : data[2]}
      });

      const monitor = await Monitor.create({
          monitorId   : data[0],
          description : data[1]
        });

        await monitor.setTicket(ticket[0]);

        return monitor;
  },

  Show: async ( id ) => {
      const monitor = await Monitor.findAll({
          where : {ID : id}, 
          include : [{model : Ticket, attributes : ["title"]}]
      });
      
      return monitor[0];
  },

  ShowAll: async ( ) => {
    const monitor = await Monitor.findAll({
        include : [{model : Ticket, attributes : ["title"]}]
    });
    
    return monitor;
},

  Search : async ( date1, date2 ) =>{
    const search = await Monitor.findAll({
      where: { createdAt : { [Op.between]: [new Date(date1), new Date(date2)] }}, 
      include : [{model : Ticket, attributes : ["title"]}]
    });

    return search;
  },

  Delete: async ( id ) => {
    const del = await Monitor.destroy({
        where : {monitorId : id}
    });

    return del;
  },

  Edit: async ( id, data ) => {

      const rows = await Monitor.update({
        description : data
      },{where : {monitorId : id}});

      return rows;
  }
};