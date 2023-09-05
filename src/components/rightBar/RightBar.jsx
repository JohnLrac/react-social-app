import './rightBar.scss';

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/46/49/b2/4649b22cfd1c1f053d4581f3140a7cd0.jpg" alt="profile" />
            <span>Rhea Parra</span>
            </div>
            <div className="right">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/1b/34/fa/1b34fa457dd8977d1f119e2fc798984c.jpg" alt="profile" />
           <span>Yang Yang</span>
            </div>
            <div className="right">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/2a/61/a5/2a61a517e901f4177241f66151d060cb.jpg" />
           <p>
           <span>Rhea Parra</span> changed their cover picture
           </p>
            </div>
            <div className="right">
            <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/1b/34/fa/1b34fa457dd8977d1f119e2fc798984c.jpg" alt="profile" />
            <p>
            <span>Yang Yang</span> like a post
            </p>
            </div>
            <div className="right">
            <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/1b/34/fa/1b34fa457dd8977d1f119e2fc798984c.jpg" alt="profile" />
            <p>
            <span>Yang Yang</span> liked a comment
            </p>
            </div>
            <div className="right">
            <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/2a/61/a5/2a61a517e901f4177241f66151d060cb.jpg" alt="profile" />
            <p>
            <span>Rhea Parra</span> posted
            </p>
            </div>
            <div className="right">
            <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/15/31/45/15314559ac0033f98f89bd464ce9a106.jpg" />
            <div className="online"/>
           <span>Rodito Modequillo</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/b3/2b/d8/b32bd8a072399b04592d007807d52ffe.jpg" alt="profile" />
            <div className="online"/>
           <span>Lester Lapera</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/e5/2c/7a/e52c7adde63be3b6809a4a4f3898189a.jpg" alt="profile" />
            <div className="online"/>
           <span>Jessie Antigua</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/f2/04/0f/f2040ffbb5ad14625674364c88954a40.jpg" alt="profile" />
            <div className="online"/>
           <span>Kristene Escalicas</span>
            </div>
          </div>
          <div className="user">
            <div className="left">
            <img src="https://i.pinimg.com/564x/83/15/67/831567127337d1e3e375e8a906e067f2.jpg" alt="profile" />
            <div className="online"/>
           <span>Marifaith Ola-a</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;