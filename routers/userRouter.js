import express from "express";
 
import { create, deleteUser, getAllUsers,getUserById, update } from "../controller/userController.js";

const route =express.Router();
/*http://localhost:5000/api/create to save user*/
route.post("/create",create)
/*http://localhost:5000/api/users to get allUsers*/ 
route.get("/users",getAllUsers)
/*http://localhost:5000/api/user/68f1b4f6bdfa319e8eca14da*/ 
route.get("/user/:id",getUserById)
/*http://localhost:5000/api/update/68f1b4f6bdfa319e8eca14da*/ 
route.put("/update/:id",update)
/*http://localhost:5000/api/delete/68f1b4f6bdfa319e8eca14da*/ 
route.delete("/delete/:id",deleteUser)

export default route 