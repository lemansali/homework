function object(arr) {
    let object = {};
    object[arr[0]] = arr[1];
    object[arr[2]] = arr[3];
    object[arr[4]] = arr[5];

    console.log(object);
}
object(['name', 'Pesho', 'age', '23', 'gender', 'male']);
object(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
