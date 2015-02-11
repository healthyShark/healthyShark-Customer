// Generated on 2015-01-30 using generator-phonegap 0.1.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

/**
 * Module dependencies
 */
//var cordova = require('cordova');


module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-cordova-cli');
	
	grunt.initConfig({
		// configurable paths
		yeoman: {
			app: 'app',
			dist: 'dist'
		},

		phonegap: {
			config: {
				root: 'dist',
				config: 'config.xml',
				cordova: '.cordova',
				path: 'phonegap',
				plugins: ['org.apache.cordova.camera', 'org.apache.cordova.file' ],
				platforms: ['android'],
				verbose: false
			}
		},

        watch: {
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
		karma: {
			options: {
				files: ['test/**/*.js']
			},
			continuous: {
			},
			dev: {
			}
		},
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        
        
        
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },
        
        
        
        //Enabling the uglify to uglify all the javascript files and templates....
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        uglify: {
            my_target: {
                files:{
               
                    //dependencies..
                    '<%= yeoman.dist %>/bower_components/underscore/underscore-min.js' : '<%= yeoman.app %>/bower_components/underscore/underscore-min.js',
                    '<%= yeoman.dist %>/bower_components/backbone/backbone.js' : '<%= yeoman.app %>/bower_components/backbone/backbone.js',
                    '<%= yeoman.dist %>/bower_components/jquery/dist/jquery.js' : '<%= yeoman.app %>/bower_components/jquery/dist/jquery.js',
                    '<%= yeoman.dist %>/bower_components/bootstrap/dist/js/bootstrap.min.js' : '<%= yeoman.app %>/bower_components/bootstrap/dist/js/bootstrap.min.js',
                    '<%= yeoman.dist %>/bower_components/backbone-model-file-upload/backbone-model-file-upload.js' : '<%= yeoman.app %>/bower_components/backbone-model-file-upload/backbone-model-file-upload.js',
                    '<%= yeoman.dist %>/bower_components/Backbone.dualStorage/backbone.dualstorage.js' : '<%= yeoman.app %>/bower_components/Backbone.dualStorage/backbone.dualstorage.js',
                    '<%= yeoman.dist %>/bower_components/text/text.js' : '<%= yeoman.app %>/bower_components/text/text.js',
                    '<%= yeoman.dist %>/bower_components/requirejs/require.js' : '<%= yeoman.app %>/bower_components/requirejs/require.js',
                    '<%= yeoman.dist %>/bower_components/fastclick/lib/fastclick.js' : '<%= yeoman.app %>/bower_components/fastclick/lib/fastclick.js',
                    '<%= yeoman.dist %>/scripts/phonegap/fileSystem.js' : '<%= yeoman.app %>/scripts/phonegap/fileSystem.js',
                    
                    
                    
                    
                    //Scripts files..
                    '<%= yeoman.dist %>/scripts/my-script.js' : '<%= yeoman.app %>/scripts/my-script.js',
                    '<%= yeoman.dist %>/scripts/app.js' : '<%= yeoman.app %>/scripts/app.js',
                    '<%= yeoman.dist %>/scripts/app-main/app-main.js' : '<%= yeoman.app %>/scripts/app-main/app-main.js',
                    '<%= yeoman.dist %>/scripts/collections/collections.js' : '<%= yeoman.app %>/scripts/collections/collections.js',
                    '<%= yeoman.dist %>/scripts/models/models.js' : '<%= yeoman.app %>/scripts/models/models.js',
                    '<%= yeoman.dist %>/scripts/routers/routers.js' : '<%= yeoman.app %>/scripts/routers/routers.js',
                    '<%= yeoman.dist %>/scripts/views/app-pages.js' : '<%= yeoman.app %>/scripts/views/app-pages.js',
                    '<%= yeoman.dist %>/scripts/views/main-views.js' : '<%= yeoman.app %>/scripts/views/main-views.js',
                    '<%= yeoman.dist %>/scripts/views/top-nav-bar-view.js' : '<%= yeoman.app %>/scripts/views/top-nav-bar-view.js',
                    '<%= yeoman.dist %>/scripts/views/send-prescription-view.js' : '<%= yeoman.app %>/scripts/views/send-prescription-view.js',
                    '<%= yeoman.dist %>/scripts/helper.js' : '<%= yeoman.app %>/scripts/helper.js'
                    
                }
            }
        },
 

        
        
//Commented this piece of code to avoid renaming of files..
        rev: {
            dist: {
                files: {
                    src: [
                        //'<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        
        
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            //dist: {
            //     files: {
            //        '<%= yeoman.dist %>/styles/main.css': [
            //             '.tmp/styles/{,*/}*.css',
            //             '<%= yeoman.app %>/styles/{,*/}*.css'
            //        ]
            //     }
            //}
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
						'res/**',
                        'styles/fonts/{,*/}*.*',
			'fonts/**/*.*',
			'image/**/*.*',
                        //Copying the template folder..
                        'templates/**/*.html'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

/*
    grunt.registerMultiTask('cordova_cli', 'Run cordova commands.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            cmd: 'emulate', // available commands "emulate", "build", "prepare", "compile", "run", "create", "serve", "platform", "plugin"
            subcommand: '', // available "add", "rm"
            platforms: ["android"], // available platforms "android", "ios" ...
            options: [],
            plugins: ['org.apache.cordova.camera']
        });

        var self = this;
        var done = function done(){
            var callback = self.async();
            return function over(){
                grunt.log.writeln('The Cordova command "' + cmd + '" run successfully.');
                callback();
            };
        };

        var cmd = options.cmd;
        if (cordova.hasOwnProperty(cmd)) {
            if (cmd === 'emulate' || cmd === 'build' || cmd === 'prepare' || cmd === 'compile' || cmd === 'run') {
                var opts = {
                    platforms: options.platforms,
                    options: options.options
                };
                cordova.raw[cmd].call(null, opts).done(done());
            }else if (cmd === 'create' || cmd === 'serve'){
                throw new Error('The Cordova command "' + cmd + '" is not supported by the plugin. Pull request welcome.');
            }else{
                // platform/plugins add/rm [target(s)]
                var invocation = [options.subcommand]; // this has the sub-command, i.e. "platform add" or "plugin rm"
                var targets = options.platforms.length > 0 ? options.platforms : options.plugins; // this should be an array of targets, be it platforms or plugins
                invocation.push(targets);
                cordova.raw[cmd].apply(null, invocation).done(done());
            }
        }else{
            throw new Error('Cordova does not know command "' + cmd + '".');
        }

    });
*/	

 



    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);

	grunt.registerTask('platform-build', [
		'default',
		'phonegap:build',
        'phonegap:run'
	]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
