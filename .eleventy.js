module.exports = function(eleventyConfig) {

    // Passthrough copy for static assets (like a future CSS file)
    eleventyConfig.addPassthroughCopy("src/css"); // Create a 'css' folder inside 'src' later

    // Create collections for English and Bulgarian posts
    eleventyConfig.addCollection("enPosts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/en/posts/*.md");
    });

    eleventyConfig.addCollection("bgPosts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/bg/posts/*.md");
    });

    // Filter for excluding tags (e.g., 'hidden')
    eleventyConfig.addFilter("excludeTag", function(collection, tagToExclude) {
        if (!tagToExclude) return collection;
        return collection.filter(item => {
            if (item.data.tags) {
                return !item.data.tags.includes(tagToExclude);
            }
            return true;
        });
    });

    // Configuration for the input and output directories
    return {
        dir: {
            input: "src",
            output: "_site" // Eleventy builds to _site by default
        }
    };
};
