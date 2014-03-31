(function (global) {
    var mobileSkin = "",
        app = global.app = global.app || {};
    

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
    }, false);

    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout"});
    
	app.application.skin("Flat");
    
})(window);