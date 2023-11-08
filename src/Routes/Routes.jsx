
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
import WishListCard from '../pages/WishList/WishListCard';
import WishListDetails from '../pages/WishList/WishListDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://tech-trends-server.vercel.app/blogs')

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
                loader: () => fetch('https://tech-trends-server.vercel.app/blogs')
            },
            {
                path: "/blog/details/:id",
                element: <BlogDetail></BlogDetail>,
                loader: ({ params }) => fetch(`https://tech-trends-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: "update/:id",
                element: <PrivateRoutes>
                    <UpdateBlog></UpdateBlog>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://tech-trends-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: "/wishlist",
                element: <PrivateRoutes>
                    <WishList></WishList>
                </PrivateRoutes>
            },
            {
                path: "/featured",
                element: <FeaturedBlogs></FeaturedBlogs>,
                loader: () => fetch('https://tech-trends-server.vercel.app/blogs')
            },
            {
                path: "/wishlist/details/:id",
                element: <WishListDetails></WishListDetails>,
                loader: ({ params }) => fetch(`https://tech-trends-server.vercel.app/wishlist/details/${params.id}`)
            }
        ]
    },
]);

export default router;