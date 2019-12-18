function createPost(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "flex";
}

function hideCreatePostModal(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "none";
}

function postList(){
  location.href = "html/postslist.html"
}
