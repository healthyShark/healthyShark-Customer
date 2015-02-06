// JavaScript Document
// scripts/views/views
// Script written by Robins Gupta.

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
        'text!../templates/customer-main-template.html',
        'top-nav-bar-view'
    ], function ($, _, Backbone, upload , dualStorage , models, collections, app, customerMainTemplate) {
        
            //Define the views here..
            app.View = app.View || {};
        
            app.View.customerMainView = Backbone.View.extend({
            
                initialize : function()
                {
                
                    //Adding the current view element...
		            app.Global.Router.currentView   = this;
                    //Adding the child views...
                    this.childViews = [];
                
                    this.sendPrescription = this.loadTemplate(customerMainTemplate, 'bg-alizarin', 's', 'SEND PRESCRIPTION', 'sendPrescription');
                    this.manualEntry      = this.loadTemplate(customerMainTemplate, 'bg-darkGreen', 'e', 'ENTER MANUALLY', 'manualEntry');
                    this.callUs           = this.loadTemplate(customerMainTemplate, 'bg-peterRiver', 'c', 'CALL US','callUs');
                
                },
            
                
                events: {
	                //Event for button working..
                    "touchstart #sendPrescription"     : "onSendPrescription",
                    "touchstart #manualEntry"          : "onManualEntry",
                    "touchstart #callUs"               : "onCallUs"
                },
            
            
                
                //Rendering the view..
                render : function(){
                    //Rendering the element..
                    this.$el.append(this.sendPrescription).append(this.manualEntry).append(this.callUs);
                
                    //Now loading the child view navBar..
                    var navBar    = new app.View.customerTopNavBar();
                    var navHeader = $('#nav-header'); 
                    navHeader.append(navBar.render().el);
                    this.childViews.push(navBar);
                
                    return this;
                },
            
       
                //Method for preparing the template..
                loadTemplate : function(itemTemplate, colorClass, icon, title, id){
                    //Loading the template..
                    var Template  = _.template(itemTemplate);
		            var data      =  Template({
                        "colorClass"  : colorClass,
                        "icon"        : icon,
                        "title"       : title,
                        "id"          : id
                    });
                    //Returning the html..
                    return data;
                },
                
                
                //Event on clicking sendPrescription button...
                onSendPrescription : function(e){
                    app.Global.Router.navigate("customer/sendPrescription", {trigger: true});
                },
                
                
                onManualEntry : function(e){
                    alert("Manual entry!");   
                    
                },
                
                
                onCallUs : function(){
                    alert("Call Us");   
                }
                
        });
        return app;
    });//End of define function...
})();