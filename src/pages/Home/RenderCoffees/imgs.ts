import expressoTradicionalIMG from '../../../assets/cafeTradicional.svg'
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

// feito dessa forma apenas pois o import via JSON buga no GitHUB Pages. 
export const imagesCoffes:{[key: string]: string} = {
    'Expresso Tradicional': expressoTradicionalIMG,
    'Expresso Americano': expressoAmericano,
    'Expresso Cremoso': expressoCremoso,
    'Expresso Gelado': expressoGelado,
    'Cafe com Leite': cafeComLeite,
    'Latte': latte,
    'Capuccino': capuccino,
    'Macchiato': macchiato,
    'Mocaccino': mocaccino,
    'Chocolate Quente': chocolateQuente,
    'Cubano': cubano,
    'Havaiano': havaniano,
    'Árabe': arabe,
    'Irlandês': irlandes
} 