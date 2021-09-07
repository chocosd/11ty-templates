module.exports = (eleventyConfig) =>{
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("./css/styles.css")
    eleventyConfig.addWatchTarget("./css/styles.css")
}

