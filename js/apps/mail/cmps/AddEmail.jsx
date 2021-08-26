import { mailService } from "../services/mail.service.js"

export class AddEmail extends React.Component {
    state = {
        email: {
            to: '',
            subject: '',
            body: ''

        }
    }
    onHandleChange = ({ target }) => {
        let field = target.name
        let value = target.value

        this.setState(prevState => ({ email: { ...prevState.email, [field]: value } }), () => {
            console.log(this.state.email);
        })
    }

    onSaveEmail = (ev) => {
        ev.preventDefault()
        mailService.composeEmail(this.state.email)
            .then(() => {
                this.props.LoadEmails()
                this.props.history.push('/emails');
                this.props.openCompose()
            })
    }

    render() {
        const { to } = this.state
        return (
            <form className="AddEmail" onSubmit={this.onSaveEmail}>

                <label htmlFor="to">TO</label>
                <input type="email" name="to" id="to" value={to} onChange={this.onHandleChange} />

                <label htmlFor="subject">subject</label>
                <input type="text" name="subject" id="subject" onChange={this.onHandleChange} />

                <label htmlFor="body">Content</label>
                <textarea name="body" id="body" cols="40" rows="7" onChange={this.onHandleChange} ></textarea>

                <button>Send Email</button>
            </form>
        )
    }
}