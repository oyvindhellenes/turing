module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Concatenate .js files
    concat: {
      dist: {
        src: [
          'js/libs/*.js',
          'js/test_jan.js',
          'js/global.js'
        ],
        dest: 'js/build/production.js',
      }
    },

    // Minify .js files
    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },

    // Compile .scss files
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/build/global.css': 'css/global.scss'
        }
      }
    },

    // Add vendor prefixes to the css
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/build/*.css',
        dest: 'css/build/prefixed/'
      }
    },

    // Minify the compiled .css file
    cssmin: {
      combine: {
        files: {
          'css/build/minified/global.css': ['css/libs/bootstrap-lumen.css', 'css/build/prefixed/global.css']
        }
      }
    },

    // Watch files for changes. If a file is changed, run the proper tasks
    watch: {
      options: {
        livereload: true,
      },

      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },

      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        }
      }
    },

    // Starts a server (necessary for some file paths to work properly)
    connect: {
      server: {
        options: {
          port: 8888,
          base: './'
        }
      }
    }

  });

  // Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('dev', ['connect', 'watch']);

};