// EduPortal Dashboard — вся інтерактивна логіка

document.addEventListener('DOMContentLoaded', () => {
  initQuickActions();
  initCourseButtons();
  initRegistrationForm();
});

/* ---------- Кнопки в шапці "Welcome" картки ---------- */
function initQuickActions() {
  const buttons = document.querySelectorAll('.card.p-4.mb-4 .btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`"${btn.textContent.trim()}" — тут буде перехід до відповідного розділу.`);
    });
  });
}

/* ---------- Кнопки в картках курсів (Resume / View All Tasks / Download) ---------- */
function initCourseButtons() {
  const resumeBtn = document.querySelector('.hover-card .btn-outline-primary');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      alert('Продовжуємо модуль "Bootstrap 5 Component Mastery"...');
    });
  }

  const tasksBtn = document.querySelector('.hover-card .btn-dark');
  if (tasksBtn) {
    tasksBtn.addEventListener('click', () => {
      alert('Відкриваємо повний список завдань...');
    });
  }

  const transcriptBtn = document.querySelector('.hover-card .btn-outline-dark');
  if (transcriptBtn) {
    transcriptBtn.addEventListener('click', () => {
      alert('Транскрипт готується до завантаження...');
    });
  }
}

/* ---------- Форма реєстрації на курс ---------- */
function initRegistrationForm() {
  const form = document.querySelector('form');
  if (!form) return;

  // Bootstrap-валідація
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const data = collectFormData(form);
    console.log('Дані форми реєстрації:', data);
    alert('Реєстрацію успішно надіслано!');

    form.reset();
    form.classList.remove('was-validated');
  });

  // Підтвердження перед очищенням форми
  form.addEventListener('reset', (event) => {
    const confirmed = confirm('Очистити всі поля форми?');
    if (!confirmed) {
      event.preventDefault();
    } else {
      form.classList.remove('was-validated');
    }
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