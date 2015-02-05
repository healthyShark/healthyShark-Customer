/*
 * Script written by Robins Gupta
 * Routers
 */
(function () {
    'use strict';

    define([
        'jquery',
        'underscore',
        'backbone',
        'backbone-model-file-upload',
        'dualStorage',
        'models',
        'collections',
        'app-pages',
        'main-views'
        
    ],  function ($, _, Backbone, upload, dualStorage, models, collections, appPages, app ) {
        
            app.Routers =  app.Routers || {};

            //Defining routers here...
            app.Routers = Backbone.Router.extend({
	            routes:{
                    "*path":	"ShowMainView",
                },
                
                
                //Always call this function before calling a route call function...
                closePreviousViews : function() {
                    console.log("Closing the pervious in memory views...");
                    if (this.currentView)
                        this.currentView.destroy_view();
                },
                
                
                //Showing the MainView..
                ShowMainView : function(){
                    //Closing the previous opened views...
                    this.closePreviousViews();
                    console.log("Default page is getting load...");
                    //Loading the view..
                    var mainElement = $('div.row.main-area');
                    //Clearing the main screen...
                    mainElement.empty();
                    
                    //Loading the view...
                    var mainView = new app.View.customerMainView();
                    
                    mainElement.append(mainView.render().el);
                }
                
            });//Router Closed..
        
        //Loading the router
        app.Global.Router = new app.Routers();       
        Backbone.history.start({root: "/"});
        //Returning the app object..
        return app;
    });


})();