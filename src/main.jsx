import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
    
    {
        index: true,
        element: <Home />
    },
    {
        path: 'projects',
        element: <Projects />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'resume',
        element: <Resume />
    }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);