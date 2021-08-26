import { storageService } from "../../../services/storage.service.js";
import { utilService } from '../../../services/util.service.js'


export const noteService = {
    query,
    onSaveNote,
}
const KEY = 'notesDB'

let notes = storageService.loadFromStorage(KEY) || [
    {
        id: "n101",
        type: "note-text",
        isPinned: true,
        info: {
            text: "Fullstack Me Baby!"
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
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            title: "To Do",
            todos: ["Driving liscence", "Coding power"]

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

    }
    _saveNotesToStorage()
    return Promise.resolve()

}


function _createTextNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo
    }

}

function _createImageNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo
    }
}

function _createTodoNote(noteType, noteInfo) {
    return {
        id: utilService.makeId(),
        type: `note-${noteType}`,
        isPinned: false,
        info: noteInfo

    }
}


function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, notes)
}
