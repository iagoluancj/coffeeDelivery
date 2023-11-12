export function CheckOut() {
    return (
        <div>
            <div>
                <h2>Complete seu pedido</h2>
                <div>
                    <div>
                        <h3>Endereço de entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>

                    <form action="">
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h3>Cafés selecionados</h3>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h4>Expresso tradicional</h4>
                        <span>R$ 9,90</span>
                        <div>Botão com mais e menos, vale a pena fazer um componente para chamar o mesmo</div>
                        <span>Remover</span>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>Total de itens: </td>
                                <td>R$ 29,70</td>
                            </tr>
                            <tr>
                                <td>Entrega:</td>
                                <td>R$ 3,50</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>R$ 33,20</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
                <div>Cartão de crédito</div>
                <div>Cartão de débito</div>
                <div>Dinheiro</div>
            </div>
        </div>
    )
}