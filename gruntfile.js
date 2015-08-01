module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({

    clean: {
      all: ['site/js', 'site/css'],
      css: ['site/css'],
      js: ['site/js'],
      lib: ['site/js/lib'],
      app: ['site/js/app']
    },

    copy: {
      lib: {
        files: [{
          expand: true,
          cwd: 'components/js/lib',
          src: ['**/*.js'],
          dest: 'site/js/lib/',
          filter: 'isFile'
        }]
      },
    },

    sass: {
      dist: {
        options: {                      
          style: 'expanded'
        },
        files: {                      
          'site/css/main.css': 'components/sass/*.scss'
        }
      }
    },

    cssmin: {
      options: {
        advanced: false,
        aggressiveMerging: false,
        mediaMerging: false,
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      main: {
        files: [{
          expand: true,
          cwd: 'site/css',
          dest: 'site/css',
          src: ['*.css']
        }]
      }
    },

    uglify: {

      options: {
        mangle: false,
        compress: {
          drop_console: true,
          keep_fargs: true,
          hoist_funs: false,
          hoist_vars: false
        }
      },

      dev: {
        options: {
          compress: false,
          beautify: true,
          expand: true,
        },

        files: [{
          expand: true,
          cwd: 'components/js/app',
          src: '**/*.js',
          dest: 'site/js/app/'
        }]
      },

      pro: {
        files: {
          'site/js/app/main.js' : [ 'components/js/app/**/*.js' ]
        }
      },

    },

    ngtemplates:  {
      app:        {
        cwd: 'site',
        src:      ['templates/**/*.html'],
        dest:     'components/js/app/services/templates.js',
        options:  {
          htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, // Only if you don't use comment directives!
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        }
      }
    },

    tags: {

      options: {
        scriptTemplate: '<script type="text/javascript" src="{{ path }}"></script>',
        linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}">'
      },

      css: {
        options: {
          openTag: '<!-- css files -->',
          closeTag: '<!-- /css files -->'
        },
        src: ['site/css/*.css'],
        dest: 'site/index.html'
      },

      lib: {
        options: {
          openTag: '<!-- lib files -->',
          closeTag: '<!-- /lib files -->'
        },
        src: [
            'site/js/lib/jquery/**/*.js',
            'site/js/lib/angular/**/*.js',
            'site/js/lib/**/*.js'
          ],
        dest: 'site/index.html'
      },

      app: {
        options: {
          openTag: '<!-- app files -->',
          closeTag: '<!-- /app files -->'
        },
        src: [  'site/js/app/*.js',  'site/js/app/**/*.js' ],
        dest: 'site/index.html'
      }
    },

    postcss: {
      options: {
        expand: true,
        flatten: true,
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: ['> 1%', 'last 2 versions', 'IE >= 10']})
        ]
      },

      dist: {
        src: 'site/css/*.css'
      },
    },

    watch: {
      options: {livereload: true},

      app: {
        files: ['components/js/app/**/*.js'],
        tasks: ['clean:app', 'uglify:dev', 'tags:app']
      },

      lib: {
        files: ['components/js/lib/**/*.js'],
        tasks: ['clean:lib', 'copy:lib', 'tags:lib']
      },

      sass: {
        files: ['components/sass/**/*.scss'],
        tasks: ['cssStack', 'tags:css']
      },
      html: {
        files: ['site/templates/**/*.html'],
        tasks: ['ngtemplates']
      },
      index: {
        files: ['site/index.html'],
        tasks: []
      }
    }

  });

  grunt.registerTask('cssStack', ['clean:css', 'sass', 'postcss']);
  grunt.registerTask('stack', ['clean:all', 'copy:lib', 'cssStack', 'ngtemplates']);

  grunt.registerTask('default', ['stack', 'uglify:dev', 'tags', 'watch']);
  grunt.registerTask('build', ['stack', 'cssmin', 'uglify:pro', 'tags']);

}