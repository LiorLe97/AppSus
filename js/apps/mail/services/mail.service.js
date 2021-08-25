import { emails } from '../assets/json/mails.js'
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    getLoggedinUser,
    getEmailById,
    getNextEmailById,
    getEmailIdx,
    formatEmailTimestamp,
    deleteEmail


}
function getLoggedinUser() {
    return Promise.resolve(loggedinUser)
}
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const KEY = 'emailsDB'
let gEmails = _loadEmailsFromStorage() || emails

function _createEmail(email) {
    return {
        id: utilService.makeId(),
        subject: email.subject,
        body: email.body,
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com'
    }
}
function query(filterBy) {
    // if (filterBy) {
    //     let { inbox, sent, trash, draft } = filterBy
    //     const emailsToShow=gEmails.filter(email=>)

    // }
    return Promise.resolve(gEmails)
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

function _loadEmailsFromStorage() {
    return storageService.loadFromStorage(KEY)

}
function getEmailById(emailId) {
    var email = gEmails.find(function (email) {
        return email.id === emailId
    })
    return Promise.resolve(email)
}

function getNextEmailById(EmailId, diff) {
    let nextEmailIdx = getEmailIdx(EmailId) + diff
    if (nextEmailIdx === gEmails.length) nextEmailIdx = 0
    else if (nextEmailIdx === -1) nextEmailIdx = gEmails.length - 1
    return Promise.resolve(gEmails[nextEmailIdx].id)
}

function getEmailIdx(emailId) {
    return gEmails.findIndex(email => emailId === email.id)
}

function formatEmailTimestamp(timeStamp) {
    let time = new Date(timeStamp)
    var min = time.getMinutes()
    var hours = time.getHours()
    var day = time.getDate();
    var month = time.getMonth() + 1;
    var year = time.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = `0${hours}`
    var today = day + "-" + month + "-" + year + " " + hours + ":" + min
    return today
}
function deleteEmail(emailId) {
    let emailIdx = getEmailIdx(emailId)
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage()
    return Promise.resolve()
}