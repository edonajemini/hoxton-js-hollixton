import './style.css'

type StoreItem = {
  id: number
  title: string
  price: number
  image: string
  discountedPrice?: number
}

type State = {
  store: StoreItem[]
  page: 'Hollixton' | 'guys' | 'girls' | 'sale'
  modal: 'search' | 'bag' | 'profile'|''
  filter: string
  visitorCount: number
}

let state: State = {
  store: [
    { 
      id: 1,
      title: 'Shorts',
      price: 3.2,
      discountedPrice: 1,
      image:
        'https://cdn.shopify.com/s/files/1/1594/4353/products/Spring22-Mens-Session-Shorts-5inch-Denim.png?v=1646758994?q=50&auto=format&dpr=1&w=800&h=450&fit=crop'
    },
    {
      id: 2,
      title: 'Jeans',
      price: 19.99,
      image:
        'https://media.gq-magazine.co.uk/photos/604a389378d908f40e6180ae/master/w_1920,h_1280,c_limit/Jeans_0006_Polo%20raplh%20lauren.jpg'
    },
    {
      id: 3,
      title: 'TV',
      price: 2000.2,
      discountedPrice: 8,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/uk/ue32t5300ckxxu/gallery/uk-fullhdtv-t5300-323348-ue32t5300ckxxu-421643304?$650_519_PNG$'
    },
    {
      id: 4,
      title: 'Radio',
      price: 100.2,
      discountedPrice: 40.5,
      image:
        'https://www.sony.co.uk/image/fc032c6f94c98631d6021a89dc17bfd7?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320'
    }
  ],
  page: 'Hollixton',
  modal: '',
  filter: 'short',
  visitorCount: 1123
}

function renderHeader (appEl: Element) {
  let headerEl = document.createElement('header')
  let headerH1 = document.createElement('h1')
  headerH1.textContent = 'Hollixton'
 

  let guysLink = document.createElement('a')
  guysLink.textContent = 'Guys'
  guysLink.addEventListener('click', function () {
    state.page = 'guys'
    render()
  })

  let girlsLink = document.createElement('a')
  girlsLink.textContent = 'Girls'
  girlsLink.addEventListener('click', function () {
    state.page = 'girls'
    render()
  })

  let saleLink = document.createElement('a')
  saleLink.textContent = 'Sale'
  saleLink.addEventListener('click', function () {
    state.page = 'sale'
    render()
  })

  let searchModalButton = document.createElement('button')
  searchModalButton.textContent = '🔍'
  searchModalButton.addEventListener('click', function () {
    state.modal = 'search'
    render()
  })

  let profileModalButton = document.createElement('button')
  profileModalButton.textContent = '👤'
  profileModalButton.addEventListener('click', function () {
    state.modal = 'profile'
    render()
  })

  let bagModalButton = document.createElement('button')
  bagModalButton.textContent = '👜'
  bagModalButton.addEventListener('click', function () {
    state.modal = 'bag'
    render()
  })

  headerEl.append(
    headerH1,
    guysLink,
    girlsLink,
    saleLink,
    searchModalButton,
    profileModalButton,
    bagModalButton,
  )
  appEl.append(headerEl)
}

function renderHomePage (appEl: Element) {
  let HomePage = document.createElement('h3')
  HomePage.textContent = 'Home'
  let mainEl = document.createElement('main')

  let storeListUl = document.createElement('ul')
  storeListUl.className = 'store-list'

  for (let item of state.store) {
    let storeItemLi = document.createElement('li')
    storeItemLi.className = 'store-item'

    let titleEl = document.createElement('h3')
    titleEl.textContent = item.title

    let priceEl = document.createElement('p')
    priceEl.textContent = `£${item.price.toFixed(2)}`

    let imageEl = document.createElement('img')
    imageEl.src = item.image

    storeItemLi.append (titleEl, priceEl, imageEl)
    storeListUl.append(storeItemLi)
  }

  mainEl.append(HomePage, storeListUl)
  appEl.append(mainEl)
}

function renderGirlsPage (appEl: Element) {
  let mainEl = document.createElement('main')

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Girls'

  mainEl.append(titleEl)
  appEl.append(mainEl)
}

function renderGuysPage (appEl: Element) {
  let mainEl = document.createElement('main')

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Guys'

  mainEl.append(titleEl)
  appEl.append(mainEl)
}

function renderSalePage (appEl: Element) {
  let mainEl = document.createElement('main')

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Sale'

  mainEl.append(titleEl)
  appEl.append(mainEl)
}

function renderSearchModal (appEl: Element) {
  let wrapperEl = document.createElement('div')
  wrapperEl.className = 'modal-wrapper'

  let containerEl = document.createElement('div')
  containerEl.className = 'modal-container'

  let closeButton = document.createElement('button')
  closeButton.textContent = 'X'
  closeButton.className = 'modal-close-button'
  closeButton.addEventListener('click', function () {
    state.modal = ''
    render()
  })

  let titleEl = document.createElement('h2')
  titleEl.textContent = 'Search'

  let formEl = document.createElement('form')
  formEl.addEventListener('submit', function (event) {
    event.preventDefault()

    state.filter = inputEl.value
    state.modal = ''
    render()
  })

  let inputEl = document.createElement('input')
  formEl.append(inputEl)

  containerEl.append(closeButton, titleEl, formEl)
  wrapperEl.append(containerEl)
  appEl.append(wrapperEl)
}

function renderProfileModal (appEl: Element) {
  let wrapperEl = document.createElement('div')
  wrapperEl.className = 'modal-wrapper'

  let containerEl = document.createElement('div')
  containerEl.className = 'modal-container'

  let closeButton = document.createElement('button')
  closeButton.textContent = 'X'
  closeButton.className = 'modal-close-button'
  closeButton.addEventListener('click', function () {
    state.modal = ''
    render()
  })

  let titleEl = document.createElement('h2')
  titleEl.textContent = 'Register'

  let formEl = document.createElement('form')
  formEl.addEventListener('register', function (event) {
    event.preventDefault()

    state.filter = inputEl.value
    state.modal = ''
    
    render()
  })
  
  let name = document.createElement('a')
  name.textContent = 'Your Name:'
  let inputEl = document.createElement('input')
  formEl.append(inputEl)
  


  containerEl.append(closeButton, titleEl, name, formEl,)
  wrapperEl.append(containerEl)
  appEl.append(wrapperEl)
}
function renderBagModal (appEl: Element) {
  let wrapperEl = document.createElement('div')
  wrapperEl.className = 'modal-wrapper'

  let containerEl = document.createElement('div')
  containerEl.className = 'modal-container'

  let closeButton = document.createElement('button')
  closeButton.textContent = 'X'
  closeButton.className = 'modal-close-button'
  closeButton.addEventListener('click', function () {
    state.modal = ''
    render()
  })

  let ItemBag = document.createElement('h2')
  ItemBag.textContent = 'Your Item Bag:'

  let Items = document.createElement('img')
  Items.textContent = '$storeListUl'
  let ItemList = document.createElement('a')
  ItemList.textContent = 'Your Item Bag:'
  
  containerEl.append(closeButton, ItemBag, Items,)
  wrapperEl.append(containerEl)
  appEl.append(wrapperEl)
}
function render () {
  let appEl = document.querySelector<HTMLElement>('#app')
  if (appEl === null) return
  appEl.textContent = ''

  renderHeader(appEl)

  if (state.page === 'Hollixton') renderHomePage(appEl)
  if (state.page === 'guys') renderGuysPage(appEl)
  if (state.page === 'girls') renderGirlsPage(appEl)
  if (state.page === 'sale') renderSalePage(appEl)

  if (state.modal === 'search') renderSearchModal(appEl)
  if (state.modal === 'profile') renderProfileModal(appEl)
  if (state.modal === 'bag') renderBagModal(appEl)
}

render()

window.state = state
window.render = render
