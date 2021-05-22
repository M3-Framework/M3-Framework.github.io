function DisplaySidenav(id) {
    let sidenav_id = document.getElementById(id);
    sidenav_id.classList.toggle("active");
}

/* Copy Text Inside Code Blocks */
function CopyClip(txt_src=''){
    if(navigator.clipboard){
        var cp = document.getElementById(txt_src);
        const notif = document.createElement("div");
        notif.className = "m3-notification m3-dark-grey";
        try {
            navigator.clipboard.writeText(cp.innerText);

            notif.innerHTML += "<span class='m3-large'>Copied! <i class='fas fa-check-circle m3-text-green'></i></span>";
            document.body.append(notif);

        } catch {
            notif.innerHTML += "<span>Something went wrong! <i class='fas fa-times-circle m3-text-red'></i></span>";
            document.body.append(notif);
        }
    } else{ return }
}

/* Search Input Inside Sidenav */

function SearchTxt(){
    let input, filter, ul, li, a, i, txtValue, results_found;
    input = document.getElementById('Searchbar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("SearchResults");
    li = ul.getElementsByTagName('li');
    results_found = 0;

    if(input.value!=""){
        ul.style.display = "block";
        
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
                results_found++;
            } else {
                li[i].style.display = "none";
            }
        }
    }

    else{ul.style.display = "none";}

    if(results_found == 0){
        
    }
}

/** For Accordions Inside Sidenav **/
let acc = document.getElementsByClassName("m3-accordion"); let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = (panel.scrollHeight+5) + "px";
        } 
    });
}