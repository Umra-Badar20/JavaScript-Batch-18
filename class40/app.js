var cardBg;
function deletePost(index) {
  // var card = event.target.parentNode.parentNode;
  // card.remove();
  var allposts = JSON.parse(localStorage.getItem("posts"));
  allposts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(allposts));
  renderPost();
}
function editPost(index) {
  // var card = event.target.parentNode.parentNode;
  // console.log(card);

  // var title = card.children[1].children[0].children[0].children[0].innerText;
  // var description = card.children[1].children[0].children[1].innerText;
  // document.getElementById("title").value = title;
  // document.getElementById("description").value = description;
  // card.remove();
  // console.log(title, description);
  var allposts = JSON.parse(localStorage.getItem("posts"));
  document.getElementById("title").value = allposts[index].title
  document.getElementById("description").value = allposts[index].description
  allposts.splice(index,1)
  localStorage.setItem("posts",JSON.stringify(allposts))
  renderPost()
}

function renderPost() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  var allposts = JSON.parse(localStorage.getItem("posts"));
  console.log(allposts);
  posts.innerHTML = "";
  for (var i = allposts.length - 1; i >= 0; i--) {
    //[a,b,c,d]
    console.log(allposts[i]);

    posts.innerHTML += `
     <div class="card mb-2">
              <div class="card-header">~Post</div>
              <div style="background-image:url(${allposts[i].img})" class="card-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>
                      ${allposts[i].title}
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    ${allposts[i].description}
                  </figcaption>
                </figure>
              </div>
              <div class="ms-auto m-2">
              <button onclick="editPost(${i})" class="btn btn-success">Edit</button>
              <button onclick="deletePost(${i})" class="btn btn-danger">Delete</button>
              </div>
            </div>
    `;
  }
}
renderPost();
function post() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  console.log(title.value, description.value);
  var posts = document.getElementById("posts");
  if (title.value.trim() && description.value.trim()) {
    var allposts = JSON.parse(localStorage.getItem("posts")) || [];
    // if(localStorage.getItem("posts")){
    //   var allposts = JSON.parse(localStorage.getItem("posts"))
    // }else{
    //   var allposts = []
    // }
    var postObj = {
      title: title.value,
      description: description.value,
      img: cardBg,
    };
    allposts.push(postObj);
    localStorage.setItem("posts", JSON.stringify(allposts));
    renderPost();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Title & description can't be empty!",
    });
  }
  title.value = "";
  description.value = "";
}
function selectImg(src) {
  cardBg = src;
  console.log(src, event.target.classList);
  // event.target.className += " selectedImg"
  var bgImg = document.getElementsByClassName("bgImg");
  for (var i = 0; i < bgImg.length; i++) {
    console.log(bgImg[i].className);
    bgImg[i].className = "bgImg";
  }
  event.target.classList.add("selectedImg");
}
