export class SideBar extends React.Component {
    state = {
        filterBy: {
            status: 'inbox', //inbox/sent/trash/draft
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
        let field = ev.target.name
        let value = ev.target.value
        if (value === 'true') value = true
        if (value === 'false') value = false
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => { this.props.onSetFilter(this.state.filterBy) })
    }
    onGetAllEmails = () => {
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, isRead: 'all' } }), () => { this.props.onSetFilter(this.state.filterBy) })

    }

    render() {
        const { txt } = this.state.filterBy
        const { openCompose } = this.props
        return (
            <section className='side-bar flex'>
                <span>Folder: {this.props.folder}</span>
                <label htmlFor="filter-by" >Filter By</label>

                <select name="isRead" id="toggle-read" onChange={this.onHandleInput}>
                    <option value="all">All</option>
                    <option value={true}>Read</option>
                    <option value={false}>Unread</option>
                </select>
                <label htmlFor="txt" className="search-email-lbl">Search</label>
                <input type="text" name="txt" onChange={this.onHandleInput} />

                <button onClick={() => this.onHandleChange('inbox', 'status')}>Inbox</button>
                <button onClick={() => this.onHandleChange('stared', 'status')}>Stared</button>
                <button onClick={() => this.onHandleChange('sent', 'status')}>Sent</button>
                <button className="compose-btn" onClick={openCompose}></button>
            </section>
        )
    }
}