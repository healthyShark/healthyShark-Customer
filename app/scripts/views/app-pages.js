// JavaScript Document
// scripts/views/app-pages
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
        'collections'
    ], function ($, _, Backbone, upload , dualStorage , appModel, app) {
        
        //Define all global variable to be used in the views here..
        app.Global = app.Global || {};
        
        
        
        app.Global.showLoadingBar = function(){
            console.log("Showing the loading bar..");

        }

        app.Global.hideLoadingBar = function(){
            console.log("Hiding the loading bar..");
        }
        
        
        
        /*Extending the backbone view...*/
        Backbone.View.prototype.destroy_view = function()
        { 
            //for doing something before closing...useful for closing the child views...
            if (this.beforeClose) {
                this.beforeClose();
            }
            this.undelegateEvents();
            $(this.el).removeData().unbind(); 
            //Remove view from DOM
            this.remove();  
            Backbone.View.prototype.remove.call(this);
        }



        //Function for doing before closing the view...
        Backbone.View.prototype.beforeClose  = function(){
            console.info("Closing the child views...");
            if(this.childViews){
              var len = this.childViews.length;
              for(var i=0; i<len; i++){
                  this.childViews[i].destroy_view();
              }
            }//End of if statement
        } //End of beforeClose function

        
        

        
        return app;
    });


})();