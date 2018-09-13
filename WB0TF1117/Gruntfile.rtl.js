module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-rtlcss');
    grunt.loadNpmTasks('grunt-string-replace');


    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);


    var config = {
        app: 'rtl',
        dist: 'rtl',
        prod: 'rtl',
        temp: 'temp'
    };



    grunt.initConfig({
        config: config,

        sass: {
            dev: {
                files: {
                    '<%= config.temp %>/assets/css/style.css': '<%= config.app %>/assets/sass/style.scss'
                }
            }
        },
        // Task  autoprefixerss : Parse CSS and add vendor-prefixed CSS
        autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                browsers: ['opera 12', 'ff 15', 'chrome 25']
            },
            dist: {
                src: '<%= config.temp %>/assets/css/style.css',
                dest: '<%= config.dist %>/assets/css/style.css'
            }

        },


        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= config.dist %>/images/'
                }]
            }
        },

        // Task copy : copy all files we needed for work

        copy: {
            js: {
                files: [
                    {expand: true, cwd: '<%= config.app %>/assets/js/', src: ['**'], dest: '<%= config.dist %>/assets/js/'}
                ]
            }
        },

        // Task concat : concat all js file into one file
        concat: {
            options: {
                separator: ''
            },
            vendor: {
                src: [
                    '<%= config.app %>/assets/bootstrap/js/bootstrap.js',
                    '<%= config.app %>/assets/js/jquery.scrollto.js',
                    '<%= config.app %>/assets/js/jquery.validate.js',
                    '<%= config.app %>/assets/js/jquery.parallax-1.1.js',
                    '<%= config.app %>/assets/js/jquery.matchHeight-min.js',
                    '<%= config.app %>/assets/js/hideMaxListItem.js',
                    '<%= config.app %>/assets/plugins/jquery-nice-select/js/jquery.nice-select.min.js',
                    '<%= config.app %>/assets/js/owl.carousel.min.js',
                    '<%= config.app %>/assets/plugins/owl-carousel/owl.carousel.js'

                ],
                dest: '<%= config.dist %>/assets/js/vendors.js'
            }
        },

        rtlcss: {

            css:{
                // task options
                options: {
                    // generate source maps
                    map: {inline: false},
                    // rtlcss options
                    opts: {
                        clean:false
                    },
                    // rtlcss plugins
                    plugins:[],
                    // save unmodified files
                    saveUnmodified: true
                },

                files: {
                    '<%= config.prod %>/assets/css/style.rtl.css': '<%= config.prod %>/assets/css/style.css',
                    '<%= config.prod %>/assets/bootstrap/css/bootstrap.rtl.css': '<%= config.prod %>/assets/bootstrap/css/bootstrap.css'
                }
            },

            dev:{
                // task options
                options: {
                    // generate source maps
                    map: {inline: false},
                    // rtlcss options
                    opts: {
                        clean:false
                    },
                    // rtlcss plugins
                    plugins:[],
                    // save unmodified files
                    saveUnmodified: true
                },

                files: {
                    '<%= config.dist %>/assets/css/style.rtl.css': '<%= config.dist %>/assets/css/style.css',
                    '<%= config.dist %>/assets/bootstrap/css/bootstrap.rtl.css': '<%= config.dist %>/assets/bootstrap/css/bootstrap.css'
                }
            }
        },

       // miniy js
        uglify: {
            vendorJs: {
                files: {
                    '<%= config.dist %>/assets/js/vendors.min.js': '<%= config.dist %>/assets/js/vendors.js'
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '<%= config.dist %>/assets/css/*.css',
                        '<%= config.dist %>/assets/js/*.js',
                        '<%= config.dist %>/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '<%= config.dist %>'
                }
            }
        },

        watch: {
            sass: {
                files: '<%= config.app %>/assets/sass/**/*.scss',
                tasks: [
                    'sass',
                    'autoprefixer',
                    'rtlcss'

                ],
                options: { livereload: true }
            },
            js: {
                files: '<%= config.app %>/assets/js/**/*.js',
                options: { livereload: true }
            }
        }

    });
    // grunt.registerTask('default', ['browserSync', 'watch']);

    grunt.registerTask('css', ['sass','autoprefixer']); // compile css
    grunt.registerTask('js', ['concat:vendor','uglify:vendorJs']);  // compile js
    grunt.registerTask('image', ['imagemin']);    // optimize image
    grunt.registerTask('default', ['browserSync', 'watch']); // watch all changes
    grunt.registerTask('watchcss', ['browserSync', 'watch:sass']); // watch css change only
};