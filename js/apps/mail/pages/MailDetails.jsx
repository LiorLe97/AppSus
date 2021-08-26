import { mailService } from "../services/mail.service.js"
export class MailDetails extends React.Component {


    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail()
    }
    loadEmail = () => {
        mailService.getEmailById(this.props.match.params.emailId)
            .then(email => {
                this.setState({ email })
            })
    }
onDeleteEmail=(emailId)=> {
    mailService.deleteEmail(emailId)
    this.props.history.push('/emails')
}
    render() {
        const { email } = this.state
        
        if (!email) return <div>loading...</div>
        return (
            <section>
                <h2>Title: {email.subject}</h2>
                <h4>Email content</h4>
                <p>{email.body} Recievd At: {mailService.formatEmailTimestamp(email.sentAt)}</p>
                <button onClick={()=>this.onDeleteEmail(email.id)}>Delete</button>
            </section>
        )
    }
}