function validate() {
    console.log('Hello')
    let firstname = document.getElementById('first-name').value;
    let lastname = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact-number').value;
    let password = document.getElementById('password').value;

    if(firstname == ""){
        alert('First name cannot be empty')
    }
    else if(lastname == ""){
        alert('Last name cannot be empty')
    }
    else if(email == ""){
        alert('email cannot be empty')
    }
    else if(contact == ""){
        alert('contact cannot be empty')
    }
    else if(password == ""){
        alert('password cannot be empty')
    }
    else{
        alert('details submitted successfully')
    }
    
}

function contact(){
    let name= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let subject= document.getElementById('subject').value;
    let message= document.getElementById('message').value;

    if(name== ""){
        alert('name cannot be empty')
    }
    else if(email== ""){
        alert('email cannot be empty')
    }
    else if(subject == ""){
        alert('subject cannot be empty')
    }
    else if(message==""){
        alert('message cannot be empty')
    }

}