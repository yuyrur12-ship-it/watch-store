const storeName = "Luxury Watch Store";

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("store-name");

    if(title){
        title.textContent = storeName;
    }
});

const langBtn = document.getElementById("lang-btn");

if(langBtn){
    langBtn.addEventListener("click", () => {

        if(document.documentElement.lang === "ar"){

            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";

            langBtn.textContent = "AR";

        }else{

            document.documentElement.lang = "ar";
            document.documentElement.dir = "rtl";

            langBtn.textContent = "EN";
        }

    });
}
