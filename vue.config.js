const path = require('path');

module.exports = {
  pages: {
    lesson1: {
      entry: 'src/views/Lesson1.vue',
      template: 'public/index.html',
      filename: 'lesson1.html',
      title: 'Lesson 1 - JM Digital',
    },
    lesson2: {
      entry: 'src/views/Lesson2.vue',
      template: 'public/index.html',
      filename: 'lesson2.html',
      title: 'Lesson 2 - JM Digital',
    },
    lesson3: {
      entry: 'src/views/Lesson3.vue',
      template: 'public/index.html',
      filename: 'lesson3.html',
      title: 'Lesson 3 - JM Digital',
    },
    lesson4: {
      entry: 'src/views/Lesson4.vue',
      template: 'public/index.html',
      filename: 'lesson4.html',
      title: 'Lesson 4 - JM Digital',
    },
    lesson5: {
      entry: 'src/views/Lesson5.vue',
      template: 'public/index.html',
      filename: 'lesson5.html',
      title: 'Lesson 5 - JM Digital',
    }
  },
  outputDir: path.resolve(__dirname, 'dist'),
  publicPath: './', // Ensures that paths are relative
  configureWebpack: {
    // Include SCORM JS files globally if needed
    plugins: [
      // Add any additional plugins if necessary
    ],
  },
  chainWebpack: (config) => {
    // Ensure proper output for JS files
    config.output.filename = 'js/[name].[contenthash].js'; // Adjust output filename pattern if needed
    config.output.chunkFilename = 'js/[name].[contenthash].js'; // For async chunks
  },
};
