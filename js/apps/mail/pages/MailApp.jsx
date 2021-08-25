import { mailService } from '../services/mail.service.js'
import { MailsList } from '../cmps/MailsList.jsx';
import { SideBar } from '../cmps/SideBar.jsx';

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy:null
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
    // this.setState({ filterBy }, this.LoadEmails);
    this.setState({filterBy:criteria},this.LoadEmails)
  };
  onGetAllEmails=()=>{
    this.setState({filterBy:null},this.LoadEmails)
  }

  render() {
    const { mails, filterBy } = this.state
    return (
      <section className="mail-app">
        <MailsList mails={mails} history={this.props.history} filterBy={filterBy} />
        <SideBar onSetFilter={this.onSetFilter} onGetAllEmails={this.onGetAllEmails} />
      </section>
    )
  }
}