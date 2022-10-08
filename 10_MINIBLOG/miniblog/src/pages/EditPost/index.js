import { useEffect, useState } from 'react';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useAuthValue } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDoc } from '../../hooks/useFetchDoc';

import styles from './EditPost.module.sass';

const EditPost = () => {
    const { id } = useParams();
    const { document: post } = useFetchDoc('posts', id);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArr.join(', ');
            setTags(textTags);
        }

    }, [post]);

    const { updateDocument, response } = useUpdateDocument('posts');

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

        const data = {
            title,
            image,
            body,
            tagsArr,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        // redirect to home page
        navigate('/dashboard');
    };

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como desejar</p>
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
                        <p className={styles.preview_title}>Preview da imagem atual:</p>
                        <img
                            className={styles.image_preview}
                            src={post.image}
                            alt={post.title}
                        />
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
                        {!response.loading && <button className='btn'>Editar</button>}
                        {response.loading && <button className='btn' disabled>Aguarde...</button>}
                        {response.error && <p className='error'>{response.error}</p>}
                        {formError && <p className='error'>{formError}</p>}
                    </form>
                </>
            )}
        </div>
    );
};

export default EditPost;