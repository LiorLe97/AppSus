


export class EditTextNote extends React.Component {
    state = {
        info: {
            text: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value;
        this.setState(prevState => ({ info: { ...prevState.info, [field]: value } }))

    }
    render() {
        const { text } = this.state.info
        const { type, onEditNote } = this.props

        return (
            <form className="edit-text-note" onSubmit={() => {
                onEditNote(event,type, this.state.info)
            }} >
                <input className="note-input" name="text" value={text} placeholder="Edit text" onChange={this.handleChange} />
            </form>

        )
    }
}

