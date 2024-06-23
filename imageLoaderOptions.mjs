// imageLoaderOptions.js

const imageLoaderOptions = {
  mozjpeg: {
    progressive: true,
    quality: 65,
  },
  // Optimize PNG images
  optipng: {
    enabled: true,
  },
  // Optimize GIF images
  gifsicle: {
    interlaced: false,
  },
  // Optimize SVG images
  svgo: {
    plugins: [
      {
        removeViewBox: false,
      },
    ],
  },
  // Optimize JPEG images
  pngquant: {
    quality: [0.65, 0.90],
    speed: 4,
  },
};

export default imageLoaderOptions;
