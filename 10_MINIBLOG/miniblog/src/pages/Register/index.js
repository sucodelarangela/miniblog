import styles from './Register.module.sass';

const Register = () => {
    return (
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form>
                <label>
                    Nome:
                    <input
                        type="text"
                        name='displayName'
                        required
                        placeholder="Nome do usuário"
                    />
                </label>
                <label>
                    E-mail:
                    <input
                        type="email"
                        name='email'
                        required
                        placeholder="E-mail do usuário"
                    />
                </label>
                <label>
                    Senha:
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder="Insira sua senha"
                    />
                </label>
                <label>
                    Confirme sua senha:
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                        placeholder="Confirma sua senha"
                    />
                </label>
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    );
};

export default Register;