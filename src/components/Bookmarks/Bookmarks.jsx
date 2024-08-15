import propTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,handleAddToTime}) => {
    console.log(handleAddToTime)
    return (
        <div className="w-1/3">
             <p>Reading Time is:{handleAddToTime}</p>
            <h2 className="text-2xl font-bold">BookMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: propTypes.array.isRequired,
    handleAddToTime: propTypes.number
}
export default Bookmarks;