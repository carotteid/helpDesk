const sequelize = require('sequelize');
const Model = require('../model');

const User = Model.User;
const Company = Model.Company;
const Department = Model.Department;
const Ticket = Model.Ticket;

const Op = sequelize.Op;

module.exports = {
  Create: async ( data ) => {

      const department = await Department.findAll({
        where : {departmentId : data[8]}
      });
      const company = await Company.findAll({
        where : {companyId : data[9]}
      });

      const user = await User.create({
          userId   : data[0],
          name     : data[1], 
          lastName : data[2],
          email    : data[3],
          phone    : data[4],
          userName : data[5],
          password : data[6],
          admin    : data[7]
        });

        await user.setDepartment(department[0]);
        await user.setCompany(company[0]);

        return user;
  },

  Show: async (id) => {
      const user = await User.findAll({
          where : {ID : id}, 
          include : [{model : Department, attributes : ["name"]}, {model : Company, attributes : ["name"]}]
      });
      
      return user[0];
  },

  ShowAll: async () => {
    const users = await User.findAll({
      include : [{model : Department, attributes : ["name"]}, {model : Company, attributes : ["name"]}]
    });

    return users;
  },

  Search : async ( lastName) =>{
    const search = await User.findAll({
      where: { lastName : { [Op.like]: `%${lastName}%` }
      }, include : [{model : Department, attributes : ["name"]}, {model : Company, attributes : ["name"]}]
    });

    return search;
  },

  Access : async (username, password) =>{  
    const search = await User.findAll({
      where: { 
          username : username,
          password : password
      }, attributes : ["username", "password"]
    });

    return search[0];
  },

  ShowAccess : async (username, password) => {
    const search = await User.findAll({
      where: { 
        [Op.or] : [
          { username : username},
          { email    : email}
        ]
      }, attributes : ["username", "password"]
    });

    return search[0];
  },

  Tickets : async (name, lastName) => {
    const ticket = await User.findAll({
      where: { 
        [Op.or] : [
          { name     : { [Op.like] : `%${name}%` }},
          { lastName : { [Op.like] : `%${lastName}%` }}
        ]
      }
    , include: [{model : Ticket}]});

    return ticket[0]. Tickets;
  }, 

  Delete: async ( id ) => {
    const del = await User.destroy({
        where : {userId : id}
    });

    return del;
  },

  Edit: async ( id, data ) => {

      const rows = await User.update({
        name         : data[0], 
        lastName     : data[1],
        email        : data[2],
        phone        : data[3],
        password     : data[4]
      },{where : {userId : id}});
      
      const department = await Department.findAll({
        where : {departmentId : data[5]}
      });
      const company = await Company.findAll({
        where : {companyId : data[6]}
      });
      const user = await User.findAll({
        where : {userId : id}
      });

      await user[0].setDepartment(department[0]);
      await user[0].setCompany(company[0]);

      return rows;
  }
};

