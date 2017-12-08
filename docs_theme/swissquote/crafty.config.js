
module.exports = {
    presets: [
        "@swissquote/crafty-preset-postcss",
        "@swissquote/crafty-runner-gulp"
    ],
    destination_css: 'css',
    css: {
        theme: {
            source: 'sass/theme.scss',
            watch: ['sass/**/*.scss']
        }
    }
}