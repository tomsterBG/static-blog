module.exports = function(eleventyConfig) {

    // --- Passthrough Copy ---
    // Copy assets folder (css, maybe js/images later) to output (_site)
    eleventyConfig.addPassthroughCopy("src/assets");
    // Copy LICENSE file to output
    eleventyConfig.addPassthroughCopy("LICENSE");
    // You might want to copy other root files like CNAME if you have a custom domain

    // --- Collections ---
    // Helper to get posts sorted by date, newest first
    const getPosts = (collectionApi, lang) => {
        // Update glob pattern if your posts are not in a 'posts' subfolder
        return collectionApi.getFilteredByGlob(`src/${lang}/posts/**/*.md`)
            .sort((a, b) => b.date - a.date);
    };

    eleventyConfig.addCollection("posts_en", collectionApi => getPosts(collectionApi, "en"));
    eleventyConfig.addCollection("posts_bg", collectionApi => getPosts(collectionApi, "bg"));

    // --- Filters ---
    // Example filter for formatting dates (optional, requires installing luxon: npm install luxon)
    // eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    //   const { DateTime } = require("luxon");
    //   return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
    // });

    // --- Configuration ---
    return {
        dir: {
            input: "src",       // Source directory
            output: "_site",    // Output directory (this is the default)
            includes: "_includes", // Folder for layouts, relative to input
            data: "_data",        // Folder for global data, relative to input
            layouts: "_includes" // Specifies layout folder explicitly (good practice)
        },
        templateFormats: [
            "md", // Process Markdown files
            "njk", // Process Nunjucks files
            "html", // Passthrough HTML files
        ],
        // Use Nunjucks as the template engine for Markdown files
        markdownTemplateEngine: "njk",
        // Use Nunjucks as the template engine for HTML files (if any use templating)
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true
    };
};
