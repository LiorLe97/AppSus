import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, history,onToggleReadEmail }) {
    return (
        <div className="mail-preview">
            <div className="subject-container" onClick={()=>{ history.push(`/emails/${mail.id}`)}}>
                <h3 >Subject: {mail.subject} {mail.isRead ? '✔' : '🆕'}</h3>
            </div>
                <button onClick={()=>{onToggleReadEmail(!mail.isRead,mail.id)}} >Toggle read</button>
        </div>
    )
}
