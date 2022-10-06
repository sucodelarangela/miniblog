import { Link } from 'react-router-dom';
import { useFetchDocs } from '../../hooks/useFetchDocs';
import { useQuery } from '../../hooks/useQuery';

import styles from './Search.module.sass';

import PostDetail from '../../components/PostDetail';

const Search = () => {
    const query = useQuery();
    const search = query.get('q'); //get method comes from URLSearchParams

    const { docs: posts } = useFetchDocs('posts', search);

    return (
        <div className={styles.search_container}>
            <h2>Resultados da busca</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to='/' className='btn btn-dark'>Voltar</Link>
                    </div>
                )}
                {/* loading searched posts on page */}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Search;