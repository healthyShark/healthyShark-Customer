/*Script written by Robins Gupta */

/* Writing the config file for requirejs */
require.config({
    
    baseUrl : 'scripts',
    
    paths   : {
        
        /* Dependencies */
        'underscore'                : '../bower_components/underscore/underscore-min',
        'backbone'                  : '../bower_components/backbone/backbone',
        'jquery'                    : '../bower_components/jquery/dist/jquery',
        'bootstrap'                 : '../bower_components/bootstrap/dist/js/bootstrap.min',
        'backbone-model-file-upload': '../bower_components/backbone-model-file-upload/backbone-model-file-upload',
        'dualStorage'               : '../bower_components/Backbone.dualStorage/backbone.dualstorage',
        'text'                      : '../bower_components/text/text',
        'fastclick'                 : '../bower_components/fastclick/lib/fastclick',
        
        /* My Javascript files */
        'models'                    : 'models/models',
        'collections'               : 'collections/collections',
        'app-pages'                 : 'views/app-pages',
        'main-views'                : 'views/main-views',
        'routers'                   : 'routers/routers',
        'app-main'                  : 'app-main/app-main',
        'dhoundhu-script'           : 'my-script',
        'index'                     : 'index',
        'top-nav-bar-view'          : 'views/top-nav-bar-view',
        'send-prescription-view'    : 'views/send-prescription-view',
        'fileSystem'               : 'phonegap/fileSystem'
  
    },

    
    shim    : {
        //Loading the underscore..
        'underscore' : {
                exports : '_'   
        },
        
        //Loading the backbone
        'backbone' : {
            deps   : [ 'jquery','underscore'],
            exports: 'Backbone'
        },
        
        'bootstrap' : { 
            "deps" :['jquery'] 
        },
        
        
        'dualStorage' : {
            'deps'      : ['jquery', 'backbone', 'backbone-model-file-upload'],
            'exports'   : 'Backbone'
        },
        
        'backbone-model-file-upload': {
            deps    : ['jquery', 'underscore', 'backbone'],
            exports : 'Backbone'
        }
        
    }
    
});



define(['bootstrap',
        'fastclick',
   'routers'
], function (app, FastClick) {
    FastClick.attach(document.body);
    console.log("Loading the data...");
    window.x = app;
});//End of define function...


 
        
        