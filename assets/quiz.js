document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const feedback = quiz.querySelector("[data-feedback]");
  const explanation = quiz.dataset.explanation;

  quiz.querySelectorAll("button[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.answer === "correct";
      quiz.querySelectorAll("button[data-answer]").forEach((option) => {
        option.disabled = true;
      });
      button.classList.add(correct ? "correct" : "incorrect");
      feedback.textContent = correct ? `Correct. ${explanation}` : `Not yet. ${explanation}`;
    });
  });
});
