console.log("welcome to the note App");
showNotes(); 
let addbtn=document.getElementById("addBtn");

addbtn.addEventListener("click",function(ele){
    let addtxt= document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    
    if (notes == null){
       notesObj=[]; 
    }else{
      notesObj=JSON.parse(notes) ; 
    } 
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="" ; 
   // console.log(notesObj);
    showNotes(); 
 
  })

function showNotes(){
  let notes=localStorage.getItem("notes");
    
  if (notes === null){
     notesObj=[]; 
  }else{
    notesObj=JSON.parse(notes) ; 
  }
  let html="";
  notesObj.forEach((element,index) => {
     html+=`<div class="noteCard card mx-2 my-2" style="width: 18rem;">
     <div class="card-body my-3">
     <h5 class="card-title">Note ${index+1}</h5>
     <p class="card-text"> ${element} </p>
     <button id=${index} onclick=deleteNote(id) class="btn btn-primary">Delete Note</button>
     </div>
    </div>`;
   
});

let notesEle=document.getElementById("notes");  
  if (notesObj!= 0) {
    notesEle.innerHTML=html;
  }else{
    notesEle.innerHTML=`Nothing to show press the "Add Notes" from the above to add the notes`;
  }
}

//function to delete note
function deleteNote(index){
 // console.log("deleting this node",index);
  let notes=localStorage.getItem("notes");
    
    if (notes == null){
       notesObj=[]; 
    }else{
      notesObj=JSON.parse(notes) ; 
    } 
  notesObj.splice(index,1);//deleting the elements from where and how many 
 // console.log(notesObj);
  localStorage.setItem("notes",JSON.stringify(notesObj));  
  showNotes();
}

let search=document.getElementById("searchTxt");
 search.addEventListener("input",function(){
  let inpvar=search.value.toLowerCase();
 // console.log("input event is fired ",inpvar);
 
  let noteCards=document.getElementsByClassName("noteCard");
 
  Array.from(noteCards).forEach(function(element){
    let cardtxt=element.getElementsByTagName("p")[0].innerText;
 //   console.log(cardtxt);
    if (cardtxt.includes(inpvar)){
      element.style.display="block";
    }else{
      element.style.display="none";
    }

  })
 })

