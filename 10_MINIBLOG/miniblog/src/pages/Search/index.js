import { useFetchDocs } from '../../hooks/useFetchDocs';
import { useQuery } from '../../hooks/useQuery';

import styles from './Search.module.sass';

const Search = () => {
    const query = useQuery();
    const search = query.get('q'); //get method comes from URLSearchParams

    return (
        <div>
            <h2>Search</h2>
            <p>{search}</p>
        </div>
    );
};

export default Search;