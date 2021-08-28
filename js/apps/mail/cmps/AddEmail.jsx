import { mailService } from "../services/mail.service.js"

export class AddEmail extends React.Component {
    state = {
        email: {
            to: '',
            subject: '',
            body: ''

        }
    }
    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }
    onHandleChange = ({ target }) => {
        let field = target.name
        let value = target.value

        this.setState(prevState => ({ email: { ...prevState.email, [field]: value } }), () => {
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
            <form className="add-email" onSubmit={this.onSaveEmail}>
                <p>New Message</p>
                <div className="compose-input to">

                    <label htmlFor="to">To</label>
                    <input type="email" ref={this.inputRef} name="to" id="to" value={to} onChange={this.onHandleChange} />
                </div>
                <div className="compose-input">

                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" onChange={this.onHandleChange} />
                </div>

                    <textarea name="body" id="body" cols="40" rows="7" onChange={this.onHandleChange} ></textarea>
                

                <button>Send Email</button>
            </form>
        )
    }
}