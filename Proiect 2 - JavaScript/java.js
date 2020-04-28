// pentru pagina index:  Navbar

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

// ............................................................................ 

//pentru pagina Torturi-Prajituri: Galeria Foto

var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }



//..............................Formular Contact........................


// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var tipulprod = document.contactForm.tipulprod.value;
    var livrare = document.contactForm.livrare.value;
    var plata = document.contactForm.plata.value;

    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = tipulprodErr = livrareErr = plataErr = true;
    
    // Validare nume
    if(name == "") {
        printError("nameErr", "Introduceti un nume valid");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Introduceti un nume valid");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validare email 
    if(email == "") {
        printError("emailErr", "Introduceti o adresa de mail valida");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Introduceti o adresa de mail valida");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validare telefon 
    if(mobile == "") {
        printError("mobileErr", "Introduceti un numar de telefon valid");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Introduceti 10 cifre pentru un numar de telefon valid");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validare tipulprod
    if(tipulprod == "Select") {
        printError("tipulprodErr", "Selectati produsul dorit");
    } else {
        printError("tipulprodErr", "");
        tipulprodErr = false;
    }
    
    // Validare livrare
    if(livrare == "") {
        printError("livrareErr", "Selectati tipul livrarii");
    } else {
        printError("livrareErr", "");
        livrareErr = false;
    }


     // Validare plata
     if(plata == "") {
        printError("plataErr", "Selectati tipul platii");
    } else {
        printError("plataErr", "");
        plataErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || tipulprodErr || livrareErr || plataErr) == true) {
       return false; }
    else 
        {
        // Creating a string from input data for preview
        var dataPreview = "Ati introdus urmatoarele date: \n" +
                          "Numele si Prenumele: " + name + "\n" +
                          "Adresa Email: " + email + "\n" +
                          "Telefon: " + mobile + "\n" +
                          "Tipul produsului: " + tipulprod + "\n" +
                          "Livrare: " + livrare + "\n" +
                          "Metoda de plata: " + plata + "\n" ;
       
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
        }
};


//..............Parere-Comentariu...................

window.onload = userLogIn;

            function userLogIn(){
                let loggedInUser = localStorage.getItem('com');
                console.log(loggedInUser);
                if(typeof loggedInUser === "string" && loggedInUser.length > 0){
                    document.getElementById('comId').disabled = true;
                    document.getElementById('logInButton').style.display = 'none';
                    document.getElementById('knownUser').innerText = "Comentariul tau: " + loggedInUser;
                    document.getElementById('logOutButton').style.display = 'block';
                }
            }
            function retineUser(){
                localStorage.setItem('com',document.getElementById('comId').value);
                userLogIn();
            }

            function forgetUser(){
                localStorage.removeItem('com');
                location.reload(); // refresh
            }

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
        document.documentElement.style.setProperty('--bg-color', '#6C6C6C');
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
  }

  




  