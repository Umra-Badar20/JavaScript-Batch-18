var cardBg 
function post(){
    var title = document.getElementById("title")
    var description = document.getElementById("description")
    console.log(title.value , description.value);
    var posts = document.getElementById("posts")
   if(title.value.trim() && description.value.trim()){
     posts.innerHTML += `
     <div class="card mb-2">
              <div class="card-header">~Post</div>
              <div style="background-image:url(${cardBg})" class="card-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>
                      ${title.value}
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    ${description.value}
                  </figcaption>
                </figure>
              </div>
            </div>
    `
   }else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Title & description can't be empty!",
});
   }
    title.value = ""
    description.value = ""
}
function selectImg(src){
    cardBg = src
    console.log(src, event.target.classList);
    // event.target.className += " selectedImg"
    var bgImg = document.getElementsByClassName("bgImg")
    for(var i = 0; i<bgImg.length; i++){
        console.log(bgImg[i].className);
        bgImg[i].className = "bgImg"
    }
    event.target.classList.add("selectedImg")
}