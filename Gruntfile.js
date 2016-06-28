module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				src: 'views/js/main.js',
				dest: 'views/js/main.min.js',
				src: 'js/perfmatters.js',
				dest: 'js/perfmatters.min.js'
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};