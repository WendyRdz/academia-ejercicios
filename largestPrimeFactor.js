var num = 600851475143,
    div = 2;

function LargestPrimeFactor() {
    var can_divide = false;
    var n = 2;
    if (div === 2) {
        div++;
    } else {
        div += 2;
    }
    while (n < div) {
        if (div % n === 0) {
            can_divide = true;
        }
        n++;
    }
    if (can_divide) {
        LargestPrimeFactor();
    }
}

while (num > 1) {
    if (num % div === 0) {
        num /= div;
    } else {
        LargestPrimeFactor();
    }
}
console.log(div);
