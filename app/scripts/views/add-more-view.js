// JavaScript Document
// scripts/views/add-more-view.js
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
        'text!../templates/add-more-template.html',
        'top-nav-bar-view',
        'dhoundhu-script'
    ], function ($, _, Backbone, dualStorage, models, collections, app, addMoreTemplate) {

        window.x = addMoreTemplate;
        //Define the views here..
        app.View = app.View || {};
        app.View.customerAddMoreView = Backbone.View.extend({

            //Initializing the view..
            initialize: function () {
                //Adding the current view element...
                app.Global.Router.currentView = this;
                //Adding the child views...
                this.childViews  = [];
                this.addMoreView = this.loadTemplate(addMoreTemplate); 
            },

            //Rendering the view..
            render: function () {
                
                //Rendering the element..
                this.$el.append( this.addMoreView );
                
                //Now loading the child view navBar..
                var navBar = new app.View.customerTopNavBar();
                var navHeader = $('#nav-header');
                navHeader.append(navBar.setBackNavBar().el);
                this.childViews.push(navBar);
                return this;
            },
            
            //Method for preparing the template..
            loadTemplate: function (itemTemplate) {
                //Loading the template..
              
                var Template = _.template(itemTemplate);
                var data = Template();
                //Returning the html..
                return data;
            },


        });

        //returning the app object...
        return app;
    }); //Define function ends here...
})();