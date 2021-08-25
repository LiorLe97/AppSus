export function MailPreview({ mail, history }) {
    return (
        <div className="mail-preview">
            <div className="subject-container" onClick={() => { { history.push(`/emails/${mail.id}`) } mail.isRead=true }}>
                <h3 >Subject: {mail.subject} {mail.isRead ? '✔' : '🆕'}</h3>
            </div>
        </div>
    )
}
