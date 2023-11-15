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
    HeaderPayment,
    CheckOutButtonDiv,
    Remove,
    Price,
    CheckOut__Finalize,
    Checkout__TotalItens,
} from "./styles";

import locationDelivery from '../../assets/locationDelivery.svg'
import paymentIcon from '../../assets/paymentIcon.svg'

import credito from '../../assets/credito.svg'
import debito from '../../assets/debito.svg'
import dinheiro from '../../assets/dinheiro.svg'
import coffee from '../../assets/coffee.png'
import remove from '../../assets/remove.svg'

import { AddOrRemoveButon } from "../../components/AddOrRemoveButton/AddOrRemoveButton";
import { useState } from "react";

export function CheckOut() {
    const [checkedMethod, setCheckedMethod] = useState<string | null>(null);

    const handleCheckboxChange = (method: string) => {
        setCheckedMethod(method);
    };

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
                                <input type="text" placeholder="CEP" id="cep" />
                                <input type="text" placeholder="Rua" id="rua" />
                                <div>
                                    <input type="text" placeholder="Número" id="numero" />
                                    <input type="text" placeholder="Complemento" id="complemento" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Bairro" id="bairro" />
                                    <input type="text" placeholder="Cidade" id="cidade" />
                                    <input type="text" placeholder="UF" id="uf" />
                                </div>
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
                            <Checkout_MethodsPayment checked={checkedMethod === 'credit'} onClick={() => handleCheckboxChange('credit')}><img src={credito} alt="" /><span>Cartão de crédito</span></Checkout_MethodsPayment>
                            <Checkout_MethodsPayment checked={checkedMethod === 'debit'} onClick={() => handleCheckboxChange('debit')}><img src={debito} alt="" /><span>Cartão de débito</span></Checkout_MethodsPayment>
                            <Checkout_MethodsPayment checked={checkedMethod === 'cash'} onClick={() => handleCheckboxChange('cash')}><img src={dinheiro} alt="" /><span>Dinheiro</span></Checkout_MethodsPayment>
                        </CheckOut_CardsMethods>
                    </CheckOut__Payment>
                </CheckOut__AdressAndPayment>
                <AsideCheckout>
                    <h1>Cafés selecionados</h1>
                    <CheckOut__Finalize>
                        <CheckOut__Products>
                            <CheckOut__ProductCoffee>
                                <img src={coffee} alt="" />
                                <div>
                                    <h4>Expresso tradicional</h4>
                                    <CheckOutButtonDiv>
                                        <AddOrRemoveButon />
                                        <Remove><img src={remove} alt="" />Remover</Remove>
                                    </CheckOutButtonDiv>
                                </div>
                                <Price>R$ 9,90</Price>
                            </CheckOut__ProductCoffee>

                            <CheckOut__ProductCoffee>
                                <img src={coffee} alt="" />
                                <div>
                                    <h4>Expresso tradicional</h4>
                                    <CheckOutButtonDiv>
                                        <AddOrRemoveButon />
                                        <Remove><img src={remove} alt="" />Remover</Remove>
                                    </CheckOutButtonDiv>
                                </div>
                                <Price>R$ 9,90</Price>
                            </CheckOut__ProductCoffee>
                        </CheckOut__Products>
                        <Checkout__TotalItens>
                            <table>
                                <tr>
                                    <th>Total de itens</th>
                                    <td>R$ {`29,70`}</td>
                                </tr>
                                <tr>
                                    <th>Entrega</th>
                                    <td>R$ {`3,50`}</td>
                                </tr>
                                <tfoot>
                                    <th>Total</th>
                                    <td>R$ 33,20</td>
                                </tfoot>
                            </table>
                            <button><span><a href="/Delivery">Confirmar pedido</a></span></button>
                        </Checkout__TotalItens>
                    </CheckOut__Finalize>
                </AsideCheckout>
            </CheckOutDiv>
        </CheckOutContent>
    )
}