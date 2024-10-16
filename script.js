document.getElementById("continue-btn").addEventListener("click", startQuiz);

let boyfriendName = ""; // To store the boyfriend's name

function startQuiz() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Who is your boyfriend?</p>
            <input type="text" id="boyfriend" placeholder="Type his name">
            <button class="btn" onclick="submitBoyfriend()">Submit</button>
        </div>
    `;
}

function submitBoyfriend() {
    const input = document.getElementById("boyfriend").value.trim();
    if (input !== "") {
        boyfriendName = input;
        const content = document.getElementById("content");
        content.innerHTML = `
            <div class="pop-up">
                <p>Aww, me that, I didn't even know that it was ${boyfriendName}!</p>
                <p>Would you like to move on to the next question?</p>
                <button class="btn" onclick="nextQuestion()">Ok</button>
            </div>
        `;
    }
}

function nextQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What do you love about ${boyfriendName}?</p>
            <input type="text" id="love-answer" placeholder="Type what you love">
            <button class="btn" onclick="submitLove()">Submit</button>
        </div>
    `;
}

function submitLove() {
    const answer = document.getElementById("love-answer").value.toLowerCase();
    let response = '';

    if (answer.includes("smile") || answer.includes("weird") || answer.includes("cute") || answer.includes("funny") || answer.includes("happy") || answer.includes("vibe")) {
        response = "Aww, you are making me blush, stop it.";
    } else {
        response = "That's so sweet!";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextHateQuestion()">Next</button>
        </div>
    `;
}

function nextHateQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What are the things your boyfriend does that you hate the most? (If nothing, type 'nothing')</p>
            <input type="text" id="hate-answer" placeholder="Type your answer">
            <button class="btn" onclick="submitHate()">Submit</button>
        </div>
    `;
}

function submitHate() {
    const answer = document.getElementById("hate-answer").value.trim().toLowerCase();
    let response = '';

    if (answer === "nothing") {
        response = "Oh, thank God I'm trying my best sha.";
    } else {
        response = "Oh, I didn't know that it was like that. I will try my best to change.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextHappyQuestion()">Next</button>
        </div>
    `;
}

function nextHappyQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Do you know that you make ${boyfriendName} happy a lot?</p>
            <input type="radio" id="yes" name="happy" value="yes"> <label for="yes">Yes</label>
            <input type="radio" id="no" name="happy" value="no"> <label for="no">No</label>
            <button class="btn" onclick="submitHappy()">Submit</button>
        </div>
    `;
}

function submitHappy() {
    const yesChecked = document.getElementById("yes").checked;
    let response = '';

    if (yesChecked) {
        response = "Yayyy, it's good that you know!";
    } else {
        response = "Well, if you don't know, you do. You make me happy a whole lot.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextMarryQuestion()">Next</button>
        </div>
    `;
}

function nextMarryQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Would you marry me? 🥺</p>
            <input type="radio" id="marry-yes" name="marry" value="yes"> <label for="marry-yes">Yes</label>
            <input type="radio" id="marry-no" name="marry" value="no"> <label for="marry-no">No</label>
            <button class="btn" onclick="submitMarry()">Submit</button>
        </div>
    `;
}

function submitMarry() {
    const yesChecked = document.getElementById("marry-yes").checked;
    let response = '';

    if (yesChecked) {
        response = "Yayyy!";
    } else {
        response = "Awww 🤕";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextFinalQuestion()">Next</button>
        </div>
    `;
}

function nextFinalQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Do you like me?</p>
            <input type="radio" id="like-yes" name="like" value="yes"> <label for="like-yes">Yes, I like you</label>
            <input type="radio" id="love" name="like" value="love"> <label for="love">No, I don't like you, I love you</label>
            <button class="btn" onclick="submitFinal()">Submit</button>
        </div>
    `;
}

function submitFinal() {
    const loveChecked = document.getElementById("love").checked;
    let response = '';

    if (loveChecked) {
        response = "Awwwww, I love you too!";
    } else {
        response = "Okay, cool.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <p>Thank you for filling this quiz I really appreciate it ml</p>
            <button class="btn" onclick="showSurprise()">You're welcome</button>
        </div>
    `;
}

function showSurprise() {
    const content = document.getElementById
document.getElementById("continue-btn").addEventListener("click", startQuiz);

let boyfriendName = ""; // To store the boyfriend's name

function startQuiz() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Who is your boyfriend?</p>
            <input type="text" id="boyfriend" placeholder="Type his name">
            <button class="btn" onclick="submitBoyfriend()">Submit</button>
        </div>
    `;
}

function submitBoyfriend() {
    const input = document.getElementById("boyfriend").value.trim();
    if (input !== "") {
        boyfriendName = input;
        const content = document.getElementById("content");
        content.innerHTML = `
            <div class="pop-up">
                <p>Aww, me that, I didn't even know that it was ${boyfriendName}!</p>
                <p>Would you like to move on to the next question?</p>
                <button class="btn" onclick="nextQuestion()">Ok</button>
            </div>
        `;
    }
}

function nextQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What do you love about ${boyfriendName}?</p>
            <input type="text" id="love-answer" placeholder="Type what you love">
            <button class="btn" onclick="submitLove()">Submit</button>
        </div>
    `;
}

function submitLove() {
    const answer = document.getElementById("love-answer").value.toLowerCase();
    let response = '';

    if (answer.includes("smile") || answer.includes("weird") || answer.includes("cute") || answer.includes("funny") || answer.includes("happy") || answer.includes("vibe")) {
        response = "Aww, you are making me blush, stop it.";
    } else {
        response = "That's so sweet!";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextHateQuestion()">Next</button>
        </div>
    `;
}

function nextHateQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What are the things your boyfriend does that you hate the most? (If nothing, type 'nothing')</p>
            <input type="text" id="hate-answer" placeholder="Type your answer">
            <button class="btn" onclick="submitHate()">Submit</button>
        </div>
    `;
}

function submitHate() {
    const answer = document.getElementById("hate-answer").value.trim().toLowerCase();
    let response = '';

    if (answer === "nothing") {
        response = "Oh, thank God I'm trying my best sha.";
    } else {
        response = "Oh, I didn't know that it was like that. I will try my best to change.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextHappyQuestion()">Next</button>
        </div>
    `;
}

function nextHappyQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Do you know that you make ${boyfriendName} happy a lot?</p>
            <input type="radio" id="yes" name="happy" value="yes"> <label for="yes">Yes</label>
            <input type="radio" id="no" name="happy" value="no"> <label for="no">No</label>
            <button class="btn" onclick="submitHappy()">Submit</button>
        </div>
    `;
}

function submitHappy() {
    const yesChecked = document.getElementById("yes").checked;
    let response = '';

    if (yesChecked) {
        response = "Yayyy, it's good that you know!";
    } else {
        response = "Well, if you don't know, you do. You make me happy a whole lot.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextMarryQuestion()">Next</button>
        </div>
    `;
}

function nextMarryQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Would you marry me? 🥺</p>
            <input type="radio" id="marry-yes" name="marry" value="yes"> <label for="marry-yes">Yes</label>
            <input type="radio" id="marry-no" name="marry" value="no"> <label for="marry-no">No</label>
            <button class="btn" onclick="submitMarry()">Submit</button>
        </div>
    `;
}

function submitMarry() {
    const yesChecked = document.getElementById("marry-yes").checked;
    let response = '';

    if (yesChecked) {
        response = "Yayyy!";
    } else {
        response = "Awww 🤕";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" onclick="nextFinalQuestion()">Next</button>
        </div>
    `;
}

function nextFinalQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Do you like me?</p>
            <input type="radio" id="like-yes" name="like" value="yes"> <label for="like-yes">Yes, I like you</label>
            <input type="radio" id="love" name="like" value="love"> <label for="love">No, I don't like you, I love you</label>
            <button class="btn" onclick="submitFinal()">Submit</button>
        </div>
    `;
}

function submitFinal() {
    const loveChecked = document.getElementById("love").checked;
    let response = '';

    if (loveChecked) {
        response = "Awwwww, I love you too!";
    } else {
        response = "Okay, cool.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <p>Thank you for filling this quiz I really appreciate it ml</p>
            <button class="btn" onclick="showSurprise()">You're welcome</button>
        </div>
    `;
}

function showSurprise() {
    const content = document.getElementById
      
