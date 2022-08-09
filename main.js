import { ref, push, set, database, onValue } from "./firebase.js";
let submitBtn = document.getElementById("SubmitBtn");
let blogInput = document.getElementById("blogInput");
let username = document.getElementById("username");
let blogsContainer = document.getElementById("blogsContainer");

let blogPosts = ref(database, "blogs");

submitBtn.onclick = function (event) {
  event.preventDefault();
  let tempBlog = new Blog(blogInput.value, username.value);
  console.log(tempBlog);
  let newBlogPost = push(blogPosts);
  set(newBlogPost, tempBlog);
};
onValue(blogPosts, (snapshot) => {
  blogsContainer.innerHTML = "";
  console.log(snapshot.val());
  let data = snapshot.val();
  console.log(data);
  for (const property in data) {
    console.log(data[property].post);
    let newh = document.createElement("h1");
    newh.innerText = data[property].post;
    let newP=document.createElement("p");
    newP.innerHTML=data[property].user;
    blogsContainer.appendChild(newh)
    blogsContainer.appendChild(newP);
  }
});

class Blog {
  constructor(post, user) {
    this.post = post;
    this.user = user;
  }
}
