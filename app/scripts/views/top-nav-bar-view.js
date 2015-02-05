// JavaScript Document
// scripts/views/nav-bar-views
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
        'text!../templates/customer-main-navigation.html'
    ], function ($, _, Backbone, upload , dualStorage , models, collections, app,  customerNavBarTemplate ) {
        
         //Define the views here..
        app.View = app.View || {};
        
        //Creating a child view..
        app.View.customerTopNavBar = Backbone.View.extend({
            
            initialize : function(){
                
                //Loading the navBar with menu icon...
                this.navBar = this.loadNavBar(customerNavBarTemplate, 'BUY MEDICINE', 'glyphicon glyphicon-menu-hamburger'); 
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
            
            
            
            
            loadNavBar : function(itemTemplate, title, iconClass){
                var Template = _.template(itemTemplate);
                var data     = Template({
                   'title'      :title,
                    'iconClass' :iconClass 
                });
                return data;
            }//end of loadNavBar method..
        
        
        });
        return app;
    });//End of define function...
})();//End 