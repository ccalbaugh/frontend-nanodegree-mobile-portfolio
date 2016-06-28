module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
	      dev: {
	        options: {
	          engine: 'im',
	          sizes: [{
	            /* Change these */
	            width: 1287,
	            suffix: '_large_2x',
	            quality: 100
	          }, {
	            width: 800,
	            suffix: '_large_1x',
	            quality: 50
	          }, {
	            width: 600,
	            suffix: '_medium_2x',
	            quality: 100
	          }, {
	            width: 400,
	            suffix: '_small_2x',
	            quality: 100
	          }, {
	            width: 150,
	            suffix: '_tiny_2x',
	            quality: 100
	          }]
	        },
	        files: [{
	          expand: true,
	          src: ['*.{gif,jpg,png}'],
	          cwd: 'views/images_src/',
	          dest: 'views/images/'
	        }]
      	  }
    	},
    	/*Clear out the images directory if it exists */
    	clean: {
	      dev: {
	        src: ['images'],
	      },
	    },

	    /* Generate the images directory if it is missing */
	    mkdir: {
	      dev: {
	        options: {
	          create: ['images']
	        },
	      },
	    },

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
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};