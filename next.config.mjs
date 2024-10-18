import path from 'path';
import { fileURLToPath } from 'url';
import imageLoaderOptions from './imageLoaderOptions.mjs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isExport = process.env.NEXT_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'scss')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: imageLoaderOptions,
        },
      ],
    });

    return config;
  },
  output: isExport ? 'export' : undefined,
};

export default nextConfig;
