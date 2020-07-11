/**
 * 数据中俩对象交换
 * @param {数组} items
 * @param {左索引} leftIndex
 * @param {右索引} rightIndex
 */
function swap (items, leftIndex, rightIndex) {
    var temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp
}

/**
 * 分大小两部分
 * @param { 数组序列 } items
 * @param { 左侧 } left
 * @param { 右侧 } right
 */
function partition (items, left, right, key, desc) {
    var pivot = items[Math.floor((right + left) / 2)] // middle element
        var i = left // left pointer
        var j = right // right pointer
    while (i <= j) {
        if (!desc) {
            while (items[i][key] < pivot) {
                i++
            }
            while (items[j][key] > pivot) {
                j--
            }
        } else {
            while (items[i][key] > pivot) {
                i++
            }
            while (items[j][key] < pivot) {
                j--
            }
        }
        if (i <= j) {
            swap(items, i, j) // sawpping two elements
            i++
            j--
        }
    }
    return i
}

/**
 * 分大小两部分
 * @param { 数组序列 } items
 * @param { 左侧 } left
 * @param { 右侧 } right
 */
function partitionObject (items, left, right, key, desc) {
    var pivot = items[Math.floor((right + left) / 2)][key] // middle element
        var i = left // left pointer
        var j = right // right pointer
    while (i <= j) {
        if (!desc) {
            while (items[i][key] < pivot) {
                i++
            }
            while (items[j][key] > pivot) {
                j--
            }
        } else {
            while (items[i][key] > pivot) {
                i++
            }
            while (items[j][key] < pivot) {
                j--
            }
        }

        if (i <= j) {
            swap(items, i, j) // sawpping two elements
            i++
            j--
        }
    }
    return i
}

export function quickSort (items, { leftIndex, rightIndex, key, desc }) {
    var index
    if (items.length > 1) {
        const left = leftIndex || 0
        const right = rightIndex || items.length - 1

        index = key ? partitionObject(items, left, right, key, desc) : partition(items, left, right, key, desc) // index returned from partition
        if (left < index - 1) { // more elements on the left side of the pivot
            quickSort(items, { leftIndex: left, rightIndex: index - 1, key, desc })
        }
        if (index < right) { // more elements on the right side of the pivot
            quickSort(items, { leftIndex: index, rightIndex: right, key, desc })
        }
    }
    return items
}
