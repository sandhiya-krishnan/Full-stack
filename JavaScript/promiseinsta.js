async function likeCode(){
    return new Promise((like)=>{
            like("comment posted successfully in the post")
    })
 }

async function commentCode(){
    return new Promise((commentPosted)=>{
            commentPosted("comment posted successfully in the post")
    })
 }
 
 async function createPost(){
    var post =new Promise((cPost)=>
    {
        cPost("post created successfully")
    })
    var [posts,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost()
