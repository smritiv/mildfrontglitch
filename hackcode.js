function get_todos(){
    var todos=new Array;
    var todos_str=localStorage.getItem('todos');
    if (todos_str !== null){
        todos=JSON.parse(todos_str);
    }
    return todos;
}

function add(){
    var task=document.getElementById('task').value;
    var todos=get_todos();
    if (task!==""){
        todos.push(task);
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    show();
    document.getElementById('task').value='';
    return false;
}

function remove(){
    var id=this.getAttribute('id');
    var todos=get_todos();
    todos.splice(id,1);
    localStorage.setItem('todos',JSON.stringify(todos)); //complete function, take task todos[1] .strike//
    show();
    return false;
}

function complete(){
    var id=this.getAttribute('id');
    var todos=get_todos();
    taskdes=todos[id];
    newtaskdes=taskdes.strike();
    todos[id]=newtaskdes;
    localStorage.setItem('todos',JSON.stringify(todos)); //complete function, take task todos[1] .strike//
    
    if(id==0){
        if (document.getElementById("im1").src.endsWith("green.png")){
            document.getElementById("im1").src = "/static/images/image1.jpeg";
            /*var image = new Image();
            var ctx = canvas.getContext('2d');
            resize();
            image.onload=function(){
                ctx.drawImage(image, 400, 400);
            };
            image.src = "image1.jpg";*/
        }
    }
    else if(id==1){
        if (document.getElementById("im2").src.endsWith("green.png")){
            document.getElementById("im2").src = "/static/images/image2.jpeg";
        }
    }
    else if(id==2){
        if (document.getElementById("im3").src.endsWith("green.png")){
            document.getElementById("im3").src = "/static/images/image3.jpeg";
        }
    }
    else if(id==3){
        if (document.getElementById("im4").src.endsWith("green.png")){
            document.getElementById("im4").src = "/static/images/image4.jpeg";
        }
    }
    else if(id==4){
        if (document.getElementById("im5").src.endsWith("green.png")){
            document.getElementById("im5").src = "/static/images/image5.jpeg";
        }
    }
    else if(id==5){
        if (document.getElementById("im6").src.endsWith("green.png")){
            document.getElementById("im6").src = "/static/images/image6.jpeg";
        }
    }
    show();
    return false;
}

function show(){
    var todos=get_todos();
    var html='<ol>';
    for(var i=0;i<todos.length;i++){
        html += '<li>'+todos[i]+'              <button class="complete" id="' +i+'">Completed</button><button class="delete" id="' +i+'">Delete</button></li>'; //add complete button <button class="complete" id="' +i+'">Completed</button>//
        //maybe have to do a separate line?//
    };
    html += '</ol>';
    document.getElementById('todos').innerHTML=html;
    var buttons=document.getElementsByClassName('delete');
    //var buttons=document.getElementsByClassName('complete')//
    for (var i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click',remove);
    //for (var i=0; i<buttons.length;i++){
        //buttons[i].addEventListener('click',complete); //copy for loop for complete, fix for completed//
    };
    var buttons=document.getElementsByClassName('complete');
    for (var i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click',complete);
    };

}

function changeImage() {
    if (document.getElementById("im1").src == "green.png") 
    {
        document.getElementById("im1").src = "image1.jpg";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "green.png";
    }
}

document.getElementById('at').addEventListener('click',add);
show();

/*var canvas = document.getElementById('board');

document.body.style.margin = 0;
canvas.style.position = 'fixed';

//var image = new Image();
var ctx = canvas.getContext('2d');
resize();
image.onload=function() {
  ctx.drawImage(image, 0, 0);
};
image.src = "";

var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  if (e.buttons !== 1) return;

  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000000';

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}
*/