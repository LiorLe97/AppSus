
export function MailPreview({ mail, history, onToggleReadEmail }) {

    function foo() {
        onToggleReadEmail(true, mail.id)
            .then(() => {
                history.push(`/emails/${mail.id}`)
            })
    }

    return (
        <ul className="mail-preview flex">
            <li className="flex">

                <div className="subject-container" onClick={() => { foo() }}>
                    <h3 >Subject: {mail.subject} </h3>
                </div>
                <button className={mail.isRead ? "toggle-is-read read" : 'toggle-is-read unread'} onClick={() => { onToggleReadEmail(!mail.isRead, mail.id) }} ></button>
            </li>
        </ul>
    )
}
