const api = {
    /* GET STORIES*/
    getStories: function () {
        return new Promise((resolve, reject) => {
            const response = require("../datas/data.json");
            resolve(response.stories);
        });
    }
};

export default api