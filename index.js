
// Mouse Listener - Change Background Color
document.addEventListener('mousemove',function(event){

   // mapping
   var x = Math.floor((event.clientX/window.innerWidth)*(255));
   var y = 255 - x;

  // background color
  document.body.style.backgroundColor = 'rgb(' + y + ',' + y + ',' + y + ')';

  // text color
  if( x > 122.5){
      document.getElementById('name').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
      document.getElementById('bio').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
      document.getElementById('instruct').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';

  } else{
    document.getElementById('name').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
    document.getElementById('bio').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
    document.getElementById('instruct').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';

  }

});


// Click Lister - Change page
document.addEventListener('click', function(event){

  // redirect
  location.replace("nav.html");

});

// Dalay - Instructions function
setTimeout(iU, 5000);

function iU(){
  document.getElementById('instruct').style.display = "block";
} //end iU
