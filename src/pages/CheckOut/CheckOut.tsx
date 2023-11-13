import {
    AsideCheckout,
    CheckOutContent,
    CheckOutDiv,
    CheckOut_CardsMethods,
    CheckOut__Adress,
    CheckOut__AdressAndPayment,
    CheckOut__Payment,
    CheckOut__Products,
    CheckOut__ProductCoffee,
    Checkout_MethodsPayment,
    Forms,
    HeaderInfos,
    HeaderPayment
} from "./styles";

import locationDelivery from '../../assets/locationDelivery.svg'
import paymentIcon from '../../assets/paymentIcon.svg'

import credito from '../../assets/credito.svg'
import debito from '../../assets/debito.svg'
import dinheiro from '../../assets/dinheiro.svg'
import coffee from '../../assets/coffee.png'

export function CheckOut() {
    return (
        <CheckOutContent>
            <CheckOutDiv>
                <CheckOut__AdressAndPayment>
                    <h1>Complete seu pedido</h1>
                    <CheckOut__Adress>
                        <HeaderInfos>
                            <header>
                                <img src={locationDelivery} alt="" />
                                <div>
                                    <h3>Endereço de entrega</h3>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </header>

                            <Forms action="">
                                <input type="text" placeholder="CEP" />
                                <input type="text" placeholder="Rua" />
                                <input type="text" placeholder="Número" />
                                <input type="text" placeholder="Complemento" />
                                <input type="text" placeholder="Bairro" />
                                <input type="text" placeholder="Cidade" />
                                <input type="text" placeholder="UF" />
                            </Forms>
                        </HeaderInfos>
                    </CheckOut__Adress>
                    <CheckOut__Payment>
                        <HeaderPayment>
                            <img src={paymentIcon} alt="" />
                            <div>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </HeaderPayment>
                        <CheckOut_CardsMethods>
                            <Checkout_MethodsPayment><img src={credito} alt="" /><span>Cartão de crédito</span></Checkout_MethodsPayment>
                            <Checkout_MethodsPayment><img src={debito} alt="" /><span>Cartão de débito</span></Checkout_MethodsPayment>
                            <Checkout_MethodsPayment><img src={dinheiro} alt="" /><span>Dinheiro</span></Checkout_MethodsPayment>
                        </CheckOut_CardsMethods>
                    </CheckOut__Payment>
                </CheckOut__AdressAndPayment>
                <AsideCheckout>
                    <h1>Cafés selecionados</h1>
                    <CheckOut__Products>
                        <div>
                            <CheckOut__ProductCoffee>
                                <img src={coffee} alt="" />
                                <div>
                                    <h4>Expresso tradicional</h4>
                                    <div>
                                        {/*vale a pena fazer um componente para chamar o mesmo*/}
                                        <div>Botão com mais e menos</div> 
                                        <div>Remover</div>
                                    </div>
                                </div>
                                <span>R$ 9,90</span>
                            </CheckOut__ProductCoffee>
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
                    </CheckOut__Products>
                </AsideCheckout>
            </CheckOutDiv>
        </CheckOutContent>
    )
}