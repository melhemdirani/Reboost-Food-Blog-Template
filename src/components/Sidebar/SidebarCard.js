import './SidebarCard.scss';

export default function SidebarCard(props) {
    const { id, tag, title, date, img, description } = props.data;
    return (
        <>
            <div className="sidebar-container">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <a href="/"><h4>{tag}</h4></a>
                    <a href=""><h3>{title}</h3></a>
                    <a href=""><h6>{date}</h6></a>
                </div>
            </div>
        </>
    )
}