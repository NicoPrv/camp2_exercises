const request = require("request");



function displayResult(result){
  console.log(result);
  return result;
}


function fetchPosts(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}



function fetchPostByUser(userId, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}


function fetchPost(id, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}




function fetchUsers(callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}


function fetchUser(userId,callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}


function fetchComments(callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}

function fetchCommentsByPost(postId, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}



function publishPost(userId, title, body, callback){
request(

  {
    url: `http://jsonplaceholder.typicode.com/posts/`,
    method: "POST",
    form:{
      "userId": userId,
      "title": title,
      "body": body
    }
  },

  function (error, response, result) {
    if(!error){
      callback(result);
    }else{
      console.warn(error);
    }
  }
  );

}


function publishComment(postId, name, email, body, callback){
request(

  {
    url: `http://jsonplaceholder.typicode.com/comments/`,
    method: "POST",
    form:{
      "postId": postId,
      "name": name,
      "email": email,
      "body":body,
      "callback":callback
    }
  },

  function (error, response, result) {
    if(!error){
      callback(result);
    }else{
      console.warn(error);
    }
  }
  );

}



function updatePostTitle(postId, newTitle, callback){
request(

  {
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "PATCH",
    form:{
      "title": newTitle
    }
  },

  function (error, response, result) {
    if(!error){
      callback(result);
    }else{
      console.warn(error);
    }
  }
  );

}



function updatePostBody(postId, newBody, callback){
request(

  {
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "PATCH",
    form:{
      "body": newBody
    }
  },

  function (error, response, result) {
    if(!error){
      callback(result);
    }else{
      console.warn(error);
    }
  }
  );

}


function updatePost(postId, newTitle, newBody, callback){
request(

  {
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "PATCH",
    form:{
      "title":newTitle,
      "body": newBody
    }
  },

  function (error, response, result) {
    if(!error){
      callback(result);
    }else{
      console.warn(error);
    }
  }
  );

}





//updatePostBody(postId, newBody, callback)


updatePostTitle(2, "lololol", console.log);




module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser:fetchPostByUser,
  fetchPost:fetchPost,
  fetchUser:fetchUser,
  fetchUsers:fetchUsers,
  fetchComments:fetchComments,
  updatePostBody:updatePostBody,
  updatePost:updatePost,
  updatePostTitle:updatePostTitle,
  publishPost:publishPost,
  publishComment:publishComment,
  fetchCommentsByPost:fetchCommentsByPost,
  displayResult: displayResult
}
