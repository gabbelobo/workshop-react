import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/about/:id',
        element: <About />
    }
])

const App = () => {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/2">About</a></li>
            </ul>
            <RouterProvider router={router} />
        </div>
    )
}

export default App