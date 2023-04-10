function validateForm() {
    var x= document.forms['myForm']['name'].value;
    var gender = document.forms['myForm']['gender'].value;
    var hometown = document.forms['myForm']['hometown'].value;
    var address = document.forms['myForm']['address'].value;
    var password = document.forms['myForm']['password'].value;
    var skills = [];
    var java = document.getElementById('java');
    var html = document.getElementById('html');
    var oracle = document.getElementById('oracle');
  
    if(x=="") {
        alert("Name must be filled");
    }
    else if(x.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')){
        alert("Name should contain only alphabets")
    }
    else if(x.includes('@'||'!'||'#'||'$'||'%'||'^'||'&'||'*'||'('||')'||'_'||'-'||'='||'+'||'{'||'}'||'['||']'||'()'||'{}'||'[]'||':'||';'||'?'||'/'||'.'||'>'||'<'||','||`"`)){
        alert('Name should not contain special characters');
    }
    else if(x.length<= 2 || x.length>= 30){
        alert('Name should not be less than 2 characters and should not be longer than 30 characters')
    }

    else if(gender== ""){
        alert('Please select gender')
    }
    else if(hometown== ''){
        alert('Please choose your hometown')
    }
    else if(address==""){
        alert('address cannot be empty')
    }
    else if(java.checked){
        skills.push(java.value);
    }
    else if(html.checked){
        skills.push(html.value);
    }
    else if(oracle.checked){
        skills.push(oracle.value);
    }
    else if(skills = []){
        alert('skills cannot be empty')
    }
    if(password == ""){
        alert('Password cannot be empty')
        console.log('Hello')
    }
    else if(password.length<5){
        alert('Password must contain atleast 5 characters')
    }
    else { 
        alert('Details submitted successfully')
}
}