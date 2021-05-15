<template>
    <p ref="paragraph"> {{ string }} </p>
</template>

<script>
import Link from './Link.vue'
import Vue from 'vue'

export default {
    data() {
        return {
            string: ""
        }
    },
    props: {
        block: Object
    },
    mounted() {
        this.block.paragraph.text.forEach(element => {
            if (element.text.link === null) {
                this.$refs.paragraph.innerHTML += element.text.content
            }
            else {
                var ComponentClass = Vue.extend(Link)
                var instance = new ComponentClass({
                    propsData: { link: element.text.link.url}
                })
                instance.$slots.default = [ element.text.content ]
                instance.$mount() // pass nothing
                this.$refs.paragraph.appendChild(instance.$el)
                // var link = document.createElement("a");
                // link.href = element.text.link.url
                // link.target = '_blank';
                // link.innerHTML = element.text.content;
                // this.$refs.paragraph.appendChild(link);
            }
        });
        //this.string = this.block.text[0].text.content
    }
}
</script>