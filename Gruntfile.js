var fs = require('fs');

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    var banner = [ "<%= pkg.name %> v<%= pkg.version %>", "The MIT License (MIT)", "Copyright (c) 2014 <%= pkg.author %>" ].join("\n * ").trim();

    grunt.initConfig({

        pkg: pkg,

        cssmin: {
            options: {
                banner: "/* " + banner + " */",
                preserveComments: 'some'
            },
            main: {
                files: {
                    'dist/ripple.min.css': ['src/ripple.css']
                }
            }
        },

        jshint: {
            all: ['src/ripple.js']
        },

        uglify: {
            options: {
                banner: "/* " + banner + " */\n",
                footer: "$.ripple.version = \"<%= pkg.version %>\";",
                preserveComments: 'some'
            },
            main: {
                files: {
                    'dist/ripple.min.js': ['src/ripple.js']
                }
            }
        },

        watch: {
            scripts: {
                files: 'src/*.js',
                tasks: ['jshint', 'uglify']
            },
            styles: {
                files: 'src/*.css',
                tasks: ['cssmin']
            },
            manifests: {
                files: ['package.json'],
                tasks: ['sync_versions']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sync_versions']);
    grunt.registerTask('develop', ['jshint', 'uglify', 'cssmin', 'sync_versions', 'watch']);
};
