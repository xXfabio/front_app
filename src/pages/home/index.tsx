import { Register } from "../register"
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div>
            <div style={{width: "100%", maxWidth: "1080px" }}>
            <div className="card mb-2">
                    <div className="card-body">
                        <h4 className="card-title">API RESTful</h4>
                        <p className="card-text">Interface para trocar informações de forma segura!</p>
                        <Link to="/login" className="card-link">Entrar</Link>
                        <Link to="/about" className="card-link">Sobre</Link>
                    </div>
                </div>
            </div>

            <div style={{ float: "left" }}>
                <img className="mt-4" src="https://blog.vindi.com.br/wp-content/uploads/2018/02/qual-futuro-do-pagamento.gif"/>
            </div>

            <div style={{ float: "right" }}>
                <Register />
            </div>


            <div style={{}}></div>

            <div style={{position: "absolute", bottom: "0", width: "100%", maxWidth: "1080px" }}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">.</h4>
                        <p className="card-text">© 2023, FLL Web Services. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}