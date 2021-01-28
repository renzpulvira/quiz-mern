function Login() {
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__container">
          <h1>Welcome </h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="login__submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
