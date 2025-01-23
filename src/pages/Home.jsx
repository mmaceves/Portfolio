import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home() {
  return (
    <div>
      <Header />
      <section className="full-dev">
            <h2>Full Stack Developer!</h2>
        </section>
      <About />
      <Footer />
    </div>
  );
}

export default Home;
