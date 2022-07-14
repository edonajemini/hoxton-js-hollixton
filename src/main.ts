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
 storeItems:[],
 byType: '',
 users: [],
 selectedItem: null,
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
