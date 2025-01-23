import Header from './Header';
import Footer from './Footer';

function Projects() {
    return (
        <div>
            <Header />
            <div className="page-section" id="work">
            <h2>Projects</h2>
                <div>
                    <a href="https://johnbrunson.github.io/the-gamers-journal/" className="flex-item">
                        <h2>Gamers Journal</h2>
                    </a>

                    <a href="https://github.com/mmaceves/Employee-Tracker" className="flex-item">
                        <h2>Employee Tracker</h2>
                    </a>

                    <a href="https://github.com/mmaceves/vehicle-builder" className="flex-item">
                        <h2>Vehicle Builder</h2>
                    </a>
            
                     <a href="https://github.com/mmaceves/readme-generator" className="flex-item">
                        <h2>Readme Generator</h2>
                    </a>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;