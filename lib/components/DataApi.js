class DataApi {
    constructor(rawData) {
        this.rawData = rawData;
    }

    mapToObject(list) {
        return list.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    getArticles() {
        console.log('rawData:', this.rawData);
        return this.mapToObject(this.rawData.data.articles);
    }

    getAuthors() {
        return this.mapToObject(this.rawData.data.authors);
    }
}

export default DataApi;
