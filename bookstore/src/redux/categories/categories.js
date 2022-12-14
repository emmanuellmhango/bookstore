const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => {
  return {
    type: CHECK_STATUS
  }
};

export default function categoryReducer(categories = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return "Under construction";
    default:
      return categories;
  }
}
