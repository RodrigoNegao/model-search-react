const Types = {
  SET_ITEMS: 'items/SET_ITEMS',
  SET_ITEM: 'items/SET_ITEM',
};
const initialState = {
  items: [],
  itemSelected: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_ITEMS:
      return { ...state, items: action.payload };
    case Types.SET_ITEM:
      return { ...state, itemSelected: action.payload };
    default:
      return state;
  }
}

function setItems(items) {
  return {
    type: Types.SET_ITEMS,
    payload: items,
  };
}

function setItem(item) {
  return {
    type: Types.SET_ITEM,
    payload: item,
  };
}

export { Types, reducer, setItems, setItem };
