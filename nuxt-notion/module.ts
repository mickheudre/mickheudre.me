import { defineNuxtModule, createResolver, addComponentsDir, addComponent } from '@nuxt/kit'
import { process } from './src/image-extractor'
import path from 'path';
export default defineNuxtModule({
  meta: {
    name: '@nuxt/notion-rendered',
    configKey: 'nuxtNotion'
  },
  defaults: {
    output: ".output/public",
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    
    addComponentsDir({
      path: resolver.resolve('./components'),
      prefix: 'Notion',
      global: true
    })
    
    var _pages = null;

    nuxt.hook('nitro:build:public-assets', () => {
      console.log("generating app done")
      _pages.forEach(element => {
        process(path.join(nuxt.options.rootDir, options.output, element.path), path.join(nuxt.options.rootDir, options.output, "_nuxt")).then(() => {"donce"})
      });
    })
    
    nuxt.hook('pages:resolved', (pages) => {
      _pages = pages;
    })
  }
  
  
  
})
// module.exports = function Extract(moduleOptions) {
//   const options = { ...defaults, ...moduleOptions }
//   const baseDir = join(this.options.generate.dir, options.path)
//   const routerBase = this.options.router.base !== '/' ? this.options.router.base : ''

//   this.nuxt.hook('generate:distCopied', () => {
//     if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir)
//   })

//   this.nuxt.hook('generate:page', async (page) => {
//     return await process(page)
//   })


