const controller = require('../services/Company');

module.exports = {
    Create: async (req, res) => {
        const cr = await controller.Create(req.body.data);
        res.json({cr});
    },  

    Show: async (req, res) => {
        const sw = await controller.Show(req.body.id);
        res.json({sw});
    }, 

    ShowAll: async (req, res) => {
        const sa = await controller.ShowAll();
        res.json({sa});
    },  

    Search: async (req, res) =>{
        const search = await controller.Search(req.body.name, req.body.city, req.body.state, req.body.country);
        res.json({search});
    },

    Users : async (req, res) => {
        const us = await controller.Users(req.body.query);
        res.json({us});
    },

    Delete: async(req, res) => {
        const del = await controller.Delete(req.body.id);
        res.json({del});
    },  

    Edit: async (req, res) => {
        const ed = await controller.Edit(req.body.id, req.body.data);
        res.json({ed});
    }
}