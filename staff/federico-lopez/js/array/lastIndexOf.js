function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--)
        if (array[i] === value)
            return i
    return -1
}