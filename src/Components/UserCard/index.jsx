const UserCard = (props) => {
    const {user} = props;
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.address}</p>
            <p>{user.email}</p>
            <p>{user.name}</p>
        </div>
    )
}

export default UserCard;