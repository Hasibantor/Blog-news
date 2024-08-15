import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark,handleAddToTime}) => {
    
    const {title, cover,author_img,author,reading_time,hashtags,posted_date} = blog
    return (
        <div className='mb-8'>
            <img className='w-11/12 h-96 mt-2' src={cover} alt={`cover picture title ${title}`} />
            
            <div className='flex justify-between mt-4 mb-2'>
                <div className='flex items-center gap-4'>
                    <img className='w-8 h-9 rounded-full' src={author_img} alt="" />
                    <div>
                            <h2 className='font-bold'>{author}</h2>
                            <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time}</p>
                    <button onClick={()=>handleBookmark(title)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p>{hashtags}</p>
            <button onClick={()=>handleAddToTime(reading_time)} className='text-blue-600 underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleAddToTime:PropTypes.func.isRequired

}
export default Blog;