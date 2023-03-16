let numbers = [12, 46, 53, 123, 520, 45, 63]
        document.getElementById("one").innerHTML = numbers;
        function myAlphabetically() {
            numbers.sort();
            document.getElementById("one").innerHTML = numbers;
        }
        function myNumbers() {
            numbers.sort(function (a, b) {
                return (a - b);
            })
            document.getElementById("one").innerHTML = numbers;
        };
        