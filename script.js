// EduPortal Dashboard — вся інтерактивна логіка

document.addEventListener('DOMContentLoaded', () => {
  initRegistrationForm();
});

/* ---------- Форма реєстрації на курс ---------- */
function initRegistrationForm() {
  const form = document.querySelector('form');
  if (!form) return;

  // Bootstrap-валідація полів форми
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const data = collectFormData(form);
    console.log('Дані форми реєстрації:', data);

    form.reset();
    form.classList.remove('was-validated');
  });
}

function collectFormData(form) {
  const fullName = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const enrollmentDate = form.querySelector('input[type="date"]').value;
  const track = form.querySelector('select').value;
  const experience = form.querySelector('input[name="exp"]:checked')?.id || null;
  const goals = form.querySelector('textarea').value;
  const subscribed = form.querySelector('#subscribeToggle').checked;

  return { fullName, email, enrollmentDate, track, experience, goals, subscribed };
}