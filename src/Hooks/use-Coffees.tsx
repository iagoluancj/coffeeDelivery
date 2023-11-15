import { createContext, useState, useContext } from "react";

type Coffee = {
    id: string;
    quantity: number; 

}

type CoffeeWithQuantity = Coffee & { quantity: number };

type CoffeeProviderProps = {
    children: React.ReactNode
}

type CoffeesContextType = {
    coffees: Coffee[]
    addCoffees: (coffee: Coffee) => void
    removeCoffees: (coffeeId: string) => void;
}

export const CoffeesContext = createContext<CoffeesContextType>({
    coffees: [],
    addCoffees: () => null,
    removeCoffees: () => null,
});

export const CoffeesProvider = ({ children }: CoffeeProviderProps) => {
    const [coffees, setCoffees] = useState<CoffeeWithQuantity[]>([])

    const addCoffees = (coffee: Coffee) => {
        const existingCoffee = coffees.find((c) => c.id === coffee.id);

        if (existingCoffee) {
            const updatedCoffees = coffees.map((c) =>
                c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c
            );
            setCoffees(updatedCoffees);
        } else {
            // Se o café ainda não estiver na lista, adiciona com quantidade 1
            setCoffees((prevCoffees) => [...prevCoffees, { ...coffee, quantity: 1 }]);
        }    };

    const removeCoffees = (coffeeId: string) => {
        const updatedCoffees = coffees.map((coffee) =>
            coffee.id === coffeeId ? { ...coffee, quantity: coffee.quantity - 1 } : coffee
        );
        // Filtra os cafés com quantidade maior que zero
        const filteredCoffees = updatedCoffees.filter((coffee) => coffee.quantity > 0);
        setCoffees(filteredCoffees);
    };

    return (
        <CoffeesContext.Provider value={{ coffees, addCoffees, removeCoffees }}>
            {children}
        </CoffeesContext.Provider>
    )
}

export const useCoffees = () => {
    const context = useContext(CoffeesContext)

    if (context === undefined) {
        throw new Error('Use coffees must be provided within coffees provider')
    }

    return context
}