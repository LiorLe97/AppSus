import { emails } from '../assets/json/mails.js'
import { storageService } from '../../../services/storage.service.js'
import {utilService} from '../../../services/util.service.js'

export const mailService = {
  query,
  getLoggedinUser,

}
function getLoggedinUser(){
    return Promise.resolve(loggedinUser)
}
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
   }

const KEY = 'emailsDB'
let gEmails = _loadEmailsFromStorage() || emails

function _createEmail(email){
    return {
        id: utilService.makeId(),
        subject: email.subject,
        body: email.body,
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com'
    }
}
function query() {
    return Promise.resolve(gEmails)
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

function _loadEmailsFromStorage() {
    return storageService.loadFromStorage(KEY)

}
