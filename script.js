document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('complaintForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fields = [
      { id: 'bookingId', name: 'Booking Id' },
      { id: 'name', name: 'Contact Name' },
      { id: 'email', name: 'Email' },
      { id: 'phone', name: 'Phone' },
      { id: 'subject', name: 'Subject' },
      { id: 'description', name: 'Description' }
    ];

    let errors = [];
    fields.forEach(f => {
      document.getElementById(f.id).classList.remove('error-border');
      document.getElementById('err-' + f.id).textContent = '';
    });

    const summaryBox = document.getElementById('errorSummary');
    summaryBox.style.display = 'none';
    summaryBox.innerHTML = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation logic
    fields.forEach(f => {
      const value = document.getElementById(f.id).value.trim();
      if (!value) {
        errors.push(`• ${f.name} is required.`);
        document.getElementById(f.id).classList.add('error-border');
        document.getElementById('err-' + f.id).textContent = `Please enter your ${f.name.toLowerCase()}.`;
      }
    });

    const email = document.getElementById('email').value.trim();
    if (email && !emailPattern.test(email)) {
      errors.push('• Email must be a valid email address.');
      document.getElementById('email').classList.add('error-border');
      document.getElementById('err-email').textContent = 'Invalid email format.';
    }

    if (errors.length > 0) {
      summaryBox.style.display = 'block';
      summaryBox.innerHTML = errors.join('<br>');
      return;
    }

    // Submit the form to Salesforce
    form.submit();
  });
});
