<template>
  <q-page padding>
    <q-dialog v-model="showImgChooser">
      <ImageChooser :select="insertImage" />
    </q-dialog>
    <editor-content class="editor__content" :editor="editor" />
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import ImageChooser from 'components/ImageChooser'
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  Image,
  History
} from 'tiptap-extensions'

export default {
  name: 'Html',
  mixins: [ UiMixin, PageMixin ],
  props: ['id', 'prop'],
  components: {
    EditorContent,
    ImageChooser
  },
  data () {
    return {
      editor: new Editor({
        // content: this.edited.object[this.edited.prop],
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new Image(),
          new History()
        ]
      }),
      showImgChooser: false
    }
  },
  mounted () {
    this.editor.setContent(this.edited.object[this.edited.prop])
  },
  beforeDestroy () {
    this.edited.object[this.edited.prop] = this.editor.getHTML()
    this.editor.destroy()
  },
  methods: {
    editText () {
      this.$router.push(`/pages/${this.id}/text`)
    },
    showImagePrompt (command) {
      // this.$router.push({ name: 'imagechooser' })
      this.showImgChooser = true
    },
    insertImage (image) {
      const src = process.env.SERVER_URL + '/images/' + image.filename
      this.editor.commands.image({ src })
      this.showImgChooser = false
    },
    onSwitch () {
      this.setEditor(this.editor)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
