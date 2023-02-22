import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            meal: {},
        }
    },
    mutations: {
        addMeal (state, mealObj) {
            state.meal = mealObj;
        }
    }
})

export default store