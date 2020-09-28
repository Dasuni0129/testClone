<!DOCTYPE html>
<html>
<head>
      <title></title>
      <script type="text/javascript">

      <link rel="stylesheet" type="text/css" href="email-valid-style.css"/>
      
      function validate(){
            var email = document.frm.email.value;
                 
            if (email == "") {
                  window.alert("Please Enter Your E-mail"); 
                  email.focus();  
                  return false;
            }
            if (!/^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(email)) {
                  window.alert("Enter Valid Email"); 
                  email.focus(); 
                  return false;
                  
            }
           
            return true;
      }
</script>
</head>

<body>
<form name="frm" action="login.html" onsubmit="return validate()" method="post">
<div class="mydiv">

                  
      <p>Enter email to Validate</p>
      <input type="text" name="email"> <br> <br>
      <input type="submit" name="btn" value="Validate">

      

</form>

</body>
</html>