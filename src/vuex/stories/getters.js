'use strict';

const gettersList = {
    getDatasFetched: state => state.datasFetched,
    getStories: state => state.stories,
    getStoryBySlug: state => (slug) => {
        const story = state.stories.filter(story => story.slug == slug);
        if (story.length) {
            return story[0];
        }
    },
};

export default gettersList;
