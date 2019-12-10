const sequelize = require('sequelize');
const Model = require('../model');

const Company = Model.Company;
const User = Model.User;
const Op = sequelize.Op;

module.exports = {
  Create : async ( data ) => {
      const company = await Company.create({
          companyId  : data[0],
          name       : data[1], 
          address    : data[2],
          postalCode : data[3],
          city       : data[4],
          state      : data[5],
          country    : data[6],
          phone      : data[7],
          email      : data[8],
          web        : data[9]
        });

        return company;
  },

  Show : async ( id ) => {
      const show = await Company.findAll({
          where : { ID : id }
      });

      return show[0];
  },

  ShowAll : async ( ) => {
    const show = await Company.findAll();

    return show;
  },

  Search : async ( name, city, state, country ) =>{
    const search = await Company.findAll({
      where: { 
        [Op.or] : [
          { name    : { [Op.like] : `%${name}%` }},
          { city    : { [Op.like] : `%${city}%` }},
          { state   : { [Op.like] : `%${state}%` }},
          { country : { [Op.like] : `%${country}%` }}
        ]
      }
    }); 
    
    return search;
  },

  Users : async ( query ) => {
    const user = await Company.findAll({
      where : { name : {[Op.like] : `%${query}%`}}
    , include: [{model : User}]});

    return user[0]. Users;
  },

  Delete : async ( id ) => {
    const del = await Company.destroy({
        where : { companyId : id }
    });

    return del;
  },

  Edit : async ( id, data ) => {
      const rows = await Company.update({
          name       : data[1], 
          address    : data[2],
          postalCode : data[3],
          city       : data[4],
          state      : data[5],
          country    : data[6],
          phone      : data[7],
          email      : data[8],
          web        : data[9]
      },
      { where : { companyId : id } });

      return rows;
  }
};