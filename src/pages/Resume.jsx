import Header from '../components/Header';
import Footer from '../components/Footer';

function Resume () {
    return (
        <div>
            <Header />
            
            <section className="full-dev">
                <h2>Full Stack Developer!</h2>
            </section>

                <div className="page-section resume">
                    <h2>Resume</h2>

                    <div>
                        <h3>Front-End Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                        <h3>Back-End Proficiencies</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Resume;