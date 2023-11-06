import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BlogDetail = () => {
    const { user } = useContext(AuthContext);
    const blog = useLoaderData();
    const { _id, url, blogName, long_description, email } = blog;
    return (
        <div className="container mx-auto">
            <img src={url} alt="" />
            <p className="text-5xl">{blogName}</p>
            <p>{long_description}</p>
            {
                user?.email == email ?
                    <Link to={`/update/${_id}`} className='btn btn-primary'>Update blog</Link>
                    :
                    <></>
            }
        </div>
    );
};

export default BlogDetail;