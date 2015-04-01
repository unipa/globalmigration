'use strict';

module.exports = function(grunt) {
  var countriesCSV = grunt.option('countries') || 'data/countries Version2.csv';
  var dataCSV = grunt.option('data') || 'data/Flow Data for Online Viz Version2.csv';
  var outData = grunt.option('out-data') || 'tmp/data.csv';

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      tasks: {
        src: ['tasks/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    filter: {
      main: {
        options: {
          countries: countriesCSV
        },
        src: dataCSV,
        dest: outData
      }
    },
    compile: {
      main: {
        src: outData,
        dest: 'json/migrations.json'
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascripts/modernizr.js',
          'javascripts/d3.v3.min.js',
          'lib/countrymerge.js',
          'lib/layout.js',
          'lib/chord.js',
          'lib/timeline.js',
          'lib/chart.js'
        ],
        dest: 'dist/app-v1.js'
      },
      css: {
        options: {
          separator: '\n'
        },
        src: [
          'stylesheets/normalize.css',
          'stylesheets/styles.css'
        ],
        dest: 'dist/app-v1.css'
      }
    },
    uglify: {
      js: {
        files: {
        'dist/app-v1.min.js': ['dist/app-v1.js']
        }
      }
    },
    cssmin: {
      css: {
        src: 'dist/app-v1.css',
        dest: 'dist/app-v1.min.css'
      }
    },
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'stylesheets/fonts/',
            src: ['*'],
            dest: 'dist/fonts',
            flatten: true
          }
        ]
      }
    },
    clean: ['tmp', 'json', 'dist']
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // grunt.registerTask('build', ['concat', 'cssmin', 'uglify', 'copy']);
  grunt.registerTask('build', ['concat', 'cssmin', 'copy']);
  grunt.registerTask('default', ['jshint', 'nodeunit', 'filter', 'compile', 'build']);
};
