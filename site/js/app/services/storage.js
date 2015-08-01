APP.factory("Storage", function() {
    var db = window.localStorage;
    try {
        db.testKey = "1";
        delete db.testKey;
        return db;
    } catch (error) {
        return {};
    }
});