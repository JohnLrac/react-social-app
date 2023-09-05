import './posts.scss';
import Post from '../post/Post';

const Posts = () => {

    //TEMPORARY
    const posts = [
      {
      id: 1, 
      name: 'Rhea Parra', 
      userId: 1,
      profilePic: 'https://i.pinimg.com/564x/2a/61/a5/2a61a517e901f4177241f66151d060cb.jpg',
      img: 'https://i.pinimg.com/564x/16/75/4b/16754bde0bed98484a5e99da5eb7b23f.jpg',
      desc: 'a moment w/ my husband'
      },
      {
      id: 2, 
      name: 'Rodito Modequillo', 
      userId: 2,
      profilePic: 'https://i.pinimg.com/564x/15/31/45/15314559ac0033f98f89bd464ce9a106.jpg',
      img: 'https://i.pinimg.com/564x/b5/3e/12/b53e12f87904d4c12a9136471763dfb5.jpg',
      desc: 'weibo',
      },
      ];

  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Posts;