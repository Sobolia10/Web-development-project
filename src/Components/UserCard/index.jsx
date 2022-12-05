const UserCard = (props) => {
    const {id, username, address, email, name, phone, website, company} = props;
    return (
        <div>
            <p>{id}</p>
            <p>{username}</p>
            <p>{address}</p>
            <p>{email}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{company}</p>
        </div>
    )
}

export default UserCard;