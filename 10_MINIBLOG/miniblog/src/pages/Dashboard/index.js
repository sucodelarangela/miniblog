import styles from './Dashboard.module.sass';

import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocs } from '../../hooks/useFetchDocs';
import { useDeleteDocument } from '../../hooks/useDeleteDoc';

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    // user posts
    const { docs: posts, loading } = useFetchDocs('posts', null, uid);

    const { deleteDocument } = useDeleteDocument('posts');

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <p>Gerencie os seus posts</p>
            {posts && posts.length === 0 ? (
                <div className={styles.noposts}>
                    <p>Não foram encontrados posts</p>
                    <Link to='/posts/create' className='btn'>Criar seu primeiro post</Link>
                </div>
            ) : (
                <>
                    <div className={styles.post_header}>
                        <span>Título</span>
                        <span>Ações</span>
                    </div>
                    {posts && posts.map((post) => (
                        <div key={post.id} className={styles.post_row}>
                            <p>{post.title}</p>
                            <div className={styles.buttons}>
                                <Link to={`/posts/${post.id}`} className='btn btn-outline'>
                                    Ver
                                </Link>
                                <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>
                                    Editar
                                </Link>
                                <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Dashboard;