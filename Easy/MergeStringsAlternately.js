/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var str = [];
    var length1 = word1.length;
    var length2 = word2.length;
    var p1 = 0;
    var p2 = 0;
    while(p1 < length1 && p2 < length2) {
        str += word1[p1] + word2[p2];
        p1++;
        p2++;
    }
    
    while(p1 < length1) {
        str += word1[p1];
        p1++;
    }

    while(p2 < length2) {
        str += word2[p2];
        p2++;
    }
    
    return str;
};