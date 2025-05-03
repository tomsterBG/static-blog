const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // --- Passthrough Copy ---
  // Copy assets folder to output (_site)
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy CNAME file if you have a custom domain
  // eleventyConfig.addPassthroughCopy("CNAME");

  // --- Collections ---
  // Helper function to get posts based on language
  const getPosts = (collectionApi, lang) => {
    return collectionApi.getFilteredByGlob(`src/${lang}/posts/**/*.md`)
      .sort((a, b) => b.date - a.date); // Sort newest first
  };

  // Create collections for posts in each language
  eleventyConfig.addCollection("posts_en", collectionApi => {
    return getPosts(collectionApi, "en");
  });

  eleventyConfig.addCollection("posts_bg", collectionApi => {
    return getPosts(collectionApi, "bg");
  });

  // Collection of all posts (for finding translations)
  eleventyConfig.addCollection("posts_all", collectionApi => {
      return collectionApi.getFilteredByGlob("src/*/posts/**/*.md");
  });


  // --- Filters ---
  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
  });

  // Get the first N items of a collection
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Find translation for a given page
  eleventyConfig.addFilter("findTranslation", (page, collection) => {
    if (!page.data.translationKey) {
      return null; // No key to match
    }
    const currentLang = page.data.language;
    for (let item of collection) {
      if (item.data.translationKey === page.data.translationKey && item.data.language !== currentLang) {
        return item.url; // Return the URL of the translated page
      }
    }
    return null; // No translation found
  });

  // --- Markdown Options ---
  // If you need to add specific classes or plugins to Markdown processing
  // let markdownIt = require("markdown-it");
  // let options = {
  //   html: true, // Enable HTML tags in source
  //   breaks: true, // Convert '\n' in paragraphs into <br>
  //   linkify: true
  // };
  // eleventyConfig.setLibrary("md", markdownIt(options));


  // --- Configuration ---
  return {
    dir: {
      input: "src",       // Source directory
      output: "_site",    // Output directory
      includes: "_includes", // Relative to input dir
      data: "_data"        // Relative to input dir
    },
    templateFormats: [
      "md",
      "njk",
      "html",
    ],
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk",     // Use Nunjucks for HTML files
    passthroughFileCopy: true
  };
};
