function validate(evt) {
    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
$.validator.addMethod("valueNotEquals", function(value, element, arg) {
    return arg !== value;
}, "Value must not equal arg.");
$("#hiring-form").validate({
    rules: {
        name: "required",
        designation:"required",
        message: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        mobile: {
            required: true,
            minlength: 10,
            maxlength: 10,
        },
        
        company: {
            required: true,
        }
    },
    messages: {
        name: "<div>Please enter your Full Name</div>",
        designation: "<div>Please enter your Designation</div>",
        email: "<div>Invalid E-mail Address</div>",
        mobile: "<div>Enter your Mobile No</div>",      
        company: "<div>Enter your company Name</div>",
        message: "<div>Enter your Message</div>"
    },
    highlight: function(element) {
        $(element).closest('.errorinput').removeClass('has-success').addClass('has-error')
    },
    unhighlight: function(element) {
        $(element).closest('.errorinput').removeClass('has-error').addClass('has-success');
    },
    submitHandler: function(form) {
        //console.log('error1');
        //  $('form').submit(function() {
        // console.log('error2');
        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
        var skype = $("#skype").val();
        var company = $("#company").val();
        var message = $("#message").val();
        var designation = $("#designation").val();
        //alert(message);
        var dataString = 'name=' + name + '&email=' + email + '&mobile=' + mobile + '&skype=' + skype + '&company=' + company + '&message=' + message+'&designation='+designation;
        //alert(dataString);
        if (name == '' || email == '' || mobile == '' || message == '') {
            // alert("All Fields Are Required!");
            $("#hiring_success").html('Please fill all required fields!');
        } else {
            $.ajax({
                type: "POST",
                url: "ajaxsubmit_hiring.php",
                data: dataString,
                cache: false,
                success: function(result) {
                    //alert(result);
                    if (result == '0') {
                        $("#hiring_success").html('Please Fill All fields');
                    } else {
                       $('#hiring-form')[0].reset();
                       $("#hiring_success").html('Your request has been sent successfully, We will contact you soon.');
                         window.location.href = "thankyou.php";
                    }
                }
            });
        }
        return false;
    }
});



$.validator.addMethod("valueNotEquals", function(value, element, arg) {
    return arg !== value;
}, "Value must not equal arg.");
$("#footer-contact-form").validate({
    rules: {        
        email: {
            required: true,
            email: true
        },        
    },
    messages: {        
        email: "<div>Invalid E-mail Address</div>",       
    },
    highlight: function(element) {
        $(element).closest('.errorinput').removeClass('has-success').addClass('has-error')
    },
    unhighlight: function(element) {
        $(element).closest('.errorinput').removeClass('has-error').addClass('has-success');
    },
    submitHandler: function(form) {
        //console.log('error1');
        //  $('form').submit(function() {
        // console.log('error2');       
        var email = $("#email-footer").val();        
        var dataString = 'email=' + email;
        //alert(email);
        if (email == '') {
            // alert("All Fields Are Required!");
            $("#footer-contact-form_success").html('Please fill Valid Email Address!');
        } else {
            $.ajax({
                type: "POST",
                url: "ajaxsubmit_footer_contact_form.php",
                data: dataString,
                cache: false,
                success: function(result) {
                    if (result == '0') {
                        $("#footer_contact_form_success").html('Mail Not Sent please Check fields');
                    } else {
                        $('#footer-contact-form')[0].reset();
                        $("#footer_contact_form_success").html('Your request has been sent successfully, We will contact you soon.');
                         window.location.href = "thankyou.php";
                    }
                }
            });
        }
        return false;
    }
});


$.validator.addMethod("valueNotEquals", function(value, element, arg) {
    return arg !== value;
}, "Value must not equal arg.");
$("#request-contact-form").validate({
    rules: {        
         mobile1:{
              required:true,
              minlength:10,
              maxlength:10,
            }       
    },
    messages: {        
        mobile1: "<div>Invalid Mobile Number</div>",       
    },
    highlight: function(element) {
        $(element).closest('.errorinput').removeClass('has-success').addClass('has-error')
    },
    unhighlight: function(element) {
        $(element).closest('.errorinput').removeClass('has-error').addClass('has-success');
    },
    submitHandler: function(form) {
        //console.log('error1');
        //  $('form').submit(function() {
        // console.log('error2');       
        var country = $("#country").val();
        var mobile = $("#mobile1").val();        
        var dataString = 'country=' + country+'&mobile='+mobile;
        //alert(dataString);
        if (country == ''||mobile=='') {
            // alert("All Fields Are Required!");
            $("#request_contact_form_success").html('Please Enter Valid Number!');
        } else {
            $.ajax({
                type: "POST",
                url: "ajaxsubmit_request_contact_form.php",
                data: dataString,
                cache: false,
                success: function(result) {
                    if (result == '0') {
                        $("#request_contact_form_success").html('Mail Not Sent please Check fields');
                    } else {
                        $('#request-contact-form')[0].reset();
                        $("#request_contact_form_success").html('Your request has been sent successfully <br> We will contact you soon.');
                       window.location.href = "thankyou.php";
                    }
                }
            });
        }
        return false;
    }
});
