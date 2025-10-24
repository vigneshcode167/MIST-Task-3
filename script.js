
const correctAnswers = {
  q1: 1,
  q2: 2,
  q3: 1,
  q4: 2,
  q5: 1
};


const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    let totalScore = 0;
    const questions = document.querySelectorAll(".quiz-question");

    questions.forEach((question, i) => {
      const qName = "q" + (i + 1);
      const options = question.querySelectorAll(`input[name="${qName}"]`);

      options.forEach((opt, index) => {
        opt.parentElement.classList.remove("bg-green-500", "bg-red-500", "text-white", "p-1", "rounded-md");

        if (opt.checked) {
          if (index === correctAnswers[qName]) {
            totalScore++;
            opt.parentElement.classList.add("bg-green-500", "text-white", "p-1", "rounded-md");
          } else {
            opt.parentElement.classList.add("bg-red-500", "text-white", "p-1", "rounded-md");
          }
        }
      });

      
      options[correctAnswers[qName]].parentElement.classList.add("bg-green-500", "text-white", "p-1", "rounded-md");
    });

    const display = document.getElementById("scoreDisplay");
    display.textContent = `You scored ${totalScore} / 5! 🎉`;
  });
}


const dogImg = document.querySelector('img[alt="dog"]');
if (dogImg) {
  dogImg.addEventListener("click", () => {
    alert("You clicked the dog! 🐶 Cute, right?");
  });
}


const moreBtn = document.querySelector('a[href="more.html"]');
if (moreBtn) {
  moreBtn.addEventListener("click", (e) => {
    alert("Wow! You really want to know more about me 😅");
  });
}
