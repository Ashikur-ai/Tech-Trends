import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const UpdateBlog = () => {
    const blog = useLoaderData();
    
    const { _id, url, blogName, email, category, short_description, long_description } = blog;

    const handleUpdateBlog = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const blogName = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const long_description = form.long_description.value;
        const short_description = form.short_description.value;
        const updateBlog = {
            url,
            blogName,
            email,
            category,
            long_description,
            short_description
        }
        console.log(updateBlog);

        fetch(`http://localhost:5000/updateBlog/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                toast.success('Blog updated successfully')
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Tech Trends | Update Blog</title>
            </Helmet>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Your Blog Post</h2>
                    <form onSubmit={handleUpdateBlog} action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog image url</label>
                                <input type="text" defaultValue={url} name="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter url" required="" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Name</label>
                                <input type="text" name="name" defaultValue={blogName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter title" required="" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Email</label>
                                <input type="email" name="email" defaultValue={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Author Email" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select name="category" defaultValue={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">

                                    <option value="Technology Trends">Technology Trends</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Data Science">Data Science</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                                <textarea name="short_description" defaultValue={short_description} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your short description here"></textarea>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Description</label>
                                <textarea name="long_description" defaultValue={long_description} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your full description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex btn-primary items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Update Blog
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default UpdateBlog;