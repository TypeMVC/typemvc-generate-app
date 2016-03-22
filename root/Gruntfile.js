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
        }
    });

    grunt.registerTask('default', [ 'ts:build' ]);
};