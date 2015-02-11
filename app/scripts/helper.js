// JavaScript Document
// scripts/helper.js
// Script written by Robins Gupta.


'use strict';


define([
        'jquery',
        'underscore'
], function ($, _) {
    
    //Creating  a function for creating helpers functions...
    window.app        = window.app || {}; 
    window.app.helper = window.app.helper || {};

    //Creating for function for generating unique ID ...
    window.app.helper.guid = function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { 
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        }).toUpperCase();
        
    }
    
    return app;

});