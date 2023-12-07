export const initialState = [
  {
    id: 0,
    title: 'Javascript',
    Author: 'David Flanagan',
    Isbn: '9789123123231',
    Publish_Date: '2015-10-14',
  },
  {
    id: 1,
    title: 'ReactJs',
    Author: 'Robin Wieruch',
    Isbn: '2345453123231',
    Publish_Date: '2010-02-20',
  },
];

export const bookReducer = (state, action) => {
  if (action.type === 'createBook') {
    return [...state, action.payLoad];
  } else if (action.type === 'deleteBook') {
    let updatedState = state.filter((filterData) => {
      if (filterData.id !== action.payLoad.id) {
        return filterData;
      }
    });
    state = updatedState;
    return state;
  } else if (action.type === 'editBook') {
    let value = state.map((element) => {
      if (element.id === action.payLoad.id) {
        element = action.payLoad;
        return element;
      } else {
        return element;
      }
    });
    state = value;
    return state;
  }
};

//Author
export const authorInitialState = [
  {
    id: 0,
    author: 'David Flanagan',
    dob: '1965-02-20',
    bio: 'He Is a Great Writer',
  },
  {
    id: 1,
    author: 'Robin Wieruch',
    dob: '1958-12-10',
    bio: 'He Written ReactJs Book',
  },
];

export const authorReducer = (state, action) => {
  if (action.type === 'createAuthor') {
    return [...state, action.payLoad];
  } else if (action.type === 'deleteAuthor') {
    let updatedState = state.filter((filterData) => {
      if (filterData.id !== action.payLoad.id) {
        return filterData;
      }
    });
    state = updatedState;
    return state;
  } else if (action.type === 'editAuthor') {
    let value = state.map((element) => {
      if (element.id === action.payLoad.id) {
        element = action.payLoad;
        return element;
      } else {
        return element;
      }
    });
    state = value;
    return state;
  }
};
