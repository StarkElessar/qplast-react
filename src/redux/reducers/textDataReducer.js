const initialState = {
  shippingList: [
    { id: 1, label: 'наличный расчет;' },
    { id: 2, label: 'безналичный расчет.' },
  ],
  calculationList: [
    { id: 1, label: 'самовывоз розничной или оптовой продукции со склада;' },
    { id: 2, label: 'возможна доставка оптовой продукции по всей Беларуси и странам Европейского союза.' },
  ],
}

const textDataReducer = (state = initialState) => state

export default textDataReducer