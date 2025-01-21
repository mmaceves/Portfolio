import Header from './Header';
import Footer from './Footer';

function Projects() {
    return (
        <div>
            <Header />
            <div class="page-section" id="work">
            <h2>Projects</h2>
                <div>
                <a href="#" class="flex-item led-wall">
                    <h2>Employee Tracker</h2>
                </a>
                
                <a href="#" class="flex-item run-buddy">
                    <h2>Vehicle Builder</h2>
                </a>

                <a href="#" class="flex-item pastel-puzzles">
                    <h2>Readme Generator</h2>
                </a>

                <a href="#" class="flex-item pastel-puzzles">
                    <h2>Gamers Journal</h2>
                </a>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;