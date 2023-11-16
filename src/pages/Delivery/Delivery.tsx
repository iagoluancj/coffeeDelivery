// import { useEffect } from 'react'
import Illustration from '../../assets/Illustration.svg'
import cash from '../../assets/cash.svg'
import timer from '../../assets/deliveryWhite.svg'
import whiteLocation from '../../assets/whiteLocation.svg'

import { DeliveryTimeAndOthers, DivNegrito, HeaderDelivery, ImgBG, InfosDelivery, MainDelivery, SpanNegrito } from './styles'

export function Delivery() {
    // useEffect(() => {
    //     // Recuperar os dados do localStorage
    //     const formData = JSON.parse(localStorage.getItem('formData') || '{}');
        
    //     // Use formData conforme necessário
    //     console.log(formData)

    //     // Limpar os dados do localStorage após utilização (opcional)
    //     localStorage.removeItem('formData');
    //   }, []);
      
      const formData = JSON.parse(localStorage.getItem('formData') || '{}');
      console.log(formData)


      return (
        <div>
            <HeaderDelivery>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </HeaderDelivery>
            <MainDelivery>
                <InfosDelivery>
                    <DeliveryTimeAndOthers>
                        <ImgBG statusColor="location"><img src={whiteLocation}  alt="" /></ImgBG>
                        <div>
                            Entrega em <SpanNegrito>Rua João Daniel, 102</SpanNegrito>
                            <DivNegrito>Farrapos - Porto Alegre, RS</DivNegrito>
                        </div>
                    </DeliveryTimeAndOthers>
                    <DeliveryTimeAndOthers>
                        <ImgBG statusColor="timer"><img src={timer}  alt="" /></ImgBG>
                        <div>
                            Previsão de entrega
                            <DivNegrito>20min - 30min</DivNegrito>
                        </div>
                    </DeliveryTimeAndOthers>
                    <DeliveryTimeAndOthers>
                        <ImgBG statusColor="dinheiro"><img src={cash}  alt="" /></ImgBG>
                        <div>
                            Pagamento na entrega
                            <DivNegrito>Cartão de Crédito</DivNegrito>
                        </div>
                    </DeliveryTimeAndOthers>
                </InfosDelivery>
                <img src={Illustration} alt="" id="Illustration"/>
            </MainDelivery>
        </div>
    )
}