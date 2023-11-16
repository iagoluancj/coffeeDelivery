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
    HeaderInfos,
    HeaderPayment,
    CheckOutButtonDiv,
    Remove,
    Price,
    CheckOut__Finalize,
    Checkout__TotalItens,
    FormsCheckOut,
} from "./styles";

import locationDelivery from '../../assets/locationDelivery.svg'
import paymentIcon from '../../assets/paymentIcon.svg'

import credito from '../../assets/credito.svg'
import debito from '../../assets/debito.svg'
import dinheiro from '../../assets/dinheiro.svg'
import remove from '../../assets/remove.svg'
import coffeesJSON from '../../assets/coffeesJSON.json'

import { AddOrRemoveButon } from "../../components/AddOrRemoveButton/AddOrRemoveButton";
import { useRef, useState } from "react";
import { useCoffees } from "../../Hooks/use-Coffees";

export function CheckOut() {
    const [checkedMethod, setCheckedMethod] = useState<string | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

    const { coffees, addCoffees, removeCoffees } = useCoffees()
    const formRef = useRef<HTMLFormElement | undefined>(undefined);


    const handleCheckboxChange = (method: string) => {
        setCheckedMethod(method);
        setSelectedPaymentMethod(method);
        console.log('Selecionando método de pagamento:', method);
    };

    const handleAddCoffees = (coffeeName: string) => {
        addCoffees({ id: coffeeName, quantity: 1 });
    };

    const handleRemoveCoffees = (coffeeName: string) => {
        removeCoffees(coffeeName);
    };

    const handleRemoveFromCheckout = (coffeeName: string) => {
        removeCoffees(coffeeName, true);
    };


    const calculateTotalValue = () => {
        const totalCoffeesValue = coffees.reduce((total, coffee) => {
            const coffeeData = coffeesJSON.find((c) => c.name === coffee.id);
            if (coffeeData) {
                const coffeePrice = parseFloat(coffeeData.price.replace(',', '.'));
                return total + coffee.quantity * coffeePrice;
            }
            return total;
        }, 0);

        return totalCoffeesValue.toFixed(1); // Formatando para duas casas decimais
    };

    const frete = 0;
    const totalValue = calculateTotalValue();
    const totalCoffeesAndFrete = (parseFloat(totalValue) + frete).toFixed(2);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);

        localStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData)));

        window.location.href = '/Delivery';
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

                            <FormsCheckOut action="" ref={formRef as React.RefObject<HTMLFormElement>} onSubmit={handleSubmit}>
                                <input type="text" placeholder="CEP" id="cep" name="cep" />
                                <input type="text" placeholder="Rua" id="rua" name="rua"/>
                                <div>
                                    <input type="text" placeholder="Número" id="numero" name="numero"/>
                                    <input type="text" placeholder="Complemento" id="complemento" name="complemento"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Bairro" id="bairro" name="bairro"/>
                                    <input type="text" placeholder="Cidade" id="cidade" name="cidade"/>
                                    <input type="text" placeholder="UF" id="uf" name="uf"/>
                                    <input type="hidden" name="paymentMethod" value={selectedPaymentMethod || ''} />
                                </div>
                            </FormsCheckOut>
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
                            {coffees.map((coffee, index) => {
                                const coffeeData = coffeesJSON.find((c) => c.name === coffee.id);

                                if (!coffeeData) {
                                    return null; 
                                }

                                return (
                                    <CheckOut__ProductCoffee key={index}>
                                        <img src={coffeeData.img} alt="" />
                                        <div>
                                            <h4>{coffeeData.name}</h4>
                                            <CheckOutButtonDiv>
                                                <AddOrRemoveButon
                                                    onAddCoffees={() => handleAddCoffees(coffeeData.name)}
                                                    onRemoveCoffees={() => handleRemoveCoffees(coffeeData.name)}
                                                    quantity={coffee.quantity}
                                                />
                                                <div><Remove onClick={() => handleRemoveFromCheckout(coffeeData.name)}><img src={remove} alt="" />Remover</Remove></div>
                                            </CheckOutButtonDiv>
                                        </div>
                                        <Price>R$ {coffeeData.price}</Price>
                                    </CheckOut__ProductCoffee>
                                );
                            })}
                        </CheckOut__Products>
                        <Checkout__TotalItens>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Total de itens</th>
                                        <td>{`R$ ${Number(totalValue).toFixed(2)}`}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Entrega</th>
                                        <td>{`R$ ${Number(frete).toFixed(2)}`}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Total</th>
                                        <td>{`R$ ${totalCoffeesAndFrete}`}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button type="submit" onClick={handleSubmit}>Confirmar pedido</button>
                        </Checkout__TotalItens>
                    </CheckOut__Finalize>
                </AsideCheckout>
            </CheckOutDiv>
        </CheckOutContent>
    )
}