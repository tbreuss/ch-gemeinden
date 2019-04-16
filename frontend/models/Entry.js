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
    search(plz4, ktkz, gdenr, gdenamk) {
        return m.request({
            method: "GET",
            url: WEB_URL + "plz",
            data: {
                plz4: plz4,
                ktkz: ktkz,
                gdenr: gdenr,
                gdenamk: gdenamk
            },
            headers: { }
        }).then((result) => {
            Entry.list = result
        });
    }
};

export default Entry;
