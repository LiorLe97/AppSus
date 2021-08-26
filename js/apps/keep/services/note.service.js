import { storageService } from "../../../services/storage.service.js";
import { utilService } from '../../../services/util.service.js'


export const noteService = {
    query,
    onSaveNote,
    deleteNote,
    changeColor
}
const KEY = 'notesDB'

let notes = storageService.loadFromStorage(KEY) || [
    {
        id: "n101",
        type: "note-text",
        isPinned: true,
        info: {
            text: "Fullstack Me Baby!"
        },
        style: {
            bgcolor: '#49a9f8'
        }
    },
    {
        id: "n102",
        type: "note-image",
        info: {
            url: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            title: "Bobi and Me"
        },
        style: {
            bgcolor: '#fc6f6f'
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            title: "To Do",
            todos: ["Driving liscence", "Coding power"]

        },
        style: {
            bgcolor: '#86f7a4'
        }
    },
    {
        id: "n104",
        type: "note-video",
        info: {
            urlId: "5-0BwZ1r6H4"
        },
        style: {
            bgcolor: '#fbfc97'
        }
    }
];


function query(filterBy) {
    if (filterBy) {
        const notesToShow = notes.filter(note => {
            return note.type.includes(filterBy)
        })
        return Promise.resolve(notesToShow)
    }
    return Promise.resolve(notes)
}

function onSaveNote(noteType, noteToAdd) {
    console.log(noteType)
    console.log(noteToAdd)
    switch (noteType) {
        case 'text':
            notes.push(_createTextNote(noteType, noteToAdd))
            break;
        case 'image':
            notes.push(_createImageNote(noteType, noteToAdd))
            break;
        case 'todos':
            const noteTodos = noteToAdd.todos.split(',')
            noteToAdd.todos = noteTodos
            console.log(noteToAdd)
            notes.push(_createTodoNote(noteType, noteToAdd))
            break;
        case 'video':
            // console.log(noteToAdd)
            let url = new URL(noteToAdd.urlId);
            var params = url.search
            const urlId = params.substring(3, 14)
            noteToAdd.urlId = urlId
            notes.push(_createVideoNote(noteType, noteToAdd))

    }
    _saveNotesToStorage()
    return Promise.resolve()

}


function _createTextNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo,
        style: {
            bgcolor: "#49a9f8"
        }
    }

}

function _createImageNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo,
        style: {
            bgcolor: "#49a9f8"
        }
    }
}

function _createTodoNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo,
        style: {
            bgcolor: "#49a9f8"
        }

    }
}

function _createVideoNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo,
        style: {
            bgcolor: "#49a9f8"
        }
    }
}
function deleteNote(noteId) {
    let idx = notes.findIndex(note => {
        return noteId === note.id
    })
    notes.splice(idx, 1)
    _saveNotesToStorage()
    return Promise.resolve()

}
function changeColor(noteId, color) {
    console.log(color)
    console.log(noteId)
    let note = notes.find(note => {
        return noteId === note.id
    })
    note.style.bgcolor = color;
    _saveNotesToStorage()
    return Promise.resolve()
}

// function saveColor(noteId, color) {
//     console.log(color)
//     let note = notes.find(note => {
//         return noteId === note.id
//     })
//     note.style.backgroundColor = color;
//     _saveNotesToStorage()

// }




function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, notes)
}
