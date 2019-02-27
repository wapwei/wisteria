window.Vue = require('vue')

import Prism from 'prismjs'
import PerfectScrollbar from 'perfect-scrollbar'

require('prismjs/components/prism-markup-templating.js');
require('prismjs/components/prism-bash.js');
require('prismjs/components/prism-git.js');
require('prismjs/components/prism-javascript.js');
require('prismjs/components/prism-json.js');
require('prismjs/components/prism-markup.js');
require('prismjs/components/prism-php.js');
require('prismjs/components/prism-sass.js');
require('prismjs/components/prism-scss.js');

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
  el: '#app',
  mounted () {
    this.reformatContent()
    this.replaceQuoteIcons()
    this.createSmoothSidebar()
    this.activateCurrentSection()
  },
  methods: {
    reformatContent() {
      document.querySelectorAll('.markdown-body blockquote blockquote').forEach((blockquote) => {
        blockquote.outerHTML = blockquote.innerHTML
      })
    },
    createSmoothSidebar() {
      new PerfectScrollbar('#nav', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
      })
    },
    activateCurrentSection() {
        let current = document.querySelector('.docs-index ul li a[href="' + window.location.pathname + '"]');

        if (current) {
          current.classList.add('is-active')
          current.parentElement.classList.add('is-active')
        }
    },
    replaceQuoteIcons () {
      document.querySelectorAll('.markdown-body blockquote').forEach(function (blockquote) {
        let match = blockquote.innerHTML.match(/\{(.*?)\}/)
        let icon = 'info'
        if (match) {
          icon = match[1]
        }

        let icons = {
          info: '<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 13.33a7 7 0 1 1 6 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5V17zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0z"></path></svg>',
          warning: '<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"></path></svg>'
        }
        icons.note = icons.info
        icons.tips = icons.warning

        blockquote.innerHTML = `<div class="flag"><span class="svg">${icons[icon]}</span></div><div>${blockquote.innerHTML.replace(/\{(.*?)\}/, '')}</div>`
        blockquote.classList.add(icon)
      })
    }
  }
})