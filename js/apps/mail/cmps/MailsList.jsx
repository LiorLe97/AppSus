import { MailPreview } from "./MailPreview.jsx"
export function MailsList({ mails,history ,filterBy,onToggleReadEmail}) {

    return (
        <div className="mails-list">
            <ul>
            {mails.map((mail) => <MailPreview key={mail.id} mail={mail}  history={history} onToggleReadEmail={onToggleReadEmail} filterBy={filterBy}  />)}
            </ul>
        </div>
    )
}