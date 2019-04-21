import m from "mithril";

let data = {};

const SearchModel = {
    list: [],
    reset() {
        SearchModel.list = [];
    },
    search(plz4, ktkz, gdenr, gdenamk, only100, sort) {
        let params = {
            plz4: plz4,
            ktkz: ktkz,
            gdenr: gdenr,
            gdenamk: gdenamk,
            only100: only100 ? 1 : 0,
            sort: sort
        };
        return m.request({
            method: "GET",
            url: WEB_URL + "search",
            data: params
        }).then((result) => {
            data = params;
            SearchModel.list = result
        });
    },
    sort(field) {
        let params = data;
        params.sort = field;
        return m.request({
            method: "GET",
            url: WEB_URL + "search",
            data: params
        }).then((result) => {
            SearchModel.list = result
            data.sort = field;
        });
    }
};

export {SearchModel};
