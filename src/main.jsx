import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import JobDetail from './component/JobDetail/JobDetail';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import Statistics from './component/Statistics/Statistics';
import ErrorPage from './component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'jobDetail',
          element: <JobDetail></JobDetail>
           
        },
        {
          path:'jobDetail/:id',
          element: <JobDetail></JobDetail>,
        },
        {
          path:'appliedJobs',
          element: <AppliedJobs></AppliedJobs>,
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
