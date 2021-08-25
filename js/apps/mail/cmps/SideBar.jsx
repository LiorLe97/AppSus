export function SideBar({onSetFilter}) {
    return (
        <section className='side-bar'>

            <button onClick={()=>onSetFilter('inbox')}>Inbox</button>
            <button onClick={()=>onSetFilter('stared')}>Stared</button>
            <button onClick={()=>onSetFilter('sent')}>Sent Mails</button>
            <button onClick={()=>onSetFilter('drafts')}>Drafts</button>
        </section>
    )
}