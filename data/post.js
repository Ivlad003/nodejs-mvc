const Post = require('../models/post');

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {

      Post.find({}, function(err, docs) {
        if (err) throw reject(err);
        resolve(docs);
      });


    });
  },

  createOne: post => {
    return new Promise((resolve, reject) => {
      const post = new Post(post);

      post.save(function(err) {
        if (err) return reject(err);
        resolve(post);
      });


    });
  }
};
