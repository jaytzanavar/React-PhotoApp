import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {
    return <div className='photoGrid' >
        {props.posts.map((post, key) => <Photo key={key} post={post}
            onRemovePhoto={props.onRemovePhoto}
        />)}
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired, // whatever type of prop instance must be an array and req
    onRemovePhoto: PropTypes.func.isRequired
}


export default PhotoWall