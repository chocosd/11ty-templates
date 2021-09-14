module.exports = (eleventyConfig) =>{
    
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/admin');
    eleventyConfig.addPassthroughCopy('src/assets/');

    return {
        dir: {
            input: "src"
        }
    }
}

