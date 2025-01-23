import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Projects() {
    return (
        <div>
            <Header />
            
            <section className="full-dev">
                <h2>Full Stack Developer!</h2>
            </section>

            <div className="page-section">
            <h2>Projects</h2>
                <div>
                    <a href="https://johnbrunson.github.io/the-gamers-journal/" className="flex-item gamer">
                        <h2>Gamers Journal</h2>
                    </a>

                    <a href="https://github.com/mmaceves/Employee-Tracker" className="flex-item employee">
                        <h2>Employee Tracker</h2>
                    </a>

                    <a href="https://github.com/mmaceves/vehicle-builder" className="flex-item vehicle">
                        <h2>Vehicle Builder</h2>
                    </a>
            
                     <a href="https://github.com/mmaceves/readme-generator" className="flex-item readme">
                        <h2>Readme Generator</h2>
                    </a>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;