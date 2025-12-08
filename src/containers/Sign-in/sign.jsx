import "./sign.css";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="box-login">
        {/* TITULO */}
        <div className="title-login">
          <h1>Operação CRUD</h1>
          <h2>Sign in</h2>
          <p>Insira e-mail e senha para acessar sua conta</p>
        </div>
        {/* FORMULARIO */}
        <div className="form-login">
          <form>
            <div className="input-login">
              <label htmlFor="email">E-mail</label>
              <input type="text" placeholder="Digite seu e-mail" id="email" />
            </div>
            <div className="input-login">
              <label htmlFor="password">Senha</label>
              <input type="text" placeholder="Digite sua senha" id="password" />
            </div>
            <button className="btn-login" type="submit">
              ENTRAR
            </button>
          </form>
        </div>
        {/* FOOTER */}
        <div className="footer-login">
          <p>
            Esqueceu sua senha?&nbsp; <a href="#">Redefinir senha</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
