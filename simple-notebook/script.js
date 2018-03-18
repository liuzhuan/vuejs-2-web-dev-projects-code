new Vue({
    el: '#notebook',
    data () {
        return {
            content: localStorage.getItem('content') || 'You can write in **markdown**',
            notes: []
        }
    },
    computed: {
        notePreview () {
            return marked(this.content)
        },
        addButtonTitle () {
            return this.notes.length + ' note(s) already'
        }
    },
    watch: {
        content: 'saveNote'
    },
    created () {
        
    },
    methods: {
        addNote () {
            console.log('add note')
            const time = Date.now()
            const note = {
                id: String(time),
                title: 'New note ' + (this.notes.length + 1),
                content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                created: time,
                favorite: false
            }
            this.notes.push(note)
        },
        saveNote () {
            console.log('saving note:', this.content)
            localStorage.setItem('content', this.content)
        },
        reportOperation (opName) {
            console.log('The', opName, 'operation was completed!')
        }
    }
})