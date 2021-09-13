module.exports = (eleventyConfig) =>{

    
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/_data');
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}

