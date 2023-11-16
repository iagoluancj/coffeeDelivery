// import { useEffect } from 'react'
import Illustration from '../../assets/Illustration.svg'
import cash from '../../assets/cash.svg'
import timer from '../../assets/deliveryWhite.svg'
import whiteLocation from '../../assets/whiteLocation.svg'

import { DeliveryTimeAndOthers, DivNegrito, DivNegritoPayment, HeaderDelivery, ImgBG, InfosDelivery, MainDelivery, SpanNegrito, SpanUF } from './styles'

export function Delivery() {
    // useEffect(() => {
    //     // Recuperar os dados do localStorage
    //     const formData = JSON.parse(localStorage.getItem('formData') || '{}');

    //     // Use formData conforme necessário
    //     console.log(formData)

    //     // Limpar os dados do localStorage após utilização (opcional)
    //     localStorage.removeItem('formData');
    //   }, []);

    const { bairro, cidade, numero, paymentMethod, rua, uf } = JSON.parse(localStorage.getItem('formData') || '{}');

    const verifyMethod = (metohd: String) => {
        if (metohd === 'credit') {
            return 'Cartão de crédito'
        } else if (metohd === 'debit') {
            return 'Cartão de débito'
        } else {
            return 'Dinheiro'
        }
    }

        return (
            <div>
                <HeaderDelivery>
                    <h1>Uhu! Pedido confirmado</h1>
                    <span>Agora é só aguardar que logo o café chegará até você</span>
                </HeaderDelivery>
                <MainDelivery>
                    <InfosDelivery>
                        <DeliveryTimeAndOthers>
                            <ImgBG statusColor="location"><img src={whiteLocation} alt="" /></ImgBG>
                            <div>
                                Entrega em <SpanNegrito>{rua ? rua : 'Rua'}, {numero ? numero : '000'}</SpanNegrito>
                                <DivNegrito>{bairro ? bairro : 'Bairro'} - {cidade ? cidade : 'Cidade'}, <SpanUF>{uf ? uf : 'UF'}</SpanUF></DivNegrito>
                            </div>
                        </DeliveryTimeAndOthers>
                        <DeliveryTimeAndOthers>
                            <ImgBG statusColor="timer"><img src={timer} alt="" /></ImgBG>
                            <div>
                                Previsão de entrega
                                <DivNegrito>20min - 30min</DivNegrito>
                            </div>
                        </DeliveryTimeAndOthers>
                        <DeliveryTimeAndOthers>
                            <ImgBG statusColor="dinheiro"><img src={cash} alt="" /></ImgBG>
                            <div>
                                Pagamento na entrega
                                <DivNegritoPayment>{verifyMethod(paymentMethod)}</DivNegritoPayment>
                            </div>
                        </DeliveryTimeAndOthers>
                    </InfosDelivery>
                    <img src={Illustration} alt="" id="Illustration" />
                </MainDelivery>
            </div>
        )
    }