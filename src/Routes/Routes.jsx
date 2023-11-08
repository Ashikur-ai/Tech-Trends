
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
import WishList from '../pages/WishList/WishList';
import FeaturedBlogs from '../pages/FeaturedBlogs/FeaturedBlogs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/blogs')

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
                element: <PrivateRoutes>
                    <AllBlogs></AllBlogs>
                </PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: "blog/details/:id",
                element: <BlogDetail></BlogDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: "update/:id",
                element: <PrivateRoutes>
                    <UpdateBlog></UpdateBlog>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: "/wishlist",
                element: <WishList></WishList>
            },
            {
                path: "/featured",
                element: <FeaturedBlogs></FeaturedBlogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            }
        ]
    },
]);

export default router;