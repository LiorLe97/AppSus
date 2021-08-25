import { storageService } from "../../../services/storage.service.js";
import { utilService } from '../../../services/util.service.js'


export const noteService = {
    query,
    onSaveNote
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
            url: "http://some-img/me",
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
            title: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
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
            notes.push(_createTextNote(noteType,noteToAdd))
            break;

    }
    _saveNotesToStorage()
    return Promise.resolve()

}


function _createTextNote(noteType,noteInfo) {
    console.log(noteType,)
    return {
        id: utilService.makeId(),
        type:`note-${noteType}`,
        isPinned: false,
        info: noteInfo
    }



}



function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, notes)
}
