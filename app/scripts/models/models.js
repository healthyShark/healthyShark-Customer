/*
 * Script written by Robins Gupta
 * Model 
 */
(function () {
    'use strict';

    define([
        'jquery',
        'underscore',
        'backbone',
        'backbone-model-file-upload',
        'dualStorage'
    ], function ($, _, Backbone) {
        
        /*Defigning the global variable*/    
        var app         = window.app || {};
        app.Model       = app.Model  || {};
      
        /* Define the users model here */
        app.Model.user   = Backbone.Model.extend({
        
            defaults : {
                'id'            : null,
                'name'          : '',
                'emailAddress'  : '',
                'phoneNumber'   : '',
                'username'      : '',
                'profileLink'   : '',
                'sessionId'     : ''
            },
        
            urlRoot : 'customers/user'
        
        });
    
    
    
        /*Defigning the model for wallet*/
        app.Model.wallet  = Backbone.Model.extend({
            defaults : {
                'customerId'        : null,
                'currentBalance'    : ''
            },
        
            urlRoot: 'customers/wallet'
        
        });
    
    
    
        app.Model.walletHistory  = Backbone.Model.extend({
            defaults : {
                'id'                : null,
                'transactionType'   : '',
                'transactionId'     : '',
                'orderNumber'       : '',
                'status'            : ''
            },
        
            urlRoot: 'customers/walletHistory'
        
        });
    
        /*Model for address*/
        app.Model.address = Backbone.Model.extend({
        
            defaults : {
                'id'            : null,
                'name'          : '',
                'phoneNumber'   : '',
                'customerId'    : '',
                'houseNumber'   : '',
                'streetName'    : '',
                'area'          : '',
                'landmark'      : '',
                'pinCode'       : '',
                'city'          : '',
                'latitude'      : '0',
                'longitude'     : '0'
            },
        
            urlRoot:    'customers/address'
          
        });
    
    
    
        /*Model for slot*/
        app.Model.slot   = Backbone.Model.extend({
        
            defaults : {
                'date'      : '',
                'time'      : '',
                'status'    : '' 
            }
        
            //urlRoot: '/customers/slot'
        });
    
  
    
    
        /*Model for prescription Image*/
        app.Model.prescriptionImage = Backbone.Model.extend({
        
            defaults : {
                'id'        : null,
                'imageLink' :   '',
                'notes'     :   ''
            },
        
            urlRoot: '/customers/PrescriptionImage'
        
        });
    
    
    
    
        /*Model for Manual Entry*/
        app.Model.ManualEntry   = Backbone.Model.extend({
            defaults : {
                'id'        : null,
                'drugName'  : '',
                'price'     : '0',
                'drugId'    : '0',
                'strip'     : false, /*Value boolean value */
                'quantity'  : '0' /*Items quantity*/
            },
        
            /*urlRoot : '/customers/manualOrders'*/
        
        });
    
    
    
    
        app.Model.order = Backbone.Model.extend({
        
            defaults : {
                'id'                   : null,
                'customerId'           : null,
                'prescriptionImage'    : '',
                'status'               : '',
                'estdTime'             : '',
                'bill'                 : '',
                'delieveryAddress'     : '',
                'delieveryTime'        : '',
                'delieveryDate'        : '',
                'medicineForDays'      : ''
            },
        
            urlRoot : '/customers/orders'
        
        });
    
    
        return app;
});


})();


    
    
    

















































