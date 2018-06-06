// JavaScript Document
//var tmpl_url = '<?php echo TMPL_URI; ?>';
//var tmplUrl = '<?php echo json_encode(TMPL_URI); ?>';
var $=jQuery;
function getSearchResults() {
  var value = $('#searchtag').val();
  //var tmplUrl = <?php echo json_encode(TMPL_URI); ?>;
  //alert(tmpl_url);
  prevSearch = value;
  $.ajax({
    url: tmpl_url+"/ajax/search.php",
    dataType: 'json',
    method: 'post',
    data: {value: value},
    success: function(data) {
      $('#searchresult').html(data).slideDown('slow');
    }, error: function(xhr) {
      $('#searchresult').html(xhr.responseText).slideDown('slow');
    }
  });

}

var interval = ''
,   prevSearch = ''
,   careerAjaxSend = false;
var $ = jQuery;

$(document).ready(function(e) {

$('.srcIcon').on('click', function(){
        setTimeout(function(){
            $('#searchtag').focus();
      $('#searchresult').slideDown();
      if($('#searchtag').val() == '') $('#searchresult').html();
        }, 100)
    
    });
 
 $('#searchtag').keyup(function(event){
        var  value = $('#searchtag').val();
        if(prevSearch == value) return false;
        window.clearTimeout(interval);
        if(value == ''){
            $('#searchresult').slideUp('slow').html('');
        }else{
            $('#searchresult').slideDown().html('<article><p><a><font color ="#EC7826">Searching ...</font></a></p></article>');
            interval = window.setTimeout(function(){
                getSearchResults();
            }, 800);
        }
    });
    
    
    
        $('.moreLinks li:not(:last-child)').append("|");
    
$(".datepicker").datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'dd-mm-yy' 
     });
setScreen();
        /*datetime pidcker*/
        
        $('#datetimepicker').datetimepicker({
			hours12:false,
                        minDate:'-1970/01/01',
			onChangeDateTime:function(currentTime){
                                var d = new Date();
				//console.log(d);
				var n = d.getMinutes();
				var hn = d.getHours()-1;
				var timeFormat = hn+':'+n;
				//console.log(timeFormat);
			}
		});
$( "#res_menu" ).selectmenu({change:function(){ 
            var id = $(this).val();
            $.ajax({
            url : tmpl_url+'/resources.php',
            method: 'post',
            data: {value: id},
            beforeSend: function() {$("#wait").show();},
            success: function(data){
            $("#wait").hide();
            $('#resource_page').empty().html(data);
          }
        });
          }
        });
   
 });
