document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("continue-btn").addEventListener("click", startQuiz);
});

let boyfriendName = ""; // To store the boyfriend's nam

function startQuiz() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What's the name of your love?ehh sweetheart not full name o😂 normal name</p>
            <input type="text" id="boyfriend" placeholder="Type his name">
            <button class="btn" id="submit-boyfriend-btn">Submit</button>
        </div>
    `;

    // Attach the event listener to the dynamically added 'Submit' button
    document.getElementById("submit-boyfriend-btn").addEventListener("click", submitBoyfriend);
}

function submitBoyfriend() {
    const input = document.getElementById("boyfriend").value.trim();
    if (input !== "") {
        boyfriendName = input;
        const content = document.getElementById("content");
        content.innerHTML = `
            <div class="pop-up">
                <p> Ehen🌚🌝 so it's ${boyfriendName} Abi?🌚 that's nice</p>
                <p>Would you like to move on to the next question?</p>
                <button class="btn" id="next-question-btn">Ok</button>
            </div>
        `;

        // Attach event listener to dynamically added 'Next' button
        document.getElementById("next-question-btn").addEventListener("click", nextQuestion);
    }
}

function nextQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What do you love about ${boyfriendName}?</p>
            <input type="text" id="love-answer" placeholder="Type it sweetie">
            <button class="btn" id="submit-love-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-love-btn").addEventListener("click", submitLove);
}

function submitLove() {
    const answer = document.getElementById("love-answer").value.toLowerCase();
    let response = '';

    if (answer.includes("smile") || answer.includes("weird") || answer.includes("cute") || answer.includes("funny") || answer.includes("happy") || answer.includes("vibe")) {
        response = "Aww baby🥺🥺 ill try to use that to make you happy every day❤️.";
    } 
    if (answer.includes("everything")) {
        response = " everything about me?😭😭 me that im not perfect but it doesn't matter to you anyways♥️";
    }
    else {
        response = "aww baby 🥺🥺 that's sweet🥺😍❤️";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="next-hate-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("next-hate-btn").addEventListener("click", nextHateQuestion);
}

function nextHateQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>What is the thing ${boyfriendName} does that you hate when he does it? (If nothing, type 'nothing' but we both know its nothing sha😂)</p>
            <input type="text" id="hate-answer" placeholder="Type your answer">
            <button class="btn" id="submit-hate-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-hate-btn").addEventListener("click", submitHate);
}

function submitHate() {
    const answer = document.getElementById("hate-answer").value.toLowerCase();
    let response = '';

    if (answer.includes ("nothing")) {
        response = "Oh, thank God I'm trying my best sha.";
    } 
    if (answer.includes ("equality")) {
        response = "ahn ahn im reducing it naa 🥲🥲";
    }
    else {
        response = "Oya no wahala ill try my best to change 🥲";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="next-happy-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("next-happy-btn").addEventListener("click", nextHappyQuestion);
}

function nextHappyQuestion() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Do you know that you make ${boyfriendName} happy a lot? even your "heyyyy" is enough to turn his frown upside down</p>
            <label><input type="radio" name="happy" value="Yes"> Yes</label>
            <label><input type="radio" name="happy" value="No"> No</label>
            <button class="btn" id="submit-happy-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-happy-btn").addEventListener("click", submitHappy);
}

function submitHappy() {
    const selectedAnswer = document.querySelector('input[name="happy"]:checked').value;
    let response = '';

    if (selectedAnswer === "Yes") {
        response = "Yayyy, it's good that you know!";
    } else {
        response = "Well, if you don't know, you do. You make me happy a whole lot.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="question-6-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("question-6-btn").addEventListener("click", questionSix);
}

function questionSix() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Would you marry me? 🥺</p>
            <label><input type="radio" name="marry" value="Yes"> Yes</label>
            <label><input type="radio" name="marry" value="No"> No</label>
            <button class="btn" id="submit-marry-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-marry-btn").addEventListener("click", submitMarry);
}

function submitMarry() {
    const selectedAnswer = document.querySelector('input[name="marry"]:checked').value;
    let response = '';

    if (selectedAnswer === "Yes") {
        response = "Yayyy, I'm so happy! ❤️";
    } else {
        response = "Awww 🤕. That's okay, we can still be happy together.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="question-7-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("question-7-btn").addEventListener("click", questionSeven);
}

function questionSeven() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>If I said I hate you, like suddenly what would you think I mean?</p>
            <input type="text" id="hate-meaning" placeholder="Type your answer">
            <button class="btn" id="submit-hate-meaning-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-hate-meaning-btn").addEventListener("click", submitHateMeaning);
}

function submitHateMeaning() {
    const answer = document.getElementById("hate-meaning").value.toLowerCase();
    let response = '';

    if (answer === "i love you" || answer === "love") {
        response = "My baby knows me so well 🥺.";
    } else {
        response = "Omo u no get brain o 😂. How ago hate you?";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="question-8-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("question-8-btn").addEventListener("click", questionEight);
}

// Question 8: "Do you like me?"
function questionEight() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Do you like me?</p>
            <label><input type="radio" name="like" value="Yes"> Yes, I like you</label>
            <label><input type="radio" name="like" value="No"> No, I don't like you</label>
            <label><input type="radio" name="like" value="Love"> No, I don't like you, I love you</label>
            <button class="btn" id="submit-like-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-like-btn").addEventListener("click", submitLike);
}

function submitLike() {
    const selectedAnswer = document.querySelector('input[name="like"]:checked').value;
    let response = '';

    if (selectedAnswer === "Yes") {
        response = "Okay, cool 😎.";
    } else if (selectedAnswer === "Love") {
        response = "Awwwww, haaa baby e too much joor😪❤️🥺.";
    } else {
        response = "😢 Aww, that's okay.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="question-9-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("question-9-btn").addEventListener("click", questionNine);
}

// Question 9: "Can you see a future where both of us are married?"
function questionNine() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Can you see a future where both of us are married? 🤵👰</p>
            <label><input type="radio" name="married-future" value="Yes"> Yes</label>
            <label><input type="radio" name="married-future" value="No"> No</label>
            <button class="btn" id="submit-married-future-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-married-future-btn").addEventListener("click", submitMarriedFuture);
}

function submitMarriedFuture() {
    const selectedAnswer = document.querySelector('input[name="married-future"]:checked').value;
    let response = '';

    if (selectedAnswer === "Yes") {
        response = "Me too! 🥰.";
    } else {
        response = "Well, I do 😊.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="question-10-btn">Next</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Next' button
    document.getElementById("question-10-btn").addEventListener("click", questionTen);
}

// Question 10: "Do you love me more than anything?"
function questionTen() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Would you lik to spend the rest of your life with me? 💖</p>
            <label><input type="radio" name="love-more" value="Yes"> Yes</label>
            <label><input type="radio" name="love-more" value="No"> No</label>
            <button class="btn" id="submit-love-more-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-love-more-btn").addEventListener("click", submitLoveMore);
}

function submitLoveMore() {
    const selectedAnswer = document.querySelector('input[name="love-more"]:checked').value;
    let response = '';

    if (selectedAnswer === "Yes") {
        response = "Im as weird as fuck o but either way id be happy to have u in my life too 😂❤️";
    } else {
        response = "ehen okay oo😖🥲.";
    }

    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>${response}</p>
            <button class="btn" id="show-surprise-btn">You're welcome</button>
        </div>
    `;

    // Attach event listener to dynamically added 'You're welcome' button
    document.getElementById("show-surprise-btn").addEventListener("click", showSurprise);
}

// Final Surprise (Link and Confetti)
function showSurprise() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Thank you for filling this quiz! I really appreciate it, my love 🥺❤️.</p>
            <p>Now for the Grand finale tap on the button </p>
            <a href="https://writeup-9h97.onrender.com" target="_blank">
                <button class="btn">Tap here</button>
            </a>
        </div>
    `;

    // Optional: Confetti effect or some fun animation here!
    confettiEffect();  // Call confetti function if you have one!
}

// Optional Confetti Effect Function
function confettiEffect() {
    // You can use a confetti library or implement your own animation here
    console.log("Confetti starts! 🎉");
}
