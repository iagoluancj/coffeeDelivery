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
    removeCoffees: (coffeeId: string, removeAllInstances: boolean) => void; 
}

export const CoffeesContext = createContext<CoffeesContextType>({
    coffees: [],
    addCoffees: () => null,
    removeCoffees: () => null,
});

export const CoffeesProvider = ({ children }: CoffeeProviderProps) => {
    const initialCoffees = JSON.parse(localStorage.getItem('coffees') || '[]');

    const [coffees, setCoffees] = useState<CoffeeWithQuantity[]>(initialCoffees || []);

    const addCoffees = (coffee: Coffee) => {
        const existingCoffee = coffees.find((c) => c.id === coffee.id);

        if (existingCoffee) {
            const updatedCoffees = coffees.map((c) =>
                c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c
            );
            setCoffees(updatedCoffees);
            localStorage.setItem('coffees', JSON.stringify(updatedCoffees));
        } else {
            const newCoffees = [...coffees, { ...coffee, quantity: 1 }];
            setCoffees(newCoffees);
            localStorage.setItem('coffees', JSON.stringify(newCoffees));
        }
    };

    const removeCoffees = (coffeeId: string, removeAllInstances: boolean = false) => {
        let updatedCoffees;

        if (removeAllInstances) {
            updatedCoffees = coffees.filter((coffee) => coffee.id !== coffeeId);
        } else {
            updatedCoffees = coffees.map((coffee) =>
                coffee.id === coffeeId ? { ...coffee, quantity: coffee.quantity - 1 } : coffee
            );
        }
        const filteredCoffees = updatedCoffees.filter((coffee) => coffee.quantity > 0);
        setCoffees(filteredCoffees);
        localStorage.setItem('coffees', JSON.stringify(filteredCoffees));
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