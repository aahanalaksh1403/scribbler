function showSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
  }
  
  function hideSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  }
  
  function showSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
  }
  
  function hideSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }
function editComment(){
  
}
var clicks = 0;
function incrementCounter(){
  document.getElementById("postLikeId").innerText = "Liked";
 //var cntr = document.getElementById('counterLikedBy');
 clicks += 1;
 
 //var newval= val+1;
 //cntr.innerText = val+1; 

 if(clicks == 1){
  document.getElementById("counterLikedBy").innerText = clicks + ' person likes this';

 }
else
{
  document.getElementById("counterLikedBy").innerText = clicks + ' people like this'; 
}
}


function toggleEditSave(){
  var toggleSave = '<button class="postEdit">Save '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-save" aria-hidden="true"></i>'+
  '</button>';
  var toggleEdit = '<button class="postEdit">Edit '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
  '</button>';

  var edtSaveBtn = document.getElementById('editPost');
  var toDo = (edtSaveBtn.innerText).toString().trim();
  console.log(toDo);
  console.log(toDo.localeCompare('Edit'));
  if(toDo.localeCompare('Edit')===0){
    console.log("Currently Edit");
    var bSave = document.getElementById('editPost');
     //****edit title

  bSave.innerHTML = toggleSave;
   //****edit title
  enableEditableText();
    
  }
  else{
    console.log("Currently Save");
    var bEdit = document.getElementById('editPost');
    bEdit.innerHTML = toggleEdit;
    updateEditedBlog();
  }

}

function enableEditableText(){
  var getBlogContentEle = document.getElementById('blogBody');
  var getBlogContent = getBlogContentEle.innerText;

  //Div element
  var getDiv = document.getElementById('blogBodyId');
  //Create a input element
  var inputElement = '<textarea class="editTextBlog" id="txtEditedBlog" rows="10" cols="220">'+
  getBlogContent+
  '</textarea>'
  //Update the Div element
  getDiv.innerHTML = inputElement;
 //edit title
 var getTitleContentEle = document.getElementById('blogTitleNew');
 var getTitleContent = getTitleContentEle.innerText;

 //Div element
 var getTitleDiv = document.getElementById('blogTitle');
 //Create a input element
 var inputTitleElement = '<textarea class="editTextTitle" id="txtEditedTitleBlog" rows="2" cols="60">'+
 getTitleContent+
 '</textarea>'
 //Update the Div element
 getTitleDiv.innerHTML = inputTitleElement;

}
function updateEditedBlog(){
  var editedBlog = document.getElementById('txtEditedBlog');

  var textEdited = (editedBlog.innerHTML).toString();
  
  var pElement = '<p id="blogBody">'+ 'UPDATED: '
  + textEdited+
  '</p>';
  var getDiv = document.getElementById('blogBodyId');
  getDiv.innerHTML=pElement;
  //title
  var updatedTitle = document.getElementById('txtEditedTitleBlog');

  var titleEdited = (updatedTitle.innerHTML).toString();
  
  var pElement = '<p id="blogTitleNew">'+ 'UPDATED: '
  + titleEdited+
  '</p>';
  var getDiv = document.getElementById('blogTitle');
  getDiv.innerHTML=pElement;
}
function addComment(){
  console.log("Inside add comment");
  var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function(){
    document.getElementById("txtCommentCommentPost").innerHTML;
  });

  var x = document.getElementById("txtCommentCommentPost").value;
  
  console.log(x);
  var pElement = '<p >'+ x + '</p>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}
