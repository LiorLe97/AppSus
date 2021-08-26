import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, history,onToggleReadEmail }) {
    return (
        <div className="mail-preview flex">
            <div className="subject-container" onClick={()=>{ history.push(`/emails/${mail.id}`)}}>
                <h3 >Subject: {mail.subject} </h3>
            </div>
                <button className={mail.isRead?"toggle-is-read read":'toggle-is-read unread'} onClick={()=>{onToggleReadEmail(!mail.isRead,mail.id)}} ></button>
        </div>
    )
}
