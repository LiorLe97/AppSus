import { mailService } from '../services/mail.service.js'
import { MailsList } from '../cmps/MailsList.jsx';
import { SideBar } from '../cmps/SideBar.jsx';
import { AddEmail } from '../cmps/AddEmail.jsx'
import { eventBusService } from '../../../services/event-bus-service.js';

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy: null,
    isCompose: false
  }
  removeEventBus;
  componentDidMount() {
    this.LoadEmails();
    let unread = mailService.getUnreadEmails()
    this.removeEventBus = eventBusService.on('emails-count', () => {
      this.setState({ mails: unread })
    })
  }
  componentWillUnmount() {
    this.removeEventBus()

  }
  LoadEmails = () => {
    mailService.query(this.state.filterBy)
      .then((mails) => {
        let unread = mailService.getUnreadEmails()
        eventBusService.emit('emails-count', unread.length)
        this.setState({ mails })
      })
  }

  onSetFilter = (criteria) => {
    this.setState({ filterBy: criteria }, this.LoadEmails)
  };
  openCompose = () => {
    this.setState({ isCompose: !this.state.isCompose })
  }

  onComposeEmail = (email) => {
    mailService.composeEmail(email)
      .then(data => console.log(data))
  }

  onToggleReadEmail = (decision, emailId) => {
    let emailIdx = mailService.getEmailIdx(emailId)
    mailService.toggleReadEmail(emailIdx, decision)
    this.LoadEmails()
    return Promise.resolve()
  }
  render() {
    const { mails, filterBy, isCompose } = this.state
    return (
      <section className="mail-app flex">

        {!isCompose && <MailsList mails={mails} history={this.props.history} onReadEmail={this.onReadEmail} filterBy={filterBy} onToggleReadEmail={this.onToggleReadEmail} />}
        <SideBar onSetFilter={this.onSetFilter} openCompose={this.openCompose} />
        {isCompose && <AddEmail openCompose={this.openCompose} history={this.props.history} />}

      </section>
    )
  }
}