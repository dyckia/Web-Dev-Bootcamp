function isUniform(ar) {
    var value = ar[0];
    ar.forEach(function(item) {
        if (value !== item) {
            return false;
        }
    });
    return true;
}

function isUniform(ar) {
    var value = ar[0];
    var flag = true;;
    ar.forEach(function(item) {
        if (value !== item) {
            flag = false;
        }
    });
    return flag;
}

// it only returns back one layer