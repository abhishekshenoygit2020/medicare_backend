const { create, getById , get, update, deleteById,createUser} = require("./user.controller");
const router = require("express").Router();


router.post("/add", create)
        .post("/:id/added", getById)
        .get("/", get)
        .post("/:id/update", update)
        .post("/createUser",createUser)
        .delete("/:id/delete", deleteById);

module.exports = router;