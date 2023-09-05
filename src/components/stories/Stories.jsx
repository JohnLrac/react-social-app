import './stories.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
    id: 1, 
    name: 'Rhea Parra', 
    img: 'https://i.pinimg.com/564x/b8/8c/69/b88c691204a3567c8b3bf006976f4b5c.jpg',
    },
    {
    id: 2, 
    name: 'Kristene Escalicas', 
    img: 'https://i.pinimg.com/564x/f3/fe/98/f3fe988cd3346a5353df0e4a5955db41.jpg',
    },
    {
    id: 3, 
    name: 'Lester Lapera', 
    img: 'https://i.pinimg.com/564x/26/8c/9c/268c9ccf6f10dd587f6f482d203565ba.jpg',
    },
    {
    id: 4, 
    name: 'Jessie Antigua', 
    img: 'https://i.pinimg.com/564x/09/d0/58/09d05801bd4c0eec8b6139990b8ff2ab.jpg',
    },
    ];

  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;