import { MailPreview } from "./MailPreview.jsx"
export function MailsList({ mails }) {

    return (
        <div className="mails-list">
            {mails.map((mail) => <MailPreview key={mail.id} mail={mail} />)}
        </div>
    )
}