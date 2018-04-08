/* Import Mutation Types */
import * as types from '../mutation-types';

/* Import Getters */
import gettersList from './getters';

/* Import Actions */
import actionList from './actions';


/* State */
const state = {
    datasFetched: false,
    isOnboarded: false,
    isAnimated: false,
    digitalValue: 1,
    stories: [],
    currentStory: {}
};


/* Mutations */
// Functions to mute our state
const mutations = {

    [ types.SET_STORIES ] (state, stories) {
        state.stories = stories;
    },

    [ types.SET_DATAS_FETCHED ] (state) {
        state.datasFetched = true;
    },

    [ types.SET_ONBOARDED ] (state) {
        state.isOnboarded = true;
    },

    [ types.SET_DIGITALVALUE ] (state, value) {
        state.digitalValue = value;
    },

    [ types.SET_ANIMATED] (state, value) {
        state.isAnimated = value;
    },

    [ types.SET_CURRENT_STORY] (state, value) {
        state.currentStory = value;
    }
};

/* Getters */
const getters = gettersList;

/* Actions */
// Functions to launch mutations
const actions = actionList;


/* Export */
export default {
    state,
    mutations,
    getters,
    actions
};
