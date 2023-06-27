import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  const { id, title, poster_path, overview } = movie || {};

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3'>
      <Link to={`/movie/${id}`}>
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`}
          className='rounded-t-lg'
          alt=''
        />
      </Link>
      <div className='p-5'>
        <Link to={`/movie/${id}`}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {overview}
        </p>
      </div>
    </div>
  );
};
