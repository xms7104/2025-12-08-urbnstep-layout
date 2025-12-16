import NotFoundImage from '../assets/404.svg';

function NotFound(){
    return(
        <div className='notfound_block'>
            <img className='notfound_image' src={NotFoundImage} alt='404 notFount' />
        </div>
    )
}

export default NotFound