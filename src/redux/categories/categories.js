const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialData = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default function categoryReducer(state = initialData, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
