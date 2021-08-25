import { mailService } from '../services/mail.service.js'
import { MailsList } from '../cmps/MailsList.jsx';
import { SideBar } from '../cmps/SideBar.jsx';

export class MailApp extends React.Component {
  state = {
    mails: [],
    // filterBy: null,
  }

  componentDidMount() {
    this.loadBooks();

  }

  loadBooks = () => {
    mailService.query().then((mails) => {
      this.setState({ mails })
    })
  }



  // onSetFilter = (filterBy) => {
  //   this.setState({ filterBy }, this.loadBooks);
  // };

  render() {
    const { mails } = this.state
    return (
      <section className="mail-app">
        <MailsList mails={mails} />
        <SideBar />
      </section>
    )
  }
}