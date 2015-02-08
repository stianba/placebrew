'use strict';

module.exports = function (grunt) {
	
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['client/scss/**/*.scss'],
				tasks: ['sass']
			},
			jade: {
				files: ['client/**/*.jade']
			}
		},
		
		sass: {
			options: {
				includePaths: [
					'client/bower_components/foundation/scss'
				]
			},
			dist: {
				files: {
					'client/css/main.css': 'client/scss/main.scss'
				}
			}
		}
		
	});
	
	grunt.registerTask('default', [
		'sass',
		'watch'
	]);
};
