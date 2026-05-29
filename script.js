const form = document.getElementById('passportForm');
const preview = document.getElementById('preview');
const previewTitle = document.getElementById('previewTitle');
const previewText = document.getElementById('previewText');
const cardName = document.getElementById('cardName');
const cardGoal = document.getElementById('cardGoal');
const cardMeta = document.getElementById('cardMeta');
const walletBtn = document.getElementById('walletBtn');
const parentBtn = document.getElementById('parentBtn');

function readinessSignal(allergies, meds) {
  if (allergies === 'Not sure' || meds === 'Not sure') return 'Signal: Starter';
  if (allergies && meds) return 'Signal: Ready';
  return 'Signal: Starter';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim() || 'Your';
  const emergency = document.getElementById('emergency').value.trim() || 'Emergency contact';
  const allergies = document.getElementById('allergies').value;
  const meds = document.getElementById('meds').value;
  const goal = document.getElementById('goal').value;
  const signal = readinessSignal(allergies, meds);

  preview.hidden = false;
  previewTitle.textContent = `${name}'s Health Passport is ready.`;
  previewText.textContent = `Your Passport is built for ${goal.toLowerCase()}. Add it to your phone, then invite a parent to complete the deeper details.`;
  cardName.textContent = name;
  cardGoal.textContent = signal;
  cardMeta.textContent = `${emergency} set · Allergies: ${allergies} · Meds: ${meds}`;

  preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

walletBtn.addEventListener('click', () => {
  alert('Prototype note: Apple Wallet passes require Apple PassKit certificates and a backend signing service. This button is ready to connect to a /create-pass endpoint.');
});

parentBtn.addEventListener('click', () => {
  const subject = encodeURIComponent('Complete my AiTHOS Health Passport');
  const body = encodeURIComponent('I started my AiTHOS Health Passport. Can you help complete the parent details like doctor, immunizations, insurance basics, and emergency info?');
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
