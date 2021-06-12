
export default function  PollAvatar(props) {
    const {pollOwnerInfo} = props
    return (
        <div className='avatarBox'>
            <img
                src={pollOwnerInfo.avatarURL}
                alt={`Avatar of ${pollOwnerInfo.name}`}
                className='avatar'
            />
        <p>{pollOwnerInfo.name} asks...</p>
        </div>
    );
}