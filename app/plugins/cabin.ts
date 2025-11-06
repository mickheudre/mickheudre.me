export default defineNuxtPlugin(() => {
    useHead({
      script: [
        {
          src: 'https://scripts.withcabin.com/hello.js',
          defer: true,
          async: true
        }
      ]
    })
  })