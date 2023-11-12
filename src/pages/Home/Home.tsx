import { AddOrRemove, CartAddOrRemove, Coffee, CoffeesDiv, HeaderContnet, MainContent, MainFeature, PriceAndQuantity, PriceSpan, Status, ThumbImg } from "./styles";
import coffeThumb from '../../assets/coffeThumb.png'
import cartWhite from '../../assets/cartWhite.svg'
import timerWhite from '../../assets/deliveryWhite.svg'
import coffeWhite from '../../assets/timerWhite.svg'
import deliveryWhite from '../../assets/coffeWhite.svg'
import coffee from '../../assets/coffee.png'
import plus from '../../assets/plusPurple.svg'
import menos from '../../assets/menosPurple.svg'


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
                                <Status statusColor="cart">
                                    <img src={cartWhite} alt="Cart icon" />
                                </Status>
                                Compra simples e segura
                            </li>
                            <li>
                                <Status statusColor="delivery">
                                    <img src={deliveryWhite} alt="" />
                                </Status>
                                Embalagem mantém o café intacto
                            </li>
                            <li>
                                <Status statusColor="timer">
                                    <img src={timerWhite} alt="" />
                                </Status>
                                Entrega rápida e rastreada
                            </li>
                            <li>
                                <Status statusColor="coffe">
                                    <img src={coffeWhite} alt="" />
                                </Status>
                                O café chega fresquinho até você
                            </li>
                        </ul>
                    </div>
                </div>
                <ThumbImg>
                    <img src={coffeThumb} alt="" />
                </ThumbImg>
            </HeaderContnet>
            <CoffeesDiv>
                <h2>Nossos cafés</h2>
                <Coffee>
                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>

                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>

                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>

                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>

                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>

                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>

                    <div>
                        <img src={coffee} alt="" />
                        <MainFeature>
                            <h5>Tradicional</h5>
                        </MainFeature>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                        <PriceAndQuantity>
                            <div><span>R$</span><PriceSpan>9,90</PriceSpan></div>
                            <AddOrRemove><img src={menos} alt="" />1<img src={plus} alt="" /></AddOrRemove>
                            <CartAddOrRemove>
                                <img src={cartWhite} alt="" />
                            </CartAddOrRemove>
                        </PriceAndQuantity>
                    </div>
                </Coffee>
            </CoffeesDiv>
        </MainContent>
    )
}