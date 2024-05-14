document.querySelector("#primaryColorSelector").oninput = function(){
    document.querySelector("body").style.setProperty("--primary-color",
        document.querySelector("#primaryColorSelector").value
    );
};
document.querySelector("#fontSizeSelector").oninput =function(){
    document.querySelector("body").style.setProperty(
        "--font-size",
        document.querySelector("#fontSizeSelector").value="pt"
    
    );
};