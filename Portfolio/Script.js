var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/*Side Bar Menu */
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


/* Contact Information Validation */
document.querySelector(".btn.submit-btn").addEventListener('click', function(event){
    event.preventDefault();

    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();
    /*const sub = document.getElementById('sub').value.trim();*/
    const message = document.getElementById('Message').value.trim();

    let isValid = true;

    if(name === "" || name.length < 3){
        alert("Please Enter a valid name (At least 3 Characters)");
        isValid = false;
    }
    
    else if(email === "" || !validateEmail(email)){
        alert("Please Enter valid E-mail Address");
        isValid = false;
    }

    else if(message === "" || message.length < 10){
        alert("Message must be 10 Characters long");
        isValid = false;
    }

    else {
        alert("Form Submitted Successfully!");
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

