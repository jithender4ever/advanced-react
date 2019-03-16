class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapToObject(rawData.data.articles),
            authors: this.mapToObject(rawData.data.authors)
        };
    }

    mapToObject(list) {
        return list.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    lookupAuthor = (authorId) => this.data.authors[authorId];

    getState = () => {
        return {
            articles: this.data.articles,
            authors: this.data.authors
        }
    }
}

export default StateApi;
