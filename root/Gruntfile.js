module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ["app.ts"],
                out: ".build/app.js",
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: true,
                    removeComments: true,
                    htmlModuleTemplate: '<%= filename %>',
                    htmlVarTemplate: '<%= ext %>'
                }
            }
        },
        file_append: {
            app: {
                files: {
                    '.build/app.js': {
                        prepend: "var TF = require('typemvc-framework');\n\n"
                    }
                }
            }
        }
    });

    grunt.registerTask('default', [ 'ts:build', 'file_append:app' ]);
};