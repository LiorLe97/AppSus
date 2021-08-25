const { NavLink, withRouter } = ReactRouterDOM
 class _AppHeader extends React.Component {

    render() {

        return (
            <section className="app-header">
                <h1 onClick={() => this.props.history.push('/')}>Get Paper</h1>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/book" >Our Books</NavLink>
                </nav>
            </section>
        )
    }
}

export const AppHeader= withRouter(_AppHeader)