import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { Button } from '../components';
import PageNotFoundImage from '../assets/images/pagenotfound.png';

export const PageNotFound = () => {
  useTitle('Page not found');

  return (
    <main>
      <secion className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10'>404, Oops!</p>
          <div className='max-w-lg'>
            <img
              className='rounded'
              src={PageNotFoundImage}
              alt='404 page not found'
            />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to='/'>
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </secion>
    </main>
  );
};
