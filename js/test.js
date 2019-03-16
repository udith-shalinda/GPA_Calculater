
                var totalcredit =0;
                var totalcreditmark=0;
            function addelement(){ 
                var sel = document.getElementById("selectoption");
                var credit= document.getElementById("credit").value;
                var grade= sel.value;
                var gradetext = sel.options[sel.selectedIndex].text;
                totalcreditmark += credit*grade;
                totalcredit += credit*1;
                $("ul").append("<li>"+credit+"   "+grade+"   "+ gradetext+"<span>X</span></li>");
                var gpa = totalcreditmark/totalcredit;
                document.getElementById("gparesult").innerHTML = gpa;
                
            }


$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		addelement();
	}
});

$("ul").on("click","span",function(event){
	$(this).parent().remove();    //have to set the gpa;

});








            