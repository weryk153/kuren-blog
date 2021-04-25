const path = require('path');
// const withPlugins = require('next-compose-plugins');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
