import { noteService } from "../services/note.service.js";

export class AddTextNote extends React.Component {
    state = {
        info: {
            text: ''
        }
    }
    //type in props
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value;
        this.setState(prevState => ({ info: { ...prevState.info, [field]: value } }))

    }

    onSaveNote = (ev, noteInfo) => {
        const noteType = this.props.type
        const { loadNotes } = this.props
        ev.preventDefault();
        noteService.onSaveNote(noteType, noteInfo)
            .then(loadNotes)

    }


    render() {
        const { type } = this.props
        const { value } = this.state.info
        return (
            <form className="add-note" onSubmit={() => {
                this.onSaveNote(event, this.state.info)
            }} >
                <input className="note-input" name="text" value={value} type={type} placeholder="Enter text" onChange={this.handleChange} />
            </form>
        )
    }
}