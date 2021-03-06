module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "@/assets/sass/main.scss";
              `
            }
        }
    },
    configureWebpack: {
        module: {
            rules: [{
            test: /\.(ttf|otf|eot|woff|woff2)$/,
            use: {
                loader: "file-loader",
                options: {
                name: "fonts/[name].[ext]",
                },
            },
            }]
        }
    }
}