import React from 'react';
import { CartAddOrRemove, CoffeeComponent, ImgCoffee, MainFeature, PriceAndQuantity, PriceSpan, RenderCoffee } from './style';
import coffeesJSON from '../../../assets/coffeesJSON.json';
import { AddOrRemoveButon } from '../../../components/AddOrRemoveButton/AddOrRemoveButton.tsx';
import remove from '../../../assets/remove.svg'
import { useCoffees } from '../../../Hooks/use-Coffees';

import expressoTradicional from '../../../assets/expressoAmericano.svg'
import expressoAmericano from '../../../assets/expressoAmericano.svg'
import expressoCremoso from '../../../assets/expressoCremoso.svg'
import expressoGelado from '../../../assets/expressoGelado.svg'
import cafeComLeite from '../../../assets/cafeComLeite.svg'
import latte from '../../../assets/latte.svg'
import capuccino from '../../../assets/capuccino.svg'
import macchiato from '../../../assets/macchiato.svg'
import mocaccino from '../../../assets/mocaccino.svg'
import chocolateQuente from '../../../assets/chocolateQuente.svg'
import cubano from '../../../assets/cubano.svg'
import havaniano from '../../../assets/ExpressoCremoso.svg'
import arabe from '../../../assets/arabe.svg'
import irlandes from '../../../assets/irlandes.svg'


const imagesCoffes = {
    expressoTradicional,
    expressoAmericano,
    expressoCremoso,
    expressoGelado,
    cafeComLeite,
    latte,
    capuccino,
    macchiato,
    mocaccino,
    chocolateQuente,
    cubano,
    havaniano,
    arabe,
    irlandes
}

export type Coffee = {
    type: string | string[];
    name: string;
    describe: string;
    img: string;
    price: string;
};

export type CoffeesCompoProps = {
    coffee: Coffee;
    quantity: number;
    onAddCoffees?: () => void;
    onRemoveCoffees: () => void;
    onRemoveAllQuantityCoffe: () => void;
};

const CoffeesCompo: React.FC<CoffeesCompoProps> = ({ coffee, quantity, onAddCoffees, onRemoveCoffees, onRemoveAllQuantityCoffe }) => {
    const renderTypes = () => {
        if (Array.isArray(coffee.type)) {
            return coffee.type.map((type, index) => (
                <h5 key={index}>{type}</h5>
            ));
        } else {
            return <h5>{coffee.type}</h5>;
        }
    };

    return (
        <CoffeeComponent key={coffee.name}>
            <ImgCoffee src={coffee.img} alt="" />
             <ImgCoffee src={imagesCoffes.expressoAmericano} alt="" /> {/*//Criar regra regex aqui para que converta o coffe.name para camelCase e depois disso compare-o aos nomes das variaveis e defina conforme.git*/}
            <MainFeature>{renderTypes()}</MainFeature>
            <h3>{coffee.name}</h3>
            <p>{coffee.describe}</p>
            <PriceAndQuantity>
                <div>
                    <span>R$</span>
                    <PriceSpan>{coffee.price}</PriceSpan>
                </div>
                <AddOrRemoveButon onAddCoffees={onAddCoffees} onRemoveCoffees={onRemoveCoffees} quantity={quantity} />
                <CartAddOrRemove>
                    <img src={remove} alt="" onClick={() => onRemoveAllQuantityCoffe()} />
                </CartAddOrRemove>
            </PriceAndQuantity>
        </CoffeeComponent>
    );
};

export function RenderCoffees() {
    const { coffees, addCoffees, removeCoffees } = useCoffees();

    const handleAddCoffees = (coffeeName: string) => {
        addCoffees({ id: coffeeName, quantity: 1 });
    };

    const handleRemoveCoffees = (coffeeName: string) => {
        removeCoffees(coffeeName, false);
    };

    const handleRemoveFromRender = (coffeeName: string) => {
        removeCoffees(coffeeName, true);
    };

    const sortedCoffees = [...coffeesJSON].sort((a, b) => {
        const quantityA = coffees.find((c) => c.id === a.name)?.quantity || 0;
        const quantityB = coffees.find((c) => c.id === b.name)?.quantity || 0;
        return quantityB - quantityA;
    });

    return (
        <RenderCoffee>
            {sortedCoffees.map((coffee, index) => {
                const coffeeQuantity = coffees.find((c) => c.id === coffee.name)?.quantity || 0;

                return (
                    <CoffeesCompo
                        key={index}
                        coffee={coffee}
                        quantity={coffeeQuantity}
                        onAddCoffees={() => handleAddCoffees(coffee.name)}
                        onRemoveCoffees={() => handleRemoveCoffees(coffee.name)}
                        onRemoveAllQuantityCoffe={() => handleRemoveFromRender(coffee.name)}
                    />
                );
            })}
        </RenderCoffee>
    );
}
