import { mailService } from '../services/mail.service.js'
import { MailsList } from '../cmps/MailsList.jsx';
import { SideBar } from '../cmps/SideBar.jsx';

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy: null,
  }

  componentDidMount() {
    this.LoadEmails();

  }

  LoadEmails = () => {
    mailService.query(this.state.filterBy).then((mails) => {
      this.setState({ mails })
    })
  }



  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.LoadEmails);
  };

  render() {
    const { mails } = this.state
    return (
      <section className="mail-app">
        <MailsList mails={mails} history={this.props.history} />
        <SideBar onSetFilter={this.onSetFilter}/>
      </section>
    )
  }
}