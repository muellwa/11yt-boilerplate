
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  
  
  eleventyConfig.addShortcode("itemBox", function(imageAlt, imageSrc, description) {
    return `
<div class="content-box">
  <img class="object" alt="${imageAlt}" src="${imageSrc}" width="250" />
  ${description}
</div>
    `;
  });
};