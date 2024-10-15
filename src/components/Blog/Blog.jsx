import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {

    const { title, cover, author, reading_time, post_date, hashtags } = blog;
    // console.log(blog)




    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <div>
                        <img src={author} alt="author" />
                    </div>
                    <div className='ml-3' >
                        <p>{author}</p>
                        <p>{post_date}</p>
                    </div>


                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    {/* <button onClick={handleBookmarks} className=' text-2xl ml-3 p-3'><IoBookmarksOutline /></button> */}
                    <button onClick={() => handleBookmarks(blog)} className=' text-2xl ml-3 p-3'><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>

            <p >
                {
                    // here idx is for giving key,, because in database there is no key inside hashtag
                    hashtags.map((hash, idx) => <span key={idx} ><a href=''>{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='text-purple-400 font-bold underline' >Mark As Read</button>

        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;