// src/util/CropImage.js

const getCroppedImg = async (imageSrc, crop) => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.src = imageSrc;
  
    return new Promise((resolve) => {
      image.onload = () => {
        const ctx = canvas.getContext('2d');
        canvas.width = crop.width;
        canvas.height = crop.height;
        ctx.drawImage(
          image,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height
        );
        canvas.toBlob((blob) => resolve(blob), 'image/jpeg');
      };
    });
  };
  
  export default getCroppedImg; // Ensure it's exported as default
  
