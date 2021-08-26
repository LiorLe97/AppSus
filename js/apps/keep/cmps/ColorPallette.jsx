export function ColorPalette({ onSetNoteColor, note }) {
    const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6']



    return (
        <section className="color-palette">
            {colors.map(color => <button className={`color-part ${color}`} key={color} style={{ backgroundColor: `${color}` }} onClick={() => onSetNoteColor(note.id, color)} ></button>)
            }
        </section >
    )

}