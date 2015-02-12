// JavaScript Document
// scripts/views/nav-bar-views
// Script written by Robins Gupta.

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
        'text!../templates/customer-main-navigation.html'
    ], function ($, _, Backbone,  dualStorage , models, collections, app,  customerNavBarTemplate ) {
        
         //Define the views here..
        app.View = app.View || {};
        
        //Creating a child view..
        app.View.customerTopNavBar = Backbone.View.extend({
            
            initialize : function(){
                
                //Loading the navBar with menu icon...
                this.navBar = this.loadNavBar(customerNavBarTemplate, 'BUY MEDICINE', 'glyphicon glyphicon-menu-hamburger', true); 
            },
            
            
             events: {
	                //Event for back button click..
                    "touchstart #backButton"     : "onBackButton",
            },
            
            
            /*On clicking of the back button*/
            onBackButton: function(e){
                e.preventDefault();
                //go to the previous window url state..
                window.history.back();
            },
            
            
            
            //Rendering the view..
            render : function(){
                this.$el.append(this.navBar);
                return this;
            },
            
            
            
            //Function for setting the title of the navbar...
            setTitle : function(title){
                var navTitle = this.$el.find('.menu-title-header');
                navTitle.html(title);
            },
            
            
            
            //Function for setting the setBackNavBar...
            setBackNavBar : function(){
                var backNavbar = this.loadNavBar(customerNavBarTemplate, 'SEND PRESCRIPTION', 'glyphicon glyphicon-chevron-left', false);
                this.$el.empty();
                this.$el.append(backNavbar);
                return this;
            },
            
            
    
            
            
            loadNavBar : function(itemTemplate, title, iconClass, mainPage){
                var Template = _.template(itemTemplate);
                var data     = Template({
                   'title'      : title,
                    'iconClass' : iconClass,
                    'mainPage'  : mainPage
                });
                return data;
            }//end of loadNavBar method..
        
        
        });
        return app;
    });//End of define function...
})();//End 