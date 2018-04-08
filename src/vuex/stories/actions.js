'use strict';

import * as types from '../mutation-types';
import api from '../../core/api';


const actionsList = {

    setStories: (store) => {
        api.getStories().then((stories) => {
            /* Prepare slug */
            stories.map((item) => {
                const slug = item.title;
                item.slug = slugify(slug);
            })

            /*Fake timeout for animation*/    
            setTimeout(() => {
                store.commit(types.SET_DATAS_FETCHED);
                store.commit(types.SET_STORIES, stories);
                store.commit(types.SET_CURRENT_STORY, currentStory(stories, 1))
                console.log("End fake fetch");
            }, 2000);
        })
        .catch((err) => console.log(err));
    },

    setOnboarded: (store) => {
        store.commit(types.SET_ONBOARDED);
    }, 

    setDigitalValue: (store, value) => {
        const currentDigitalValue = store.state.digitalValue;
        const maxValue = store.state.stories.length;
        const newDigitaleValue = currentDigitalValue + value;
        const percent = (newDigitaleValue - 1) / maxValue;

        if (newDigitaleValue > 0 && newDigitaleValue < maxValue + 2) {

            // Save current value
            store.commit(types.SET_DIGITALVALUE, newDigitaleValue);

            // Save percent
            store.commit(types.SET_PERCENTEVALUE, percent);
            
            if (newDigitaleValue == maxValue + 1) {
                store.commit(types.SET_ENDED, true);
            } else {
                store.commit(types.SET_ENDED, false);
                store.commit(types.SET_ANIMATED, true);
                // Save current story (watch it for nikita)
                store.commit(types.SET_CURRENT_STORY, currentStory(store.state.stories, newDigitaleValue))
            } 

            // Delete just test for animation
            setTimeout(() => {
                store.commit(types.SET_ANIMATED, false);
            }, 1200)
        }
    }
};

export default actionsList;


function currentStory(storyArr, id) {
    const story = storyArr.filter(story => story.id == id);
    if (story.length) {
        return story[0];
    }
} 

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}