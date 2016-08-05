var chk_menu = document.getElementById("chk-menu");
var as_filter_area = document.getElementById("as-filter-area");
var div_menubtn = document.getElementById("div-menubtn");
var div_filtermenu = document.getElementById("div-filtermenu");
var btn_submit = document.getElementById("btn-submit");
var frm_record = document.getElementById("frm-record");
var txt_prjname = document.getElementById("txt-prjname");


//document.addEventListener("click", function(event){
//    console.log(event);
//});

chk_menu.addEventListener("change", function(event){
    
    if(this.checked){
        
        as_filter_area.classList.add("expanded");
        div_menubtn.classList.add("checked");
        div_filtermenu.classList.add("visible");

    } else{
        
        as_filter_area.classList.remove("expanded");
        div_menubtn.classList.remove("checked");
        div_filtermenu.classList.remove("visible");
        
    }
});

//prohibit page refresh on submit
btn_submit.onclick = function(event){return false;};

btn_submit.addEventListener("click", function(event){
    console.log("added");
    return false;
});


txt_prjname.onfocus = function(event){console.log(event);};
