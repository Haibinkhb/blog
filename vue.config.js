const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('page', resolve('src/page'))
            .set('common', resolve('src/common'))
            .set('styles', resolve('src/assets/styles'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: true
            }
        }
    }
}