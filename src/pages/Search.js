import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
import { Card } from '../components/Card';

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search results for ${queryTerm} / Cinemate`);

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>
          {movies.length > 0
            ? `Results found for ${queryTerm}`
            : `No results found for ${queryTerm}`}
        </p>
      </section>
      <section className='max-w-7x1 mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
