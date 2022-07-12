import './style.css'

type StoreItem = {
    id: number,
    type: string,
    name: string,
    image: string,
    price: number,
    discountedPrice?: number,
    dateEntered: string,
    stock: number
}

type User = {
    firstName: string,
    lastName: string,
    id: string,
    password: string | number,
    bag: []
  }

type State = {
    storeItems: StoreItem[]
    byType: string;
    users: User[]
}

const state: State = {
    storeItems: [],
    byType: '',
    users: [],
}


