export class SideBar extends React.Component {
    state = {
        filterBy: {
            // status: '', //inbox/sent/trash/draft
            txt: '', // no need to support complex text search
            isRead: true || false, // (optional property, if missing: show all)
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
        this.onHandleChange('', 'isRead')
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => { this.props.onSetFilter(this.state.filterBy) })
    }

    render() {
        const { txt } = this.state.filterBy
        const { onGetAllEmails } = this.props
        return (
            <section className='side-bar'>
                <input type="text" name="txt" value={txt} onChange={this.onHandleInput} />
                <button onClick={() => this.onHandleChange(false, 'isRead')}>Unread</button>
                <button onClick={() => this.onHandleChange(true, 'isRead')}>Read</button>
                <button onClick={onGetAllEmails}>All</button>
            </section>
        )
    }
}