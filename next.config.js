const path = require('path');
const withMDX = require('@next/mdx')();
const withPlugins = require('next-compose-plugins');
const detectFrontmatter = require('remark-frontmatter');

module.exports = withPlugins(
    [
        [
            withMDX({
                extension: /\.mdx?$/,
                options: {
                    remarkPlugins: [[detectFrontmatter, ['yaml']]],
                },
            }),
        ],
    ],
    {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
    },
);

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
