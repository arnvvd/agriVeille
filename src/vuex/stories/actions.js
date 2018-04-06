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

        if (newDigitaleValue > 0 && newDigitaleValue < maxValue + 1) {
            store.commit(types.SET_DIGITALVALUE, newDigitaleValue);
        }
    }
};

export default actionsList;


function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}