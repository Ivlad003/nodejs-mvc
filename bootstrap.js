const postsRouter = require("./routes/postsRouter");

module.exports = function(app) {
  app.use("/posts", postsRouter);
};
