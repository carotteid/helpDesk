const controller = require('../services/User');

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

    Search: async (req, res) => {
        const search = await controller.Search(req.body.lastName, req.body.comp, req.body.dept);
        res.json({search});
    },

    Access: async (req, res) => {
        const search = await controller.Access(req.body.username, req.body.password);
        res.json({search});
    },

    ShowAccess: async (req, res) => {
        const search = await controller.Access(req.body.username, req.body.email);
        res.json({search});
    },

    Tickets: async (req, res) => {
        const ticket = await controller.Tickets(req.body.name, req.body.lastName);
        res.json({ticket});
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