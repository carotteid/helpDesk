const controller = require('../services/Category');

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
        const findName = await controller.Search(req.body.query);
        res.json({findName});
    },

    Tickets: async (req, res) => {
        const ticket = await controller.Tickets(req.body.query);
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