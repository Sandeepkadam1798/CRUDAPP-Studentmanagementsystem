function reducer(state, action) {
    switch (action.type) {
      case "SET_COUNTRY":
          return{
            ...state,
            country:action.country}
            default:
                return state;
            }
        }


        export default reducer;
       