import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const BlogDetail = () => {
    const { user } = useContext(AuthContext);
    const blog = useLoaderData();
    const { _id, url, blogName, long_description, email } = blog;


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
        <div className="container mx-auto">
            <img src={url} alt="" />
            <p className="text-5xl">{blogName}</p>
            <p>{long_description}</p>
            {
                user?.email == email ?
                    <Link to={`/update/${_id}`} className='btn btn-primary'>Update blog</Link>
                    :
                    <form onSubmit={handleComment} action="">
                        <div className="sm:col-span-2">
                            <textarea name="comment" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your comment here"></textarea>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Comment" />
                    </form>
            }
        </div>
    );
};

export default BlogDetail;