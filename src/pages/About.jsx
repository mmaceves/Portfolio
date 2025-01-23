import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function About() {
  return (
    <div>
       <div  className="page-section">


            <h2>About Me</h2>
            <div>
            <img src="images/avatar.jpg" alt="profile" style={{width: '100px', height: '100px'}}/>
            <p>Hi, my name is Matt I am currently in a coding bootcamp course learning to code. I like looking at open source projects on Github. I look forward to learning more and changing career fields to become a full stack developer.</p>
            
            <nav>
                <a href="https://github.com/mmaceves" >
                <img src="images/github.png" alt="Github" style={{width: '50px', height: '50px'}}/>
                </a>
                <a href="#">
                <img src="images/link.png" alt="linkedin" style={{width: '50px', height: '50px'}}/>
                </a>
            </nav>

            </div>
        </div>
    </div>
  );
}
