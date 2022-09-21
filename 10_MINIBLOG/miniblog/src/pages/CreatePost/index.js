import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import styles from './CreatePost.module.sass';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');

    const { insertDocument, response } = useInsertDocument('posts');

    const navigate = useNavigate();

    const { user } = useAuthValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError('');

        // validating image url
        try {
            new URL(image);
        } catch (error) {
            setFormError('A imagem precisa ser uma URL');
        }

        // creating tags array
        const tagsArr = tags.split(',').map(tag => tag.trim().toLowerCase());

        // check all values
        if (!title || !image || !tags || !body) setFormError('Por favor, preencha todos os campos');
        if (formError) return;

        insertDocument({
            title,
            image,
            body,
            tagsArr,
            uid: user.uid,
            createdBy: user.displayName
        });

        // redirect to home page
        navigate('/');
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
                {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    );
};

export default CreatePost;