
export class AddImageNote extends React.Component {
    state = {
        info: {
            url: ''
        }
    }
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value;
        this.setState(prevState => ({ info: { ...prevState.info, [field]: value } }))
    }

    render() {
        const { url } = this.state.info
        const { onSaveNote, type } = this.props
        return (
            <form className="add-note" onSubmit={() => { onSaveNote(event, this.state.info, type) }}>
                <input className="note-input" name="url" value={url} type="text" placeholder="Enter image url" onChange={this.handleChange} />
            </form>
        )
    }
}