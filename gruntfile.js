module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
        options: {
          import: ['nib', '../lib/mixins'],
        },
        files: {
          './wPaint.min.css': ['./lib/wColorPicker.min.css', './src/wPaint.css']
        }
      }
    },
    concat: {
      my_target: {
        files: {
          './wPaint.min.js': ['./lib/rgbHex.js', './lib/keymaster.js', './lib/wColorPicker.js', './src/wPaint.utils.js', './src/wPaint.js'],
          './plugins/main/main.js': ['./plugins/main/src/wPaint.menu.main.js', './plugins/main/src/fillArea.min.js'],
          './plugins/text/text.js': ['./plugins/text/src/wPaint.menu.text.js'],
          './plugins/shapes/shapes.js': ['./plugins/shapes/src/wPaint.menu.main.shapes.js', './plugins/shapes/src/shapes.min.js'],
          './lib/plugins.js': ['./plugins/main/main.js', './plugins/text/text.js', './plugins/shapes/shapes.js'],
          './2ch.js': ['./locale/ja_JP.js', './lib/gettext.js', './lib/jquery.1.10.2.min.js', './lib/jquery-ui.custom.min.js', './wPaint.min.js', './lib/plugins.js', './src/oekaki8.js'],
          './8ch.js': ['./wPaint.min.js', './lib/plugins.js'],
       }
      }
    },
    uglify: {
      my_target: {
        files: {
          './oekaki.js': ['8ch.js'], // change to "2ch.js" for 2ch version. 2ch version also contains..._() function, ja_JP.js and jQuery(&UI).
       }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['stylus', 'concat', 'uglify']);
};
