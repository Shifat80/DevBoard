const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
        let currentIndex = 0;

        document.getElementById("theme-btn").addEventListener("click", function() {
            document.body.classList.remove(...colors);
            document.body.classList.add(colors[currentIndex]);
            currentIndex = (currentIndex + 1) % colors.length;
        });