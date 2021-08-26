import { MailPreview } from "./MailPreview.jsx"
export function MailsList({ mails,history ,filterBy,onToggleReadEmail}) {

    return (
        <div className="mails-list">
            {mails.map((mail) => <MailPreview key={mail.id} mail={mail}  history={history} onToggleReadEmail={onToggleReadEmail} filterBy={filterBy}  />)}
        </div>
    )
}