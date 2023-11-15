import { Coffee, CoffeesDiv, HeaderContnet, MainContent, Status, ThumbImg } from "./styles";
import coffeThumb from '../../assets/coffeThumb.png'

import cartWhite from '../../assets/cartWhite.svg'
import timerWhite from '../../assets/deliveryWhite.svg'
import coffeWhite from '../../assets/timerWhite.svg'
import deliveryWhite from '../../assets/coffeWhite.svg'

import { RenderCoffees } from "./RenderCoffees/RenderCoffees";

export function Home() {

    return (
        <MainContent>
            <HeaderContnet>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div>
                        <ul>
                            <li>
                                <Status statuscolor="cart">
                                    <img src={cartWhite} alt="Cart icon" />
                                </Status>
                                Compra simples e segura
                            </li>
                            <li>
                                <Status statuscolor="delivery">
                                    <img src={deliveryWhite} alt="" />
                                </Status>
                                Embalagem mantém o café intacto
                            </li>
                            <li>
                                <Status statuscolor="timer">
                                    <img src={timerWhite} alt="" />
                                </Status>
                                Entrega rápida e rastreada
                            </li>
                            <li>
                                <Status statuscolor="coffe">
                                    <img src={coffeWhite} alt="" />
                                </Status>
                                O café chega fresquinho até você
                            </li>
                        </ul>
                    </div>
                </div>
                <ThumbImg>
                    <img src={coffeThumb} alt="" id="coffeThumb" />
                </ThumbImg>
            </HeaderContnet>
            <CoffeesDiv>
                <h2>Nossos cafés</h2>
                <Coffee>
                    <RenderCoffees></RenderCoffees>
                </Coffee>
            </CoffeesDiv>
        </MainContent>
    )
}