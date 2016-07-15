module.exports = function (grunt) {

    var compass = require('compass-importer');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed',
                importer: compass
            },
            dist: {
                files: {
                    'assets/css/style.css': 'assets/scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    [
        'grunt-contrib-watch',
        'grunt-sass'
    ].forEach(grunt.loadNpmTasks);

    // Default task(s).
    grunt.registerTask('default', ['sass']);

};