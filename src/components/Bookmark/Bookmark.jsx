import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title, author}=bookmark;


    return (
        <div className='bg-slate-400 p-3 m-4 rounded ml-5'>
            <h3 className='text-2xl'>{title}</h3>
            <h3 className='text-2xl'>{author}</h3>
        </div>
    );
};



Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;

