import { FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'


export function Register() {

    const [name, setName] = useState("");
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
            alert("Cadastrado com sicesso !")
        }
    }

    return (
        <div style={{ width: "450px" }} className="card bg-light container  justify-content-center">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulário para cadastro de Usuário</legend>

                    <div className="form-group">
                        <label className="form-label mt-4">Nome com sobrenome:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputText"
                            aria-describedby="textHelp"
                            placeholder="Adicionar nome e sobrenome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Endereço de Email:</label>
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
                    <small id="emailHelp" className="form-text text-muted">
                        Nunca compartilharemos seu e-mail com mais ninguém.
                    </small>
                    <div className="form-group">
                        <label className="form-label mt-4">Senha para acesso:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword1"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark mt-4 mb-4"> - Cadastrar - </button>
                </fieldset>
            </form>
        </div>
    )
}