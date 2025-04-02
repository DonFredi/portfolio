import React, { Suspense, lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import NotFound from './pages/NotFound';
import ErrorBoundary from './Layouts/ErrorBoundary'; // The ErrorBoundary component
import ServiceCard from './pages/ServiceCard';
// Lazy load pages
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contacts = lazy(() => import('./pages/Contacts'));


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <RootLayout />
            </Suspense>
          </ErrorBoundary>
        }

      >
        <Route path="services" element={<ServiceCard />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
