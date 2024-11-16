const Encore = require('@symfony/webpack-encore');

const WebpackBar = require('webpackbar');
const MediaQueryPlugin = require('@glitchr/media-query-plugin');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'development');
}

Encore

    .addPlugin(new WebpackBar())
    // directory where compiled assets will be stored
    .setOutputPath('./public/assets/')
    // public path used by the web server to access the output path
    .setPublicPath('/assets')
    // only needed for CDN's or subdirectory deploy
    .setManifestKeyPrefix('.')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app'          , './assets/app.js')
    .addEntry('app-async'    , './assets/app-async.js')
    .addEntry('app-defer'    , './assets/app-defer.js')
    //.addEntry('layout1-async', './assets/layout1-async.js')
    //.addEntry('layout2-async', './assets/layout2-async.js')
    //.addEntry('layout3-async', './assets/layout3-async.js')
    //.addEntry('security-admin-async'    , './assets/security/admin.js')
    //.addStyleEntry('email-layout1'  , './assets/email/layout1.scss')
    .copyFiles({
        from: './assets/styles/ico',
        to: 'ico/[path][name].[ext]'
    })
    .copyFiles({
        from: './assets/styles/images',
        to: 'images/[path][name].[ext]'
    })
    .copyFiles({
        from: './assets/styles/fonts',
        to: 'fonts/[path][name].[ext]'
    })

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .disableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    // .configureBabelPresetEnv((config) => {
    //     config.useBuiltIns = 'usage';
    //     config.corejs = '3.23';
    // })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    .enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

    .enableSassLoader()
    .enablePostCssLoader()

    .addLoader({
        test: /\.scss$/,
        use: [
            MediaQueryPlugin.loader,
            'postcss-loader',
            'sass-loader'
        ]
    })

    .addPlugin(new MediaQueryPlugin({
        include: ["app-defer", "app-async", /*"layout1-async", "layout2-async", "layout3-async"*/],
        queries: {

          // Standard (make it dynamical later on)
          'all and (min-width: 1281px)': 'desktop',
          'all and (min-width: 1025px) and (max-width: 1280px)': 'laptop',
          'all and (min-width: 471px) and (max-width: 1024px)': 'tablet',
          'all and (min-width: 471px) and (max-width: 1024px) and (orientation: landscape)': 'tablet-landscape',
          'all and (max-width: 470px)': 'mobile',
          'all and (max-width: 470px) and (orientation: landscape)': 'mobile-landscape'
        }
    }))
;

module.exports = Encore.getWebpackConfig();
