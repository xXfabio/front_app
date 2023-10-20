import { FormEvent, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navegate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (email === '' || password === '') {

            alert("Preecha todos os campos !")
            return;
        }else{
            navegate("/dashboard", {replace:true})
        }
    }

    return (
        <div style={{ width: "400px" }} className="card bg-light container  justify-content-center mt-4">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Login</legend>

                    <div className="form-group">
                        <label className="form-label mt-4">Endereço de Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Adicionar email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword1"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark mt-4">Entrar </button><br/><br/>
                    <Link to="/" className="card-link">Se ainda não possui cadastro, click aqui!</Link>
                    <br/>.
                </fieldset>
            </form>
        </div>
    )
}