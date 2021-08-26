export class SideBar extends React.Component {
    state = {
        filterBy: {
            status: null, //inbox/sent/trash/draft
            txt: '', // no need to support complex text search
            isRead: 'all', // (optional property, if missing: show all)
            // isStared: false, // (optional property, if missing: show all)
            // lables: [] // has any of the labels
        }

    }
    onHandleChange = (criteria, field) => {
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: criteria } }), () => { this.props.onSetFilter(this.state.filterBy) })
    
    }
    onHandleInput = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => { this.props.onSetFilter(this.state.filterBy) })
    }
    onGetAllEmails = () => {
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, isRead: 'all' } }), () => { this.props.onSetFilter(this.state.filterBy) })

    }
    render() {
        const { txt } = this.state.filterBy
        const { openCompose,onToggleInboxSent } = this.props
        return (
            <section className='side-bar flex'>
                <label htmlFor="txt" className="search-email-lbl">Search</label>
                <input type="text" name="txt" onChange={this.onHandleInput} />
                <button onClick={this.onGetAllEmails}>All</button>
                <button onClick={() => this.onHandleChange(true, 'isRead')}>Read</button>
                <button onClick={() => this.onHandleChange(false, 'isRead')}>Unread</button>
                <button onClick={() => onToggleInboxSent('inbox')}>inbox</button>
                <button onClick={() => onToggleInboxSent('sent')}>sent</button>
                <button onClick={openCompose}>Compose</button>
            </section>
        )
    }
}