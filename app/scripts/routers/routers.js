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
        'dualStorage',
        'models',
        'collections',
        'app-pages',
        'main-views',
        'send-prescription-view',
        'add-more-view'
        
    ],  function ($, _, Backbone, dualStorage, models, collections, appPages, app , sendPrescriptionView ) {
        
            app.Routers =  app.Routers || {};

            //Defining routers here...
            app.Routers = Backbone.Router.extend({
	            routes:{
                    "customer/sendPrescription"     :   "showSendPrescriptionView",
                    "customer/addMore"              :   "addMorePrescriptionView",
                    "*path"                         :   "showMainView",
                    
                },
                
                
                //Always call this function before calling a route call function...
                closePreviousViews : function() {
                    console.log("Closing the pervious in memory views...");
                    if (this.currentView)
                        this.currentView.destroy_view();
                },
                
                
                //Routers showing the view of sendPrescription...
                showSendPrescriptionView : function(){
                    //Closing the previous opened views...
                    this.closePreviousViews();
                    var sendPrescription = new app.View.customerSendPrescription();
                    //Loading the view..
                    var mainElement = $('div.row.main-area');
                    //Clearing the main screen...
                    mainElement.empty();
                    
                    mainElement.append(sendPrescription.render().el);
                },
                
                
                //Showing the MainView..
                showMainView : function(){
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
                },
                
                
                addMorePrescriptionView : function(){
                    //Closing the previous opened views...
                    this.closePreviousViews();
                    console.log("Add more prescription page is getting load...");
                    //Loading the view..
                    var mainElement = $('div.row.main-area');
                     //Clearing the main screen...
                    mainElement.empty();
                    //Loading the view...
                    var addMoreView = new app.View.customerAddMoreView();
                    mainElement.append(addMoreView.render().el);
                }
                
                
                
            });//Router Closed..
        
        //Loading the router
        app.Global.Router = new app.Routers();       
        Backbone.history.start({root: "/"});
        //Returning the app object..
        return app;
    });


})();