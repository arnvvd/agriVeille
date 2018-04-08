'use strict';

const gettersList = {
    getDatasFetched: state => state.datasFetched,
    getIsOnboarded: state => state.isOnboarded,
    getIsAnimated: state => state.isAnimated,
    getDigitalValue: state => state.digitalValue,
    getPercentValue: state => state.percentValue,
    getStories: state => state.stories,
    getCurrentStory: state => state.currentStory,
    getStoryBySlug: state => (slug) => {
        const story = state.stories.filter(story => story.slug == slug);
        if (story.length) {
            return story[0];
        }
    },
};

export default gettersList;
