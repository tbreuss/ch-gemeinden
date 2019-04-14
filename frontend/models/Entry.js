import m from "mithril";

let Entry = {
    list: [],
    loadList() {
        return m.request({
            method: "GET",
            url: WEB_URL + "/adminpanel/test"
        }).then((result) => {
            Entry.list = result
        })
    },
    search(plz) {
        return m.request({
            method: "GET",
            url: WEB_URL + "plz/" + plz,
            data: { },
            headers: { }
        }).then((result) => {
            Entry.list = result
        });
    }
};

export default Entry;
