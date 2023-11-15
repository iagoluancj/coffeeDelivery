import { AddOrRemove } from "./styles";
import plus from '../../assets/plusPurple.svg'
import menos from '../../assets/menosPurple.svg'

type AddOrRemoveButtonProps = {
  onAddCoffees?: () => void;
  onRemoveCoffees?: () => void;
  quantity: number;
};

export function AddOrRemoveButon({ onAddCoffees, onRemoveCoffees, quantity }: AddOrRemoveButtonProps) {

  return (
    <AddOrRemove>
      <img src={menos} alt="" onClick={() => onRemoveCoffees && onRemoveCoffees()} />
      <span>{quantity}</span>
      <img src={plus} alt="" onClick={() => onAddCoffees && onAddCoffees()} />
    </AddOrRemove>
  )
}