import { NavContainer, NavItens_Andress, NavItens_Cart, NavSeparator, TotalQuantityDiv} from "./styles";
import logoCoffeDelivery from '../../assets/logoCoffeeDelivery.svg'
import locationNav from '../../assets/locationNav.svg'
import cartNav from '../../assets/cartNav.svg'
import home from '../../assets/home.svg'

import { useEffect, useState } from "react";
import { useCoffees } from "../../Hooks/use-Coffees";

interface NominatimResult {
    address: {
        city?: string;
    };
}

export function NavBar() {
    const [atualLocation, setAtualLocation] = useState('Carregando...');

    const { coffees } = useCoffees();
    const totalQuantity = coffees.reduce((total, coffee) => total + coffee.quantity, 0);

    
    // o código abaixo deve ser inserido no contexto quando o mesmo for criado.
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => getLocation(latitude, longitude),
            (error) => console.error('Error getting geolocation:', error.message)
        );
    }, []);

    const getLocation = async (latitude: number, longitude: number) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            if (!response.ok) throw new Error(`Error fetching location data: ${response.statusText}`);
            const data = await response.json();
            setAtualLocation(extractCityFromNominatimResult(data));
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    const extractCityFromNominatimResult = (nominatimResult: NominatimResult) => nominatimResult.address.city || 'Carregando..., DF';
    // até aq. ^^^^
    return (
        <NavContainer>
            <NavSeparator>
                <img src={logoCoffeDelivery} alt="" />
            </NavSeparator>
            <NavSeparator>
                <NavItens_Andress>
                    <div>
                        <img src={locationNav} alt="" />
                        {atualLocation ? atualLocation : 'Carregando..., DF'}
                    </div>
                </NavItens_Andress>
                <NavItens_Cart><a href="/"><img src={home} alt="" /></a></NavItens_Cart>
                <NavItens_Cart><a href="/CheckOut">
                    <TotalQuantityDiv>{totalQuantity}</TotalQuantityDiv>
                    <img src={cartNav} alt="" /></a>
                </NavItens_Cart>
            </NavSeparator>
        </NavContainer>
    )
}