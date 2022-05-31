var courseNameInput = document.getElementById('courseName');
var courseCatgoryInput = document.getElementById('courseCategory');
var coursePriceInput = document.getElementById('coursePrice');
var courseDescriptionInput = document.getElementById('courseDescription');
//console.log(courseNameInput,courseCatgoryInput,coursePriceInput,courseDescriptionInput);
var btnclick = document.getElementById('click');
//console.log(btnclick);
var data = document.getElementById('data');
//console.log(data);
 var inputs = document.getElementsByClassName('inputs');
 //console.log(input);
 var deleteid =document.getElementById('deleteid');
 //console.log(deleteid);
var namealert= document.getElementById('namealert');
var currentindex=0;
var courses =[];


btnclick.onclick = function(){
 if(btnclick.innerHTML == "Add Cource"){
  addcourse();
 }
else {
    update();
}
displaydata();
clearfrom();

}
//pars convert from string to array of object
if(localStorage.getItem("courseslist")==null){
    var courses =[];
}
else{
var courses = JSON.parse(localStorage.getItem("courseslist"));
displaydata();
//console.log(test);

}

function addcourse(){
    var course=  {
        name:courseNameInput.value,
        category:courseCatgoryInput.value,
        price:coursePriceInput.value,
        discription:courseDescriptionInput.value,
          }
         courses.push(course);
        //console.log(courses);
        localStorage.setItem("courseslist",JSON.stringify(courses));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })


}

function displaydata(){
 var result="";
 for(var i=0;i<courses.length;i++){
result+=`<tr>
<td>${(i+1)}</td>
<td>${courses[i].name}</td>
<td>${courses[i].category}</td>
<td>${courses[i].price}</td>
<td>${courses[i].discription}</td>
<td> <button class="update" onclick="getcoursedata(${i})"> Update </button>  </td>
<td> <button class="delete" onclick="deletecourse(${i})"> delete </button> </td>
</tr> `;
 }
 data.innerHTML =result;
}

function clearfrom(){
    //input[0].value="";
for(var i=0; i<inputs.length ; i++)
    inputs[i].value="";
    courseName.classList.add("is-invalid");
}

function deletecourse(i){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed){
      courses.splice(i,1);
      localStorage.setItem("courseslist", JSON.stringify(courses));
       displaydata();
      Swal.fire(
        'Deleted!',
        'Your course has been deleted.',
        'success'
      )
    }
  })
}

deleteid.onclick=function(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("courseslist");
      courses=[];
      data.innerHTML="";

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })



//console.log("haha");

}


function searchtext(name){
  var result="";
for(var i=0;i<courses.length;i++){
if(courses[i].name.toLowerCase().includes(name.toLowerCase()))
result+=`
<tr>
   <td>${(i+1)}</td>
   <td>${courses[i].name}</td>
   <td>${courses[i].category}</td>
   <td>${courses[i].price}</td>
   <td>${courses[i].discription}</td>
   <td> <button class="update"> update </button>  </td>
   <td> <button class="delete" onclick="deletecourse(${i})"> delete </button> </td>
   </tr> `;
    
}
    data.innerHTML =result;


}

function getcoursedata(index){
 //console.log(index);0123
var course =courses[index];
console.log(course);
courseNameInput.value =course.name ;
courseCatgoryInput.value = course.category;
coursePriceInput.value = course.price;
courseDescriptionInput.value=course.discription;
 btnclick.innerHTML="update course";
 currentindex=index;
}

function update(){
//console.log("ssdsd");
//obj
    var course=  {
   name:courseNameInput.value,
  category:courseCatgoryInput.value,
price:coursePriceInput.value,
discription:courseDescriptionInput.value,
          };

     courses[currentindex].name=course.name;
     courses[currentindex].category=course.category;
     courses[currentindex].price=course.price;
     courses[currentindex].discription=course.discription;
     localStorage.setItem("courseslist", JSON.stringify(courses));
     btnclick.innerHTML="Add Cource";
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
   
        }

  /*var pattern=/[a-z]/;
  var text="ahmad";
  console.log(pattern.test(text));*/


  /*function True(){
    courseName.onkeyup=function(){
      var patternname= /^[A-Z][a-z]{2,8}$/;
      if(patternname.test(courseName.value)){
        //btnclick.removeAttribute("disabled");
        courseName.classList.add("is-valid");
        courseName.classList.remove("is-invalid");
        namealert.classList.add("d-none");

      }
      else{
        btnclick.setAttribute("disabled","true");
        courseName.classList.add("is-invalid");
        courseName.classList.remove("is-valid");
        namealert.classList.remove("d-none");
      }
  }

  courseCategory.onkeyup=function fa(){
    var cpattern=  /^[A-Z][a-z]{3,5}$/;
    if(cpattern.test(courseCategory.value)){
      btnclick.removeAttribute("disabled");
      courseCategory.classList.add("is-valid");
      courseCategory.classList.remove("is-invalid");
      n
    }
    else{
      btnclick.setAttribute("disabled","true");
      courseCategory.classList.add("is-invalid");
      courseCategory.classList.remove("is-valid");
      
    }
    
      }


  if(patternname.test(courseName.value) && cpattern.test(courseCategory.value)){
      btnclick.removeAttribute("disabled");
    }
else{
  courseName.classList.add("is-invalid");
}
  }*/

courseName.onkeyup=function(){
      var patternname= /^[A-Z][a-z]{2,8}$/;
      if(patternname.test(courseName.value)){
        btnclick.removeAttribute("disabled");
        courseName.classList.add("is-valid");
        courseName.classList.remove("is-invalid");
        namealert.classList.add("d-none");
      }
      else{
        btnclick.setAttribute("disabled","true");
        courseName.classList.add("is-invalid");
        courseName.classList.remove("is-valid");
        namealert.classList.remove("d-none");
      }
  }

courseCategory.onkeyup=function fa(){
var cpattern=  /^[A-Z][a-z]{3,5}$/;
if(cpattern.test(courseCategory.value)){
  btnclick.removeAttribute("disabled");
  courseCategory.classList.add("is-valid");
  courseCategory.classList.remove("is-invalid");
  n
}
else{
  btnclick.setAttribute("disabled","true");
  courseCategory.classList.add("is-invalid");
  courseCategory.classList.remove("is-valid");
  
}

  }
