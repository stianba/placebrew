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
			coffee: {
				files: ['client/js/**/*.coffee'],
				tasks: ['coffee']
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
		},

		coffee: {
			dist: {
				files: {
					'client/js/main.js': 'client/js/main.coffee'
				}
			}
		}
		
	});
	
	grunt.registerTask('default', [
		'sass',
		'coffee',
		'watch'
	]);
};
