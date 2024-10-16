document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("continue-btn").addEventListener("click", startQuiz);
});

let boyfriendName = ""; // To store the boyfriend's name

function startQuiz() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="pop-up">
            <p>Who is your boyfriend?</p>
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
                <p>Aww, me that, I didn't even know that it was ${boyfriendName}!</p>
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
            <input type="text" id="love-answer" placeholder="Type what you love">
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
        response = "Aww, you are making me blush, stop it.";
    } else {
        response = "That's so sweet!";
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
            <p>What are the things your boyfriend does that you hate the most? (If nothing, type 'nothing')</p>
            <input type="text" id="hate-answer" placeholder="Type your answer">
            <button class="btn" id="submit-hate-btn">Submit</button>
        </div>
    `;

    // Attach event listener to dynamically added 'Submit' button
    document.getElementById("submit-hate-btn").addEventListener("click", submitHate);
}

// Continue adding similar event listeners for each dynamically generated button in subsequent functions like 'submitHate', 'submitHappy', etc.
