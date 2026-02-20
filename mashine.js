function showForm(id) {
  document.querySelectorAll('.form-box').forEach((form) => {
    form.classList.remove('opacity-100', 'scale-100');
    form.classList.add(
      'opacity-0',
      'scale-95',
      'pointer-events-none'
    );
  });

  const activeForm = document.getElementById(id);
  activeForm.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  activeForm.classList.add('opacity-100', 'scale-100');
}
