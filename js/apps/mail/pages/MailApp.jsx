import { mailService } from '../services/mail.service.js'
import { MailsList } from '../cmps/MailsList.jsx';
import { SideBar } from '../cmps/SideBar.jsx';
import { AddEmail } from '../cmps/AddEmail.jsx'

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy: null,
    isCompose: false
  }


  componentDidMount() {
    this.LoadEmails();

  }

  LoadEmails = () => {
    mailService.query(this.state.filterBy).then((mails) => {
      this.setState({ mails })
    })
  }

  onSetFilter = (criteria) => {
    this.setState({ filterBy: criteria }, this.LoadEmails)
  };



  // openCompose = () => {
  //   this.setState({ isCompose: !this.state.isCompose })
  // }

  // onComposeEmail = (email) => {
  //   mailService.composeEmail(email)
  //     .then(data => console.log(data))
  // }
  onToggleReadEmail = (decision, emailId) => {
    let emailIdx = mailService.getEmailIdx(emailId)
    mailService.toggleReadEmail(emailIdx, decision)
    this.LoadEmails()

  }
  render() {

    const { mails, filterBy, isCompose } = this.state

    return (

      <section className="mail-app">
        <MailsList mails={mails} history={this.props.history} filterBy={filterBy} onToggleReadEmail={this.onToggleReadEmail} />
        <SideBar onSetFilter={this.onSetFilter}  openCompose={this.openCompose} />
        {isCompose && <AddEmail  />}
      </section>
    )
  }
}