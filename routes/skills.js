var express = require("express");
var router = express.Router();

// Require the controller that exports dkills CRUD functions
var skillsCtrl = require("../controllers/skills");

// All routes will start with '/skills'

// GET /skills (index functionality - list all)
router.get("/", skillsCtrl.index);
// GET /skills/new (new functionality - show a form)
router.get("/new", skillsCtrl.new);
// GET /skills/:id (show functionality - show one skill)
router.get("/:id", skillsCtrl.show);
// DELETE /skills/:id (delete functionality)
router.delete("/:id", skillsCtrl.delete);
// GET /skills/:id/edit (edit functionality - show the form to edit the skill)
router.get("/:id/edit", skillsCtrl.edit);
// POST /skills (create functionality)
router.post("/", skillsCtrl.create);
// PUT /skills/:id (update functionality)
router.put("/:id", skillsCtrl.update);

module.exports = router;
