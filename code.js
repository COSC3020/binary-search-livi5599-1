function binarySearch(list, element) {
    var first = 0;
    var last = list.length - 1;

    while (first <= last) {
        var midpoint = Math.floor((first + last) / 2);
        if (list[midpoint] == element) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == element) {
                    return i;
                }
            }
        }
        else if (list[midpoint] < element) {
            first = midpoint + 1;
        }
        else {
            last = midpoint - 1;
        }
    }
    return -1;
}
