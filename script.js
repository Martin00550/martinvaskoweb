document.getElementById('year').textContent = new Date().getFullYear();
const privacyDialog = document.getElementById('privacy-dialog');
document.getElementById('open-privacy').addEventListener('click', () => privacyDialog.showModal());
document.getElementById('close-privacy').addEventListener('click', () => privacyDialog.close());
privacyDialog.addEventListener('click', (event) => {
  if (event.target === privacyDialog) {
    const box = privacyDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacyDialog.close();
  }
});
