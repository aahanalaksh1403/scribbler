
/* Code for Trash Modal */
var trashFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        // Get the trash modal
        var modal = document.getElementsByClassName('trash-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("post-trash")[i];
        //  Get the element for on click yes
        var yesclick = document.getElementsByClassName("trash-modal-button-yes")[i];

        // Get the element for on click no
        var close = document.getElementsByClassName("trash-modal-button-no")[i];

        // When the user clicks on the trash icon, open the modal 
        div.onclick = function() {
            // modal.style.visibility = "hidden" 
              modal.style.display = "block";
              
             //modal.style.display = "none";
         }
        // When the user clicks on `Yes` button, close the modal
        yesclick.onclick = function() {
            //modal.style.display = "none";
            modal.parentNode.parentNode.remove();
            modal.style.display = "block";
        }

        // When the user clicks on `No` button, close the modal
        close.onclick = function() {
            
            modal.style.display = "none";
        }
    }
}

trashFunctions(5)

function getPost() {
    location.href = "post.html";
}
