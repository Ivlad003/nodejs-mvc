const express = require("express");
const postsControler = require("../controlers/postsControler")();
const postsRouter = express.Router();

postsRouter.post("/", postsControler.createPost);
postsRouter.get("/", postsControler.getPosts);

module.exports = postsRouter;
