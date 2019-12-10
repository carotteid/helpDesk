const controller = require('../services/Ticket');

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
        const search = await controller.Search(req.body.date1, req.body.date2);
        res.json({search});
    },

    Monitors : async (req, res) => {
        const monitor = await controller.Monitors(req.body.id, req.body.title);
        res.json({monitor});
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