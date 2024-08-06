import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
}
  from 'react-router-dom'


//LAYOUTS
import RootLayout from './Layouts/RootLayout'

//PAGES
import NotFound from './pages/NotFound'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'



const ErrorPage = () => {
  return <div className='bg-black text-white flex flex-col items-center p-2'>
    <h1>Oops! Something went wrong.</h1>
  </div>;
};

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div>

      <RouterProvider router={router} />

    </div>

  )
}

export default App
