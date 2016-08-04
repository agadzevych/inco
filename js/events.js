var chk_menu = document.getElementById("chk-menu");
var as_filter_area = document.getElementById("as-filter-area");
var div_menubtn = document.getElementById("div-menubtn");
var div_filtermenu = document.getElementById("div-filtermenu");

chk_menu.addEventListener("change", function(event){
    
    if(this.checked){
        
        as_filter_area.classList.add("expanded");
        div_menubtn.classList.add("checked");
        div_filtermenu.style.display = "initial";

    } else{
        
        as_filter_area.classList.remove("expanded");
        div_menubtn.classList.remove("checked");
        div_filtermenu.style.display = "none";
        
    }
});