import { mailService } from "../services/mail.service.js"
export function MailPreview({ mail, history, onToggleReadEmail }) {

    function foo() {
        onToggleReadEmail(true, mail.id)
            .then(() => {
                history.push(`/emails/${mail.id}`)
            })
    }

    return (
        <li className="mail-preview flex"  >
            <div className="flex" onClick={() => { foo() }}>
                <div className="from-preview">
                    <span> {mail.to.substring(0, mail.to.indexOf("@"))}</span>
                </div>
                <div className="subject-preview">
                    <h3 >{mail.subject} </h3>
                </div>

            </div>
            <div className="time-read-preview">
                <button className={mail.isRead ? "toggle-is-read read" : 'toggle-is-read unread'} onClick={() => { onToggleReadEmail(!mail.isRead, mail.id) }} ></button>
                <small>{mailService.formatTimePreview(mail.sentAt)}</small>
            </div>
        </li>
    )
}
