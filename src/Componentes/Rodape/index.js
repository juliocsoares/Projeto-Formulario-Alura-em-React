import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="footerimagens">
                <div className="redessociais">
                    <img src="/imagens/fb.png" alt="simbolofacebook" />
                    <img src="/imagens/tw.png" alt="simbolotwitter" />
                    <img src="/imagens/ig.png" alt="simboloinstagram" />
                </div>

                <div className="logo">
                    <img src="/imagens/logo.png" alt="logo" />
                </div>

                <div id="criadopor">
                    <p>Desenvolvido por Julio Silva</p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape;
