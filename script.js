let id = 1
let isDuplicate = false
const app = {
  data() {
    return {
      title: 'Циклы',
      text: '',
      notes: [{
          id: id++,
          name: 'HTML'
        },
        {
          id: id++,
          name: 'Css'
        },
        {
          id: id++,
          name: 'Js'
        },
      ]
    }
  },
  methods: {
    addNote() {
      if (this.text.trim() != '') {
        this.notes.push({
          id: id++,
          name: this.text
        })
        this.text = ''
      }
    },
    delNote(note) {
      this.notes = this.notes.filter((item) => item != note)
    },
    editNote(note) {
      note.edit = true

      isDuplicate = this.notes.find(item => item.name === this.text && item.id !== note.id)

      if (isDuplicate) {
        alert('Имя заметки уже используется')
        return
      }
      
      if (this.text.trim() === '') {
        return
      }

      note.name = this.text
      
    },
  }
}

Vue.createApp(app).mount('#app')