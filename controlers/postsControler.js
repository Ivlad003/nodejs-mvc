
const postData = require('../data/post');
module.exports = {
    createPost: (request, response)=>{
        const post = request.body;
        postData.createOne(post).then(post => {
          response.json(post);
        });
    },
    getPosts: (request, response)=>{
        postData.getAll().then(arr => {
            response.json(arr);
        });
    },
}
