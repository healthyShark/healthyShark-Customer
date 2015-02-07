// JavaScript Document
// scripts/views/send-prescription
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
        
            var pictureSource; //Picture Source
            var destinationType; //Set the format of the returned value..
        
        
            //Define the views here..
            app.View = app.View || {};
        
            app.View.customerSendPrescription = Backbone.View.extend({
            
                initialize : function()
                {
                    
                    
                    
                    //Adding the current view element...
		            app.Global.Router.currentView = this;
                    //Adding the child views...
                    this.childViews = [];
                
                    this.fromCamera = this.loadTemplate(customerMainTemplate, 'bg-peterRiver', 'c', 'CAMERA', 'fromCamera');
                    this.fromGallery      = this.loadTemplate(customerMainTemplate, 'bg-darkGreen', 's', 'SAVED PHOTOS', 'fromGallery');
                    this.onDeviceReady();
                                
                },
                
                
                //Event on getting device ready..
                onDeviceReady : function() {
                    console.log(window.navigator);
                    pictureSource  = window.navigator.camera.PictureSourceType;
                    
                    destinationType= window.navigator.camera.DestinationType;
                },
            
                
                events: {
	                //Event for button working..
                    "touchstart #fromGallery"     : "onGallerySelected",
                    "touchstart #fromCamera"      : "onCameraSelected"
                },
                
                
                
            
            
                
                //Rendering the view..
                render : function(){
                    //Rendering the element..
                    this.$el.append(this.fromCamera).append(this.fromGallery);
                
                    //Now loading the child view navBar..
                    var navBar    = new app.View.customerTopNavBar();
                    var navHeader = $('#nav-header'); 
                    navHeader.append(navBar.setBackNavBar().el);
                    this.childViews.push(navBar);
                    //document.addEventListener("deviceready", this.onDeviceReady, false);
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
                
                
                //Event on clicking onGallerySelected button...
                onGallerySelected : function(e){
                    //Opening the camera...
                    navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {
                        quality         : 50,
                        destinationType : destinationType.FILE_URI,
                        source          : pictureSource.PHOTOLIBRARY,
                        allowEdit       : true
                    });
                },
                
                 /*Event on clicking camera*/
                onCameraSelected : function(e){
                    //Opening the camera...
                    navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {
                        quality: 50,
                        destinationType : destinationType.FILE_URI
                    });
                    
                },
                
                
                //Getting the uri of the image..
                onPhotoURISuccess : function(imageURI){
                    alert(imageURI);
                },
                
                
                onFail : function(message){
                    alert('Failed because: ' + message);
                }
                

        });
        return app;
    });//End of define function...
})();