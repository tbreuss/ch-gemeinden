import m from "mithril";

const defaults = {
    plz4: "",
    ktkz: "",
    gdenr: "",
    gdenamk: "",
    only100: 0,
    sort: "plz4"
};
let list = [];
let wasSearched = false;

const SearchModel = {
    params: Object.assign({}, defaults),
    reset() {
        list = [];
        SearchModel.params = Object.assign({}, defaults);
        wasSearched = false;
    },
    search() {
        return m.request({
            method: "GET",
            url: WEB_URL + "search",
            data: SearchModel.params
        }).then((result) => {
            list = result;
            wasSearched = true;
        });
    },
    getList() {
        return list;
    },
    getCount() {
        return list.length;
    },
    wasSearched() {
        return wasSearched;
    }
};

export {SearchModel};
