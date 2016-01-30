module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd:'app/js',
        src: '*.js',
        dest: 'app/dest/js',
        ext:'.min.<%= grunt.template.today("yyyy-mm-dd") %>.js'
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: 'app/css',
        src: '*.css',
        dest: 'app/dest/css',
        ext: '.min.<%= grunt.template.today("yyyy-mm-dd") %>.css'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify', 'cssmin']);

};