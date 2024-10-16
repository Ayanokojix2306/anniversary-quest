function nextStage(stageNumber) {
    // Hide all stages
    document.querySelectorAll('.stage').forEach(stage => {
        stage.classList.remove('active');
    });

    // Show the next stage
    document.getElementById(`stage${stageNumber}`).classList.add('active');

    // Set boyfriend name display
    if (stageNumber === 2) {
        const boyfriendName = document.getElementById('boyfriendName').value;
        document.getElementById('displayBoyfriend').innerText = boyfriendName;
        document.getElementById('displayBoyfriend2').innerText = boyfriendName;
        document.getElementById('displayBoyfriend3').innerText = boyfriendName;
    }
}

function submitStage(stageNumber, answer = null) {
    let popUpMessage = '';

    if (stageNumber === 1) {
        nextStage(2);
    } else if (stageNumber === 2) {
        const loveAnswer = document.getElementById('loveAnswer').value;
        if (loveAnswer.match(/smile|cute|funny|happy|vibe/i)) {
            popUpMessage = "Aww, you are making me blush, stop it.";
        }
        nextStage(3);
        alert(popUpMessage);
    } else if (stageNumber === 3) {
        const hateAnswer = document.getElementById('hateAnswer').value;
        if (hateAnswer.toLowerCase() === 'nothing') {
            popUpMessage = "Oh, thank God I'm trying my best sha.";
        } else {
            popUpMessage = "Oh, I didn't know that it was like that. I will try my best to change.";
        }
        nextStage(4);
        alert(popUpMessage);
    } else if (stageNumber === 4) {
        if (answer) {
            popUpMessage = "Yayyy, it's good that you know!";
        } else {
            popUpMessage = "Well, if you don't know, you do! You make me happy a whole lot.";
        }
        nextStage(5);
        alert(popUpMessage);
    } else if (stageNumber === 5) {
        if (answer) {
            popUpMessage = "Yayyy!";
        } else {
            popUpMessage = "Awww 🤕";
        }
        nextStage(6);
        alert(popUpMessage);
    } else if (stageNumber === 6) {
        const hateLanguageAnswer = document.getElementById('hateLanguageAnswer').value;
        if (hateLanguageAnswer.match(/i love you|love/i)) {
            popUpMessage = "My baby knows me so well 🥺";
        } else {
            popUpMessage = "Omo, you no get brain o 😂 how ago hate you?";
        }
        nextStage(7);
        alert(popUpMessage);
    } else if (stageNumber === 7) {
        if (answer) {
            popUpMessage = "Me too!";
        } else {
            popUpMessage = "Well, I do.";
        }
        nextStage(8);
        alert(popUpMessage);
    } else if (stageNumber === 8) {
        if (answer === 'like') {
            popUpMessage = "Okay, cool!";
        } else {
            popUpMessage = "Awwwwww, I love you too!";
        }
        // Trigger confetti and show the final message
        confetti();
        alert(popUpMessage);
        document.getElementById('final').classList.add('active');
    }
}

function revealSurprise() {
    document.getElementById('finalMessage').innerText = "This is where I'll write how I feel about you!";
    document.getElementById('surprise').classList.remove('hidden');
}

function closeSurprise() {
    document.getElementById('surprise').classList.add('hidden');
}

function confetti() {
    //
  
