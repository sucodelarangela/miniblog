import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext';

import styles from './CreatePost.module.sass';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');

    const { insertDocument, response } = useInsertDocument('posts');

    const { user } = useAuthValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError('');

        // validating image url

        // creating tags array

        // check all values

        insertDocument({
            title,
            image,
            body,
            tags,
            uid: user.uid,
            createdBy: user.displayName
        });

        // redirect to home page

    };

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input
                        type="text"
                        name='title'
                        required
                        placeholder='Pense num bom título...'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    URL da imagem:
                    <input
                        type="text"
                        name='image'
                        required
                        placeholder='Insira uma imagem que representa o seu post'
                        onChange={e => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    Conteúdo:
                    <textarea
                        name='body'
                        required
                        placeholder='Insira o conteúdo do post'
                        onChange={e => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label>
                    Tags:
                    <input
                        type="text"
                        name='tags'
                        required
                        placeholder='Insira as tags separadas por vírgula'
                        onChange={e => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                {!response.loading && <button className='btn'>Cadastrar</button>}
                {response.loading && <button className='btn' disabled>Aguarde...</button>}
                {response.error && <p className='error'>{response.error}</p>}
            </form>
        </div>
    );
};

export default CreatePost;