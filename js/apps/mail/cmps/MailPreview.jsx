
export function MailPreview({mail}) {
    return (
        <div className="mail-preview">
            <h1>Subject: {mail.subject}</h1>
            <p>content: {mail.body}</p>
        </div>
    )
}