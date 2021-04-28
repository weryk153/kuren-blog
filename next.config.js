const path = require('path');
const withMDX = require('@next/mdx')();
const withPlugins = require('next-compose-plugins');
const detectFrontmatter = require('remark-frontmatter');
const optimizedImages = require('next-optimized-images');


module.exports = withPlugins(
    [
        [
            withMDX({
                extension: /\.mdx?$/,
                options: {
                    // remarkPlugins: [[detectFrontmatter, ['yaml']]],
                },
            }),
        ],
        [optimizedImages, {}]
    ],
    {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
    },
);
