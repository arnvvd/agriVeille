'use strict';

import * as types from '../mutation-types';
import api from '../../core/api';


const actionsList = {

    setStories: (store) => {
        api.getStories()
            .then((stories) => {

            /*Fake timeout for animation*/    
            setTimeout(() => {
                store.commit(types.SET_DATAS_FETCHED);
                console.log("End fake fetch");
            }, 2000);

            store.commit(types.SET_STORIES, stories);

        })
        .catch((err) => console.log(err));
    }
};

export default actionsList;
