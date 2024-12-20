import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
    plugins: [Vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
        },
    },

    // @see https://stackoverflow.com/questions/68131954/how-to-use-sass-using-in-vuejs3-vite

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
            @import "./src/assets/scss/variables";
            @import "./src/assets/scss/mixins";
            @import "./src/assets/scss/layout";
            @import "./src/assets/scss/button";
            @import "./src/assets/scss/title";
            @import "./src/assets/scss/animation";
        `,
            },
        },
    },

    build: {
        manifest: "assets/manifest.json",
        rollupOptions: {
            input: {
                // 메인 페이지
                index: path.resolve(__dirname, "pages/index.html"),

                // 상품상세 페이지
                goods: path.resolve(__dirname, "pages/goods/index.html"),

                // 장바구니 페이지
                cart: path.resolve(__dirname, "pages/cart/index.html"),

                // 장바구니 페이지
                category: path.resolve(__dirname, "pages/category/index.html"),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split(".").at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = "images";
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
            },
        },
    },
});
