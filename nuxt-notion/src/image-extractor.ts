import { readFile, readFileSync, writeFileSync } from "fs"

const fs = require('fs')
const { URL } = require('url')
const { join } = require('path')
const consola = require('consola')
var he = require('he');


const defaults = {
    basedir: "./output/public",
    path: '/_nuxt', // dir where downloaded images will be stored
    extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg'],
    baseUrl: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/' // cms url
    // TODO: add option to allow keeping the original folder structure
}


export async function process(page, target) {
    
    const urls = []
    const test = new RegExp('(http(s?):)([/|.|\\w|\\s|-]|%|:|~)*.(?:' + defaults.extensions.join('|') + '){1}[^"]*', 'g')
    
    const file = readFileSync(join(page, "index.html"));
    const matches = file.toString().matchAll(test)
    
    for (const match of matches) {
        
        const baseUrl = new URL(defaults.baseUrl)
        const url = new URL(match[0])
        if (baseUrl.hostname === url.hostname && !urls.find((u) => u.href === url.href)) {
            urls.push(url)
        }
    }
    if (!urls.length) return
    consola.info(`${page.route}: nuxt-image-extractor is replacing ${urls.length} images with local copies`)
    await replaceRemoteImages(file.toString(), urls, target)
    var string = he.decode(file.toString())
    var payload = he.decode(readFileSync(join(page, "_payload.json")).toString());
    
    urls.map(async (url) => {
        const ext = '.' + (url.pathname + url.hash).split('.').pop()
        const name = slugify((url.pathname + url.hash).split(ext).join('')) + ext
        const imgPath = join(target, name)
        
        string = string.replace(he.decode(url.href), join("_nuxt", name))
        payload = payload.replace(he.decode(url.href), join("_nuxt", name))
    })
    writeFileSync(join(page, "index.html"), string)
    writeFileSync(join(page, "_payload.json"), payload)
    
}

export async  function replaceRemoteImages(html, urls, target) {
    await Promise.all(
        urls.map(async (url) => {
            const ext = '.' + (url.pathname + url.hash).split('.').pop()
            const name = slugify((url.pathname + url.hash).split(ext).join('')) + ext
            const imgPath = join(target, name)
            return await saveRemoteImage(he.decode(url.href), imgPath)
            
        })
    )
}



export async function saveRemoteImage(url, path) {
    fetch(url).then((res) => {
        const fileStream = fs.createWriteStream(path)
        // new Promise((resolve, reject) => {
        const stream = new WritableStream({
            write(chunk) {
                fileStream.write(chunk);
            },
        });
        
        
        res.body.pipeTo(stream);
    })
    return path
    
}

// https://gist.github.com/codeguy/6684588
export function slugify(text) {
    return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .trim()
    .replace('/', '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '-')
    .replace(/--+/g, '-')
}
