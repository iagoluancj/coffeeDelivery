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
    SpanValues,
    SpanTitles,
    Checkout__Itens,
    Alert,
    SpanInfoVerificationOptional,
    SpanInfoVerificationObrigatorio,
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

import cep from 'cep-promise'

interface CepAdressCompleted {
    city: string,
    neighborhood: string,
    state: string,
    street: string
}

export function CheckOut() {
    const [checkedMethod, setCheckedMethod] = useState<string | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [msg, setMsg] = useState('')

    const [validationCEP, setValidationCEP] = useState('')

    const [adress, setAdress] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        uf: '',
    });

    const { coffees, addCoffees, removeCoffees } = useCoffees()
    const formRef = useRef<HTMLFormElement | undefined>(undefined);

    // Funções de ação
    const handleCheckboxChange = (method: string) => {
        setCheckedMethod(method);
        setSelectedPaymentMethod(method);
    };

    const handleAddCoffees = (coffeeName: string) => {
        addCoffees({ id: coffeeName, quantity: 1 });
    };

    const handleRemoveCoffees = (coffeeName: string) => {
        removeCoffees(coffeeName, false);
    };

    const handleRemoveFromCheckout = (coffeeName: string) => {
        removeCoffees(coffeeName, true);
    };
    // fim funções de ação

    // TOTAL ITENS
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

    const frete = 2.5;
    const totalValue = calculateTotalValue();
    const totalCoffeesAndFrete = (parseFloat(totalValue) + frete).toFixed(2);
    // END TOTAL ITENS

    // SUBMIT
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValidationCEP('')
        const filledField = e.target.value;
        const fieldName = e.target.name.toUpperCase();

        if (filledField.length === 8) {
            cep(filledField)
                .then(function (dataCEPFind) {
                    setAdress({
                        rua: '',
                        bairro: '',
                        cidade: '',
                        uf: '',
                    });
                    handleDataAfterInputCEP(dataCEPFind);
                })
        }

        if (filledField.length < 8 || filledField.length > 8) {
            setValidationCEP(`${fieldName} inválido(a), preencha os campos corretamente.`)
        } else {
            setValidationCEP('')
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);

        const validationForm = () => {
            const isValid = formRef.current?.checkValidity();
            return isValid ?? false;
        }

        const removeAllItensCart = () => {
            coffees.forEach(coffee => {
                removeCoffees(coffee.id, true);
            });
        }

        if (validationForm() && (selectedPaymentMethod === 'debit' || selectedPaymentMethod === 'credit' || selectedPaymentMethod === 'cash')) {

            localStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData)));
            removeAllItensCart()

            window.location.href = '/coffeeDelivery/Delivery';
            setMsg('')
        } else {
            setMsg('Preencha e escolha todos os campos corretamente')
        }
    };
    /// END SUBMIT

    //FIND ADRESS FROM CEP
    const handleDataAfterInputCEP = (dataCEPFind: CepAdressCompleted) => {
        const { street, neighborhood, city, state } = dataCEPFind;

        setAdress((prevAdress) => ({
            ...prevAdress,
            rua: prevAdress.rua || street || '',
            bairro: prevAdress.bairro || neighborhood || '',
            cidade: prevAdress.cidade || city || '',
            uf: prevAdress.uf || state || '',
        }));
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setAdress((prevAdress) => ({
            ...prevAdress,
            [name]: value,
        }));
    };
    /// END
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
                                <Alert>{validationCEP}</Alert>
                                <SpanInfoVerificationObrigatorio><input type="number" placeholder="CEP" id="cep" name="cep" required onChange={handleInputChange} /></SpanInfoVerificationObrigatorio>
                                <SpanInfoVerificationObrigatorio>
                                    <input
                                        type="text"
                                        placeholder={'Rua'}
                                        id="rua"
                                        name="rua"
                                        value={!validationCEP ? adress.rua : ''}
                                        onChange={handleAddressChange}
                                    />
                                </SpanInfoVerificationObrigatorio>
                                <div>
                                    <SpanInfoVerificationObrigatorio>
                                        <input
                                            type="number"
                                            placeholder="Número"
                                            id="numero"
                                            name="numero"
                                            required
                                        />
                                    </SpanInfoVerificationObrigatorio>
                                    <SpanInfoVerificationOptional>
                                        <input
                                            type="text"
                                            placeholder="Complemento"
                                            id="complemento"
                                            name="complemento"
                                        />
                                    </SpanInfoVerificationOptional>
                                </div>
                                <div>
                                    <SpanInfoVerificationOptional>
                                        <input
                                            type="text"
                                            placeholder={'Bairro'}
                                            id="bairro"
                                            name="bairro"
                                            value={!validationCEP ? adress.bairro : ''}
                                            onChange={handleAddressChange}
                                        />
                                    </SpanInfoVerificationOptional>
                                    <input
                                        type="text"
                                        placeholder={'Cidade'}
                                        id="cidade"
                                        name="cidade"
                                        value={!validationCEP ? adress.cidade : ''}
                                        onChange={handleAddressChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder={'UF'}
                                        id="uf"
                                        name="uf"
                                        maxLength={2}
                                        value={!validationCEP ? adress.uf : ''}
                                        onChange={handleAddressChange}
                                    />
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
                        {!checkedMethod && <Alert>{msg}</Alert>}
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
                            <div>
                                <Checkout__Itens>
                                    <SpanTitles>Total de itens</SpanTitles>
                                    <SpanValues>{`R$ ${Number(totalValue).toFixed(2)}`}</SpanValues>
                                </Checkout__Itens>
                            </div>
                            <div>
                                <Checkout__Itens>
                                    <SpanTitles>Entrega</SpanTitles>
                                    <SpanValues>{`R$ ${Number(frete).toFixed(2)}`}</SpanValues>
                                </Checkout__Itens>
                            </div>
                            <div>
                                <Checkout__Itens>
                                    <span>Total</span>
                                    <span>{`R$ ${totalCoffeesAndFrete}`}</span>
                                </Checkout__Itens>
                            </div>

                            <button type="submit" onClick={handleSubmit}>Confirmar pedido</button>
                            <Alert>{msg}</Alert>

                        </Checkout__TotalItens>
                    </CheckOut__Finalize>
                </AsideCheckout>
            </CheckOutDiv>
        </CheckOutContent>
    )
}