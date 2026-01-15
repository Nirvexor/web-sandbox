function white_background_color() {
            document.getElementById("main").style.backgroundColor="#fff";
        }
        function gray_background_color(){
            document.getElementById("main").style.backgroundColor="#808080";
        }
        function black_background_color(){
            document.getElementById("main").style.backgroundColor="#111";
        }

        
        document.getElementById("white-button-alternative").addEventListener("click", white_background_color_alternative);
        document.getElementById("gray-button-alternative").addEventListener("click", gray_background_color_alternative);
        document.getElementById("black-button-alternative").addEventListener("click", black_background_color_alternative);
        
        function white_background_color_alternative(){
            document.querySelector("body").style.backgroundColor="#fff";
        }
        function gray_background_color_alternative(){
            document.querySelector("body").style.backgroundColor="#808080";
        }
        function black_background_color_alternative(){
            document.querySelector("body").style.backgroundColor="#111";
        }

        // REFACTOR: Changed it to Arrow Function to avoid repeating code.
        // DRY Solution
        const whiteBtn = document.getElementById("white-button-alternative2");
        const grayBtn = document.getElementById("gray-button-alternative2");
        const blackBtn = document.getElementById("black-button-alternative2");

        // Universal Function
        function changeColor(colorName) {
            document.body.style.backgroundColor= colorName;
        }

        //Listeners
        whiteBtn.addEventListener("click", () => changeColor("#fff"));
        grayBtn.addEventListener("click", () => changeColor("#808080"));
        blackBtn.addEventListener("click", () => changeColor("#111"));