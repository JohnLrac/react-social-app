import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext'

const Comments = () => {

  const {currentUser} = useContext(AuthContext)

      //TEMPORARY
      const comments = [
        {
        id: 1, 
        name: 'John Carl', 
        userId: 1,
        profilePic: 'https://i.pinimg.com/564x/07/d5/2d/07d52d6bf0d254087feccaeae1c88559.jpg',
        desc: 'adsafawafsafafafasfafasfafasf'
        },
        {
        id: 2, 
        name: 'John Carl', 
        userId: 2,
        profilePic: 'https://i.pinimg.com/564x/07/d5/2d/07d52d6bf0d254087feccaeae1c88559.jpg',
        desc: 'adsafawafsafafafasfafasfafasf',
        },
        ];

  return (
    <div className="comments">
      <div className="write">
      <img src={currentUser.profilePic} alt="" />
      <input type="text" placeholder='write a comment' />
      <button>Send</button>
      </div>
      {comments.map(comment=>
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>1 hour ago</span>
        </div>
        )}
    </div>
  );
};

export default Comments;