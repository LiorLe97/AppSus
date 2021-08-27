const { NavLink, withRouter } = ReactRouterDOM
import {eventBusService} from '../services/event-bus-service.js'
import {mailService} from '../apps/mail/services/mail.service.js'
class _AppHeader extends React.Component {
state={
    emailsCount:0
}


componentDidMount(){
   eventBusService.on('emails-count',(emailsCount)=>{
        this.setState({emailsCount})
    })
    let unread = mailService.getUnreadEmails()
    eventBusService.emit('emails-count',unread.length)
 
}


    render() {

        return (
            <section className="app-header">
                <h1 onClick={() => this.props.history.push('/')}>AppSus</h1>
                <span>{this.state.emailsCount}</span>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/book" >Books</NavLink>
                    <NavLink to="/emails" >Emails</NavLink>
                    <NavLink to="/keep">Notes</NavLink>
                </nav>
            </section>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)