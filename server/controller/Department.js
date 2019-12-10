const controller = require('../services/Department');

module.exports = {
    Create : async (req, res) => {
        const cr = await controller.Create(req.body.data);
        res.json({cr});
    },  

    Show : async (req, res) => {
        const sw = await controller.Show(req.body.id);
        res.json({sw});
    }, 

    ShowAll : async (req, res) => {
        const sa = await controller.ShowAll();
        res.json({sa});
    },  

    Users : async (req, res) => {
        const us = await controller.Users(req.body.query);
        res.json({us});
    },

    Tickets : async (req, res) => {
        const us = await controller.Tickets(req.body.name, req.body.priority);
        res.json({us});
    },

    Search : async (req, res) => {
        const findName = await controller.Search(req.body.query);
        res.json({findName});
    },

    Delete : async(req, res) => {
        const del = await controller.Delete(req.body.id);
        res.json({del});
    },  

    Edit : async (req, res) => {
        const ed = await controller.Edit(req.body.id, req.body.data);
        res.json({ed});
    }
}