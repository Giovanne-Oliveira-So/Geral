var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Estoque - Cadastro de novos produtos</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <link rel="stylesheet" href="css/estilos.css" />
          {/*Carrinho de compras*/}
          <div className="carrinho">
            <p>Itens no estoque: <span id="totalEstoque">0</span></p>
          </div>
          <form>
            <table>
              <caption>Cadastro de novos produtos</caption>
              <tbody><tr>
                  <td className="alinharRotulos">Nome do produto:</td>
                  <td><input id="txtNomeProduto" type="text" /></td>
                </tr>
                <tr>
                  <td className="alinharRotulos">Código do produto:</td>
                  <td><input id="txtCodProduto" type="text" /></td>
                </tr>
                <tr>
                  <td className="alinharRotulos">Quantidade do produto:</td>
                  <td>
                    <select id="qtidadeProduto">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} align="center">
                    <input type="button" defaultValue="Cadastrar" className="alinhaBtns" onclick="validarProduto('txtNomeProduto','txtCodProduto','qtidadeProduto')" />
                    <input type="button" defaultValue="Ver estoque" className="alinhaBtns" onclick="window.open('verEstoque.html','_self')" />
                    <input type="reset" defaultValue="Limpar" className="alinhaBtns" />
                  </td>
                </tr>
              </tbody></table>
          </form>
        </div>
      );
    }
  });