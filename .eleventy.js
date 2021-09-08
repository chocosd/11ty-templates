module.exports = (eleventyConfig) =>{
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("./css")
    eleventyConfig.addPassthroughCopy("./css/globals.css")
    eleventyConfig.addWatchTarget("./css")
    eleventyConfig.addWatchTarget("./css/globals.css")
}

