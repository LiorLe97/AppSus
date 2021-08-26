export class AddEmail extends React.Component {
    render() {
        const { onComposeEmail } = this.props
        return (
            <section className="AddEmail">

            <label htmlFor="to">TO</label>
            <input type="text" name="to"/>

            <label htmlFor="subject">subject</label>
            <input type="text" name="subject"/>

            <label htmlFor="content">Content</label>
<textarea name="content" id="content" cols="40" rows="7"></textarea>


            </section>
        )
    }
}