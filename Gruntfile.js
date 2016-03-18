module.exports = function(grunt) {  
      // Project configuration.
        grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            demolist:"Function-List"
        },
        concat: {
            options: {
              stripBanners: true,
              banner: '/** \n' +
                      ' * @Description: <%= pkg.name%> \n' +
                      ' * @author: <%= pkg.author%> \n' +
                      ' * @Update: <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n' +
                      ' */ \n\n' 
           }           
        },
        sass: {                           
            dist: {
              options:{
                style:'expanded'
                //debugInfo:true,
                //lineNumbers:true
              },
                expand: true,
                cwd: 'sass/',
                src: ['**/*.scss','*.scss']
            }
        },
        less: {
          development: {
              options: {
                paths: ["assets/css"],
                compress: true
              },
              expand: true,
              cwd: '<%= dirs.demolist %>/',
              src: ['*/*.less','*/*/*.less'],
              dest:'dest/',
              ext: '.css'
          }
        },
        uglify: {
            options: {
                    report: 'gzip',
              banner: '/** \n' +
                      ' * @Description: <%= pkg.name%> \n' +
                      ' * @author: <%= pkg.author%> \n' +
                      ' * @Update: <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n' +
                      ' */ \n',
                    beautify: {
                  //中文ascii化，非常有用！防止中文乱码的神配置
                  ascii_only: true
              }
            }
        },
        cssmin: {
                options: {
              report: 'gzip',
                    banner: '/** \n' +
                          ' * @Description: <%= pkg.name%> \n' +
                          ' * @author: <%= pkg.author%> \n' +
                          ' * @Update: <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n' +
                          ' */ \n'
              },
              minify: {
                  expand: true,
                  cwd: 'css/',
                  src: ['**/*.css', '!**/*.min.css'],
                  dest: 'css/',
                  ext: '.css'
                  // ext: '.min.css'
              }
        },
         jshint: {
            options: {
                  //大括号包裹
                  curly: true,
                  //对于简单类型，使用===和!==，而不是==和!=
                  eqeqeq: true,
                  //对于首字母大写的函数（声明的类），强制使用new
                  newcap: true,
                  //禁用arguments.caller和arguments.callee
                  noarg: true,
                  //对于属性使用aaa.bbb而不是aaa['bbb']
                  sub: true,
                  //查找所有未定义变量
                  undef: true,
                  //查找类似与if(a = 0)这样的代码
                  boss: true,
                  //指定运行环境为node.js
                  node: true
              },
            files: {
            src: ['js/**/*.js']
        }
        },
    watch: {
                scripts: {
              files: ['sass/**/*.scss','js/**/*.js','less/**/*.less'],
              tasks: ["less"],//tasks: ['sass',"concat:shihuo","less"],
              options: {
                spawn: false,
              }
          }
     },
     sprite:{
        all: {
          src: 'images/sprites/*.png',
          dest: 'images/sprites-product-icon.png',
          destCss: 'css/sprites-icon.css',
          algorithm : 'top-down' //垂直排列
        }
      }
    });
    
    grunt.registerTask('build', 'require uglify', function () {
      //任务列表
      var tasks = ['requirejs'];
      //源码文件
      var srcDir = 'app';
      //目标文件
      var destDir = 'app';
      //设置参数
      grunt.config.set('config', {
        srcDir: srcDir,
        destDir: destDir
      });
      //设置requireJs的信息
      var taskCfg = grunt.file.readJSON('requirejsCfg.json');
      var rjs = taskCfg.requirejs;
      
      grunt.config.set("requirejs", rjs);
      grunt.task.run(tasks);   
    });

    // Load the plugin that provides the "uglify" task.
     // grunt.loadNpmTasks('grunt-contrib-concat');
      //grunt.loadNpmTasks('grunt-contrib-uglify');
      //grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-less');
     // grunt.loadNpmTasks('grunt-contrib-cssmin');
     // grunt.loadNpmTasks('grunt-spritesmith');
      //grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.loadNpmTasks('grunt-contrib-watch');
      //grunt.loadNpmTasks('grunt-contrib-requirejs');
    
  
    // Default task(s).
    //grunt.registerTask('default', ['concat','uglify','cssmin','sass']);

};