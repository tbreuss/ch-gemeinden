import m from "mithril";

let Entry = {
    list: [],
    reset() {
        Entry.list = []
    },
    search(plz4, ktkz, gdenr, gdenamk) {
        return m.request({
            method: "GET",
            url: WEB_URL + "search",
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
