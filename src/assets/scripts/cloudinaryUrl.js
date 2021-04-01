// Returns Cloudinary URL for images
const cloudinaryUrl = function(siteUrl, imagePath, options) {
  // TODO: Get siteUrl without passing it into function?

  // Full options list here: https://cloudinary.com/documentation/image_transformation_reference
  // For now only supporting: width, height
  // There's a Cloudinary SDK that handles this, but I don't want to include the whole package

  const optionsString = Object.entries(options)
    .map(option => {
      const key = option[0];
      const value = option[1];

      if (!value) {
        return null;
      }

      switch(key) {
        case 'width':
          return `w_${value}`;
        case 'height':
          return `h_${value}`;
        default:
          return null;
      }
    })
    .filter(value => value !== null)
    .join(',');

  return `https://res.cloudinary.com/dcelqcs5j/image/fetch/${optionsString ? `${optionsString},` : ''}f_auto,c_fill/${siteUrl}/images${imagePath}`;
};

export default cloudinaryUrl;
