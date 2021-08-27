import { emails } from '../assets/json/mails.js'
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    getEmailById,
    getNextEmailById,
    getEmailIdx,
    formatEmailTimestamp,
    deleteEmail,
    composeEmail,
    toggleReadEmail,
    getUnreadEmails,
    formatTimePreview
}

const loggedinUser = {
    email: 'tal@ekroni.com',
    fullname: 'Mahatma Appsus'
}

const KEY = 'emailsDB'
let gEmails = loadEmailsFromStorage()


function _createEmail(email) {
    return {
        id: utilService.makeId(),
        subject: email.subject === '' ? 'No Title' : email.subject,
        body: email.body === '' ? 'No content...' : email.body,
        isRead: false,
        sentAt: Date.now(),
        to: email.to
    }
}
function query(filterBy) {
    console.log(filterBy);
    const { status, txt } = filterBy
    // if (status === 'inbox') {
    //     const inboxEmailsToShow = gEmails.filter(email => {
    //         return email.subject.includes(txt) && email.to === loggedinUser.email
    //     })
    //     return Promise.resolve(inboxEmailsToShow)
    // }
    switch (status) {
        case 'inbox':
            const inboxEmailsToShow = gEmails.filter(email => {
                return  email.subject.toLowerCase().includes(txt.toLowerCase()) &&email.to === loggedinUser.email
            })
            return Promise.resolve(inboxEmailsToShow)
            break;
        case 'sent':
            const sentEmailsToShow = gEmails.filter(email => {
                return  email.subject.toLowerCase().includes(txt.toLowerCase()) &&email.to !== loggedinUser.email
            })
            return Promise.resolve(sentEmailsToShow)
            break;


    }

    return Promise.resolve(gEmails)
}
// function query(filterBy) {
//     if (filterBy) {
//         let initStatus = filterBy
//         let { txt, isRead, status } = filterBy
//         if (status || initStatus) {
//             if (status === 'inbox' || initStatus === 'inbox') {
//                 const inboxEmailsToShow = gEmails.filter(email => {
//                     return email.to === loggedinUser.email
//                 })
//                 return Promise.resolve(inboxEmailsToShow)
//             } else if (status === 'sent' || initStatus === 'sent') {
//                 const sentEmailsToShow = gEmails.filter(email => {
//                     return email.to !== loggedinUser.email
//                 })
//                 return Promise.resolve(sentEmailsToShow)
//             }
//         }
//         // if (isRead === 'all') {
//         //     const allEmailsToShow = gEmails.filter(email => {
//         //         return email.subject.toLowerCase().includes(txt.toLowerCase()) 
//         //     })
//         //     return Promise.resolve(allEmailsToShow)
//         // } else 
//         // if ((isRead === true || isRead === false || isRead === null )) {
//         //     const emailsToShow = gEmails.filter(email => {
//         //         return email.subject.toLowerCase().includes(txt.toLowerCase()) &&
//         //             email.isRead === isRead 
//         //     })
//         //     return Promise.resolve(emailsToShow)
//         // }
//     }
//     return Promise.resolve(gEmails)
// }

function saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

function loadEmailsFromStorage() {

    let mails = storageService.loadFromStorage(KEY)
    if (!mails || mails.length === 0) {
        mails = emails
    }
    return mails
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
function formatTimePreview (timeStamp){
    let time = new Date(timeStamp)
    var min = time.getMinutes()
    var hours = time.getHours()
    if (hours < 10) hours = `0${hours}`
    var today = hours + ":" + min
    return today 
}
function deleteEmail(emailId) {
    let emailIdx = getEmailIdx(emailId)
    gEmails.splice(emailIdx, 1)
    saveEmailsToStorage()
    return Promise.resolve()
}
function composeEmail(email) {
    var newEmail = _createEmail(email)
    if (newEmail.to !== loggedinUser.email) newEmail.isRead = true
    gEmails.unshift(newEmail)
    saveEmailsToStorage()
    return Promise.resolve()
}

function toggleReadEmail(emailIdx, decision) {
    gEmails[emailIdx].isRead = decision
    saveEmailsToStorage()
}

function getUnreadEmails() {
    let unread = gEmails.filter(email => {
        return !email.isRead && email.to === loggedinUser.email
    })
    return unread
}