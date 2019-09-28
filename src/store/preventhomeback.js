document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    // Handle the back button
    if($.mobile.activePage[0].id == "homeid") //insert your home id
    {
      navigator.app.exitApp();
    }
}