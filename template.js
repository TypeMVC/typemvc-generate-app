'use strict';

// Basic template description.
exports.description = 'Create a new TypeFramework project';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({type: 'typeframework'}, [],
    function(err, props) {
        props.keywords = [];

        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props, {noProcess: 'app/**'});

        // All done!
        done();
    });

};