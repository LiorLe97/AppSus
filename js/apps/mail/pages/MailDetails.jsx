import { mailService } from "../services/mail.service.js"
export class MailDetails extends React.Component {


    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail()

    }
    // componentWillUnmount() {
    //     let emailIdx = mailService.getEmailIdx(this.state.email)
    //     mailService.toggleReadEmail(emailIdx, true)
    // }
    loadEmail = () => {
        mailService.getEmailById(this.props.match.params.emailId)
            .then(email => {
                this.setState({ email })
            })
    }
    
    onDeleteEmail = (emailId) => {
        mailService.deleteEmail(emailId)
        this.props.history.push('/emails')
    }
    render() {
        const { email } = this.state

        if (!email) return <div>loading...</div>
        return (
            <section className="email-details flex column">
                <h2>Title: {email.subject}</h2>
                <h4>Email content</h4>
                <p>{email.body}  </p>
                <span>Recievd At: {mailService.formatEmailTimestamp(email.sentAt)}</span> 
                <span>{email.to}</span> 
                <button className="email-dlt" onClick={() => this.onDeleteEmail(email.id)}>Delete</button>
            </section>
        )
    }
}