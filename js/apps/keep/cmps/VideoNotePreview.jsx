import { ColorPalette } from "./ColorPallette.jsx"




export class VideoNotePreview extends React.Component {
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
            <section className="video-note-preview" style={style}>
                <iframe src={`https://www.youtube.com/embed/${note.info.urlId}?controls=1"`} frameBorder="0"></iframe>
                <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>
                <div className="color-palette-icon" onClick={this.onOpenColorPalette}>
                    {isColorPalette && <ColorPalette note={note} onSetNoteColor={onSetNoteColor} />}
                    open color
                </div>

            </section>
        )
    }
}