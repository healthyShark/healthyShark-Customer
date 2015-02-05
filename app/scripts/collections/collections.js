/*
 * Script written by Robins Gupta
 * Collections
 */
(function () {
    'use strict';

    define([
        'jquery',
        'underscore',
        'backbone',
        'backbone-model-file-upload',
        'dualStorage',
        'models'
        
    ], function ($, _, Backbone, upload, dualStorage, app) {
        
        app.Collection       = app.Collection  || {};
        
        /*Application collection for wallet History*/
        app.Collection.walletHistory = Backbone.Collection.extend({
            model : app.Model.walletHistory,
            url   : 'customers/walletHistory'
        });
        
        
        app.Collection.slot = Backbone.Collection.extend({
           model : app.Model.slot,
           url  : '/customers/slot'
            
        });
        
        
        app.Collection.ManualEntry = Backbone.Collection.extend({
            model : app.Model.ManualEntry,
            url   : '/customers/manualOrders'
            
        });
        
        
        app.Collection.prescriptionImage = Backbone.Collection.extend({
            model : app.Model.prescriptionImage,
            url   : '/customers/PrescriptionImage'
            
        });
        
        
        app.Collection.orders = Backbone.Collection.extend({
            model : app.Model.order,
            url   : '/customers/orders'
        });
        
        
            
        return app;
});


})();
        
        
        