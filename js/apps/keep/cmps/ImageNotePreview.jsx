import { ColorPalette } from "./ColorPallette.jsx"



export class ImageNotePreview extends React.Component {
    state = {
        isColorPalette: false
    }
    onOpenColorPalette = () => {
        this.setState(prevState => ({ isColorPalette: !prevState.isColorPalette }))
    }

    render() {
        const { note, onDeleteNote, style, onSetNoteColor } = this.props
        const { isColorPalette } = this.state
        return (
            <section className="image-note-preview" style={style}>
                <h1>{note.info.title}</h1>
                <img src={note.info.url} />
                <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>
                <div className="color-palette-icon" onClick={this.onOpenColorPalette}>
                    {isColorPalette && <ColorPalette note={note} onSetNoteColor={onSetNoteColor} />}
                    open color
                </div>
            </section>
        )
    }
}