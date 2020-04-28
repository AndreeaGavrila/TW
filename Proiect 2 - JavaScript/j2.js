
// .....................culoare..............................
// ........................dark mode.......................

window.onload = function (){
    if (!localStorage.getItem('theme')){
      localStorage.setItem('theme', 'light')
    }
  
    let themeToggle = document.getElementById('checkboxTheme');
    themeToggle.addEventListener('change', function(){
      console.log(this.checked);
      if(localStorage.getItem('theme') === 'light')
      {
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.setProperty('--primary-color', '#9E908B');
        document.documentElement.style.setProperty('--secondary-color', '#F78780');
        document.documentElement.style.setProperty('--font-color', '#959595');
        document.documentElement.style.setProperty('--bg-color', '#949292');
        document.documentElement.style.setProperty('--heading-color', '#6B5B4D');
        document.documentElement.style.setProperty('--nav-color', '#745353');

      } 
      else {
        if(localStorage.getItem('theme') === 'dark')
        {
          localStorage.setItem('theme', 'light');
          document.documentElement.style.setProperty('--primary-color', '#AFA09A');
          document.documentElement.style.setProperty('--secondary-color', '#F4544A');
          document.documentElement.style.setProperty('--font-color', '#f9f9f9');
          document.documentElement.style.setProperty('--bg-color', '#f1f1f1');
          document.documentElement.style.setProperty('--heading-color', '#eecaac');
          document.documentElement.style.setProperty('--nav-color', '#390909');

        }
      }
    })


// ................scimbare imagini..........

    document.getElementById("start").onclick=schimba;

	var img=document.getElementById("imagini").children;

	function imagine(i){
		var sursa=img[i].innerHTML;
		var imagine=document.createElement("img");
		imagine.src=sursa;
    imagine.alt="Nicio Imag";
    imagine.style="width:50%;max-width: 300px"
		imagine.fisier=sursa;
		img[i].innerHTML="";
		img[i].appendChild(imagine);
} 
	function inapoi(i){
		var fisier=img[i].children[0].fisier;
		img[i].innerHTML=fisier;
}                           
		
	function schimba(){
		 imagine(0);
		for(let i=1;i<=img.length;i++){ 
			setTimeout(function(){
				inapoi(i-1);
				if (i < img.length) imagine(i);},3000*i);
		}
  }
  

  // .......inainte, inapoi

  document.getElementById("b2").addEventListener("click", function(){location.href="Torturi-Prajituri.html";});
  document.getElementById("b3").addEventListener("click", function(){history.go(-1);});
  document.getElementById("b4").addEventListener("click", function(){ history.go(1);});
  

//.........colorare text.........

var pl=document.getElementsByTagName("p");
// for(var i=0;i<pl.length;i++)
//   setTimeout(function(culoare,ob){ ob.style.color=culoare;},3000*(i+1),"red",pl[i]);
for(let i=0;i<pl.length;i++)
  setTimeout(function(){colorare("#DC4C43",pl[i]);},3000*(i+1));

function colorare(culoare,ob)
{
 ob.style.color=culoare;
}



}






  