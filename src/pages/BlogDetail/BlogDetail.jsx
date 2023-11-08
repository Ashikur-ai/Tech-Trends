import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import CommentCard from "./CommentCard";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
    const { user } = useContext(AuthContext);
    const blog = useLoaderData();
    const [comments, setComment] = useState([]);
    const { _id, url, blogName, short_description, long_description, email } = blog;

    const commentUrl = `http://localhost:5000/comments?id=${_id}`;
    useEffect(() => {
        fetch(commentUrl)
            .then(res => res.json())
        .then(data => setComment(data))
    }, [commentUrl])


    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const blog_id = _id;
        const user_name = user.displayName;
        const profile_pic = user.photoURL;
        const email = user?.email;
        const data = {comment, blog_id, user_name, profile_pic, email}
        console.log(data);
        fetch('http://localhost:5000/addComment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Comment added successfully');
        })
    }
    return (
        <div className="">
            <Helmet>
                <title>Tech Trends | Details</title>
            </Helmet>

            <div className="hero min-h-screen" style={{ backgroundImage: `url(${url})` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-white">
                    <div className="shadow-2xl rounded-2xl">
                        <h1 className="mb-5 text-5xl font-bold">{blogName}</h1>
                        <p className="mb-5 ">{ short_description }</p>
                        <p className="">By: { email }</p>
                    </div>
                </div>
            </div>


            <div className="container mx-auto mt-9 p-2">
                <p className="text-5xl mb-9 font-bold text-center">{blogName}</p>
                <p className="text-xl">{long_description}</p>
            </div>
            <div className="w-3/5 mt-10  mx-auto">
                <p className="text-4xl font-bold">Comments</p>
                {
                    comments?.map(comment => <CommentCard key={comment._id} comment={comment}></CommentCard>)
                }
            </div>
            <div className="w-3/5 mx-auto">
                {
                    user?.email == email ?
                        <>
                            <p>You can't comment on your own blog</p>
                            <Link to={`/update/${_id}`} className='btn btn-primary'>Update blog</Link>
                        </>
                        :
                        <>

                            <form onSubmit={handleComment} action="">
                                <div className="sm:col-span-2  py-5">
                                    <textarea name="comment" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your comment here"></textarea>
                                </div>
                                <input className="btn btn-primary" type="submit" value="Comment" />
                            </form>
                        </>
                }
            </div>
        </div>
    );
};

export default BlogDetail;