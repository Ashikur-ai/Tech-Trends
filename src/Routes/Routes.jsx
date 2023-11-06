
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import AddBlog from '../pages/AddBlog/AddBlog';
import PrivateRoutes from './PrivateRoutes';
import AllBlogs from '../pages/AllBlogs/AllBlogs';
import BlogDetail from '../pages/BlogDetail/BlogDetail';
import UpdateBlog from '../UpdateBlog/UpdateBlog';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addBlog",
                element: <PrivateRoutes>
                    <AddBlog></AddBlog>
                </PrivateRoutes>
            },
            {
                path: "/blogs",
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: "blog/details/:id",
                element: <BlogDetail></BlogDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: "update/:id",
                element: <UpdateBlog></UpdateBlog>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            }
        ]
    },
]);

export default router;