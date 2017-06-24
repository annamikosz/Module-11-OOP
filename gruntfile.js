module.exports = function(grunt) {
	grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    jshint: {
      all: ['js/*.js']
      }
    ,
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      } 
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch'], ['jshint'], ['sass']);


};