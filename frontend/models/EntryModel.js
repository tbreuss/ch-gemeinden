import m from "mithril";

let data = {};

const EntryModel = {
    list: [],
    reset() {
        EntryModel.list = [];
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
            EntryModel.list = result
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
            EntryModel.list = result
            data.sort = field;
        });
    }
};

export { EntryModel };
