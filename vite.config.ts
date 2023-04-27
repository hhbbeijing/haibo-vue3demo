import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
	server: {
		//热更新：开启
		hmr: true
	},
	plugins: [
		vue(),
		vueJsx(),
		createSvgIconsPlugin({
			iconDirs:[path.resolve(__dirname,'src/icons/svg')],
		})
	],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
