import React from 'react';
import databaseService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({$id, title, featuredImage}) {

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-r-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={databaseService.getFilePreview(featuredImage)} alt={title} className="w-full rounded-xl"/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;