<template>
  <q-page padding>
    <textarea ref="editor"></textarea>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'

import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml.js'

import { html_beautify } from 'js-beautify'
const beautify = html_beautify

export default {
  mixins: [ UiMixin, PageMixin ],
  props: [],
  components: {
  },
  data () {
    return {
      myeditor: null
    }
  },
  mounted () {
    const myeditor = this.myeditor = CodeMirror.fromTextArea(this.$refs.editor, {
      // theme: 'miakai',
      mode: 'xml',
      htmlMode: true,
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      tabSize: 2
    })
    myeditor.setValue(beautify(this.edited.object[this.edited.prop]))
  },
  beforeDestroy () {
    this.edited.object[this.edited.prop] = this.myeditor.getValue()
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setEditor(this.myeditor)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
