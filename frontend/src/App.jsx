import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Home from './pages/Home';
// import CreateBook from './pages/CreateBook';
// import DeleteBook from './pages/DeleteBook';
// import EditBook from './pages/EditBook';
// import ShowBook from './pages/ShowBook';

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/Home',
//       element: <Home />
//     },
//     {
//       path: '/books/create',
//       element: <CreateBook />
//     },
//     {
//       path: '/books/delete/:id',
//       element: <DeleteBook />
//     },
//     {
//       path: '/books/edit/:id',
//       element: <EditBook />
//     },
//     {
//       path: '/books/details/:id',
//       element: <ShowBook />
//     },
//     {
//       path: '*', // Catch all route for undefined paths
//       element: <Home />
//     }
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;
