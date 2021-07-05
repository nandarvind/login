
<script >

function validateform(){
    var name=document.form.Uname.value; 
    var password=document.form.Pass.value;
    var status= true;
        if (name==null || name==""){  
    alert("Username can't be blank");  
    return false;  
    }

    re = /^\w+$/;
    if(!re.test(form.Uname.value)) {
      alert( "Username must contain only letters and numbers ");
      form.Uname.focus();
      return false;
    }

    
        if (password==null || password==""){
    alert("Password can't be blank");
    return false;   
        }


    re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;  
    if(!re.test(form.Pass.value)) {
      alert( "password must contain  8 character length and atleast one digit and one character ");
      form.Pass.focus();
      return false;
    }

    else{
        alert('SUCCESS');
        window.location.reload()
        return true;
        }
    }
        

    </script>
