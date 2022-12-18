
function Postcard({ _id, title, price, description, location }) {
    return (
        <div key={_id}>
            <h3>{title}</h3>
            <span>Price: {price}</span>
            <br />
            <span>Description: {description}</span>
            <br />
            <span>Location: {location}</span>
        </div>
    )
}

export default Postcard;