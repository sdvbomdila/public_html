var er_name = "Please enter your name";
var er_email = "Please enter your email";
var er_emailvalid = "Please enter a valid email";
var er_phone = "Please enter your phone";
var er_phone_1 = "You are exceeding the limit of phone number";
var er_city = "Please enter your city";
var er_message = "Please enter your queries";
var er_position = "Please enter the position that you are applying for";
var err_file="Please enter valid file";
var er_file_format = "Please enter valid file format";
var er_nop = "Please enter the number of participants";
var er_grade = "Please enter the grade";
var er_pname = "Please enter the parent name";
var er_student_name = "Please enter the student name";

function validateEmail(strValue)
{
    var objRegExp = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,3}(\.[a-z]{2}){0,2})$/i;
    return objRegExp.test(strValue);
}
function filevalidate(idval)
{
           var data = '';
           if(jQuery('#'+idval).length>0){
   	   data = jQuery('#'+idval).val();
	   }
           var arr = data.split('.');
           var len = arr.length;
           var arrayext = new Array("docx", "doc", "pdf","odt","txt","rtf");
           console.log(arr);
           if ($.inArray(arr[len - 1], arrayext) == -1) {          
           return 'Please upload only "docx","doc","pdf","odt" and "rtf" format file';
       
       }
       else
       {
       var uploadedFile = document.getElementById(idval);
       var fileSize = uploadedFile.files[0].size;
           if(fileSize > 1024000)
           {
           return 'Oops! Looks like your file exceeded the 1MB limit. Try again';
          
           }
           else
           {
               return 'suc';
           }   
       }    
    
} 
function numeric(event)
{

    //alert(event.keyCode);
    var pattern = /^\d{10}$/;

    if (!(event.keyCode >= 65 && event.keyCode <= 122) || (event.keyCode == 8) || (event.keyCode == 9) || (event.keyCode == 12) || (event.keyCode == 27) || (event.keyCode == 37) || (event.keyCode == 110) || (event.keyCode == 190) || (event.keyCode == 39) || (event.keyCode == 46))
    {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
}

function alphabet(event)
{
    if ((event.keyCode >= 65 && event.keyCode <= 122) || (event.keyCode == 8) || (event.keyCode == 9) || (event.keyCode == 12) || (event.keyCode == 27) || (event.keyCode == 37) || (event.keyCode == 110) || (event.keyCode == 190) || (event.keyCode == 39) || (event.keyCode == 46) || (event.keyCode == 32))
    {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
}
function chk_enquiry()
{

    var x = 0;
    if (jQuery('#ename').val() == '') {
        jQuery('#er_name').css('display', 'block');
        jQuery('#er_name').text(er_name);
        x++;
    } else {
        jQuery('#er_name').css('display', 'none');
    }

    if (jQuery('#phone').val() == '') {
        jQuery('#er_phone').css('display', 'block');
        //alert(hello);
        jQuery('#er_phone').text(er_phone);
        x++;
    }
    else {
        jQuery('#er_phone').css('display', 'none');
    }

    if (jQuery('#email').val() == '') {
        jQuery('#err_email').text(er_email);
        jQuery('#err_valemail').css('display', 'none');
        jQuery('#err_email').css('display', 'block');
        x++;
    } else if ((jQuery('#email').val() != '') && validateEmail(jQuery('#email').val()) === false) {
        jQuery('#err_valemail').text(er_emailvalid);
        jQuery('#err_email').css('display', 'none');
        jQuery('#err_valemail').css('display', 'block');
        x++;
    }
    else {
        jQuery('#err_valemail').css('display', 'none');
        jQuery('#err_email').css('display', 'none');
        jQuery('#err_email').html('&nbsp;');
    }

    if (jQuery('#city').val() == '') {
        jQuery('#er_city').css('display', 'block');
        jQuery("#er_city").text(er_city);
        x++;
    } else {
        jQuery('#er_city').css('display', 'none');

    }

    if (jQuery('#message').val() == '') {
        jQuery('#er_message').css('display', 'block');
        jQuery("#er_message").text(er_message);
        x++;
    } else {
        jQuery('#er_message').css('display', 'none');

    }
    if ($('form').attr('id') == 'enquiry_form') {
        if (x == 0) {
            jQuery('.globalError').css('display', 'none');
            jQuery('.enquiry_form').submit(function () {
                return false;
            });
            return true;
        }
        else {
            jQuery('.globalError').css('display', 'block');

        }
        return false;
    }
    else
    if ($('form').attr('id') == 'enquiry_form_home') {
        if (x == 0) {
            jQuery('.globalError').css('display', 'none');
            jQuery('.enquiry_form_home').submit(function () {
                return false;
            });
            return true;
        }
        else {
            jQuery('.globalError').css('display', 'block');

        }
        return false;
    }
    else
    {
        return false;
    }
}
function chk_advisor()
{

    var x = 0;
    if (jQuery('#ename').val() == '') {
        jQuery('#er_name').css('display', 'block');
        jQuery('#er_name').text(er_name);
        x++;
    } else {
        jQuery('#er_name').css('display', 'none');
    }

    if (jQuery('#phone').val() == '') {
        jQuery('#er_phone').css('display', 'block');
        jQuery('#er_phone').text(er_phone);
        x++;
    } else {
        jQuery('#er_phone').css('display', 'none');
    }

    if (jQuery('#email').val() == '') {
        jQuery('#err_email').text(er_email);
        jQuery('#err_valemail').css('display', 'none');
        jQuery('#err_email').css('display', 'block');
        x++;
    } else if ((jQuery('#email').val() != '') && validateEmail(jQuery('#email').val()) === false) {
        jQuery('#err_valemail').text(er_emailvalid);
        jQuery('#err_email').css('display', 'none');
        jQuery('#err_valemail').css('display', 'block');
        x++;
    }
    else {
        jQuery('#err_valemail').css('display', 'none');
        jQuery('#err_email').css('display', 'none');
        jQuery('#err_email').html('&nbsp;');
    }

    if (jQuery('#city').val() == '') {
        jQuery('#er_city').css('display', 'block');
        jQuery("#er_city").text(er_city);
        x++;
    } else {
        jQuery('#er_city').css('display', 'none');

    }

    if (jQuery('#message').val() == '') {
        jQuery('#er_message').css('display', 'block');
        jQuery("#er_message").text(er_message);
        x++;
    } else {
        jQuery('#er_message').css('display', 'none');

    }
    if ($('form').attr('id') == 'spk_advisor') {
        if (x == 0) {
            jQuery('.globalError').css('display', 'none');
            jQuery('.spk_advisor').submit(function () {
                return false;
            });
            return true;
        }
        else {
            jQuery('.globalError').css('display', 'block');

        }
        return false;
    }
    else
    {
        return false;
    }
}

function chk_appl()
{
    
    var x = 0;
    if (jQuery('#ename').val() == '') {
        jQuery('#er_name').css('display', 'block');
        jQuery('#er_name').text(er_name);
        x++;
    } else {
        jQuery('#er_name').css('display', 'none');
    }

    if (jQuery('#phone').val() == '') {
        jQuery('#er_phone').css('display', 'block');
        
        jQuery('#er_phone').text(er_phone);
        x++;
    }
    else {
        jQuery('#er_phone').css('display', 'none');
    }

    if (jQuery('#email').val() == '') {
        jQuery('#err_email').text(er_email);
        jQuery('#err_valemail').css('display', 'none');
        jQuery('#err_email').css('display', 'block');
        x++;
    } else if ((jQuery('#email').val() != '') && validateEmail(jQuery('#email').val()) === false) {
        jQuery('#err_valemail').text(er_emailvalid);
        jQuery('#err_email').css('display', 'none');
        jQuery('#err_valemail').css('display', 'block');
        x++;
    }
    else {
        jQuery('#err_valemail').css('display', 'none');
        jQuery('#err_email').css('display', 'none');
        jQuery('#err_email').html('&nbsp;');
    }

    if (jQuery('#position').val() == '') {
        jQuery('#err_position').css('display', 'block');
        jQuery("#err_position").text(er_position);
        x++;
    } else {
        jQuery('#err_position').css('display', 'none');

    }

    if (jQuery('#address').val() == '') {
        jQuery('#er_message').css('display', 'block');
        jQuery("#er_message").text(er_message);
        x++;
    } else {
        jQuery('#er_message').css('display', 'none');

    }
        if (jQuery('#resume').val() == '') {
            jQuery('#err_file').text(err_file);
            jQuery('#err_file').css('display', 'block');
            x++;
        } else {
            var resume = jQuery('#resume').val();
            var res = filevalidate("fileupload");
            if (res != "suc")
            {
                $('#err_file').text(er_file_format);
                $('#err_file').css('display', 'block');
                x++;
            }
            else
            {
                $('#err_file').css('display', 'none');
            }
        }
           if ($('form').attr('id') == 'career_form') {
               
        if (x == 0) {
            jQuery('.globalError').css('display', 'none');
            jQuery('.career_form').submit(function () {
                return false;
            });
            return true;
        }
        else {
            jQuery('.globalError').css('display', 'block');
            return false;
        }
        
        
    }
    
}
function chk_parents()
{

    var x = 0;
    if (jQuery('#parent_name').val() == '') {
        jQuery('#er_pname').css('display', 'block');
        jQuery('#er_pname').text(er_pname);
        x++;
    } else {
        jQuery('#er_pname').css('display', 'none');
    }

    if (jQuery('#student_name').val() == '') {
        jQuery('#er_student_name').css('display', 'block');
        //alert(hello);
        jQuery('#er_student_name').text(er_student_name);
        x++;
    }
    else {
        jQuery('#er_student_name').css('display', 'none');
    }

    if (jQuery('#grade').val() == '') {
        jQuery('#er_grade').css('display', 'block');
        jQuery("#er_grade").text(er_grade);
        x++;
    } else {
        jQuery('#er_grade').css('display', 'none');

    }

    if (jQuery('#nop').val() == '') {
        jQuery('#er_nop').css('display', 'block');
        jQuery("#er_nop").text(er_nop);
        x++;
    } else {
        jQuery('#er_nop').css('display', 'none');

    }
    if ($('form').attr('id') == 'enquiry_form') {
        if (x == 0) {
            jQuery('.globalError').css('display', 'none');
            jQuery('.enquiry_form').submit(function () {
                return false;
            });
            return true;
        }
        else {
            jQuery('.globalError').css('display', 'block');

        }
        return false;
    }
    else
    if ($('form').attr('id') == 'enquiry_form_home') {
        if (x == 0) {
            jQuery('.globalError').css('display', 'none');
            jQuery('.enquiry_form_home').submit(function () {
                return false;
            });
            return true;
        }
        else {
            jQuery('.globalError').css('display', 'block');

        }
        return false;
    }
    else
    {
        return false;
    }
}

