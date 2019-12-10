const express = require('express');
const router = express.Router();
const contr_user = require('../controller/User');

router.post("/Create", contr_user.Create);
router.post("/Show", contr_user.Show);
router.post("/ShowAll", contr_user.ShowAll);
router.post("/Delete", contr_user.Delete);
router.post("/Edit", contr_user.Edit);
router.post("/Search", contr_user.Search);
router.post("/Tickets", contr_user.Tickets);
router.post("/Access", contr_user.Access);
router.post("/ShowAccess", contr_user.ShowAccess);

module.exports=router;