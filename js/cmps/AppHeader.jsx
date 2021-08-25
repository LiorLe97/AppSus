const { NavLink, withRouter } = ReactRouterDOM
class _AppHeader extends React.Component {

    render() {

        return (
            <section className="app-header">
                <h1 onClick={() => this.props.history.push('/')}>AppSus</h1>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/book" >Books</NavLink>
                    <NavLink to="/emails" >Emails</NavLink>
                    <NavLink to="/keep">Notes</NavLink>
                </nav>
            </section>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)