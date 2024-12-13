import express from "express";
import postModel from "../models/post.model.js";   



const router = express.Router()



router.get("/anothertest", (req, res) => {
    res.status(200).send("Hello from user route");
});


router.get("/", (req, res) => {
    res.status(200).send("Hello from user route")

})


export default router;