document.getElementById('complaintForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fields = [
    { id: 'bookingId', name: 'Booking Id' },
    { id: 'name',     name: 'Contact Name' },
    { id: 'email',    name: 'Email' },
    { id: 'phone',    name: 'Phone' },
    { id: 'subject',  name: 'Subject' },
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

  // Validate each field
  const bookingVal = document.getElementById('bookingId').value.trim();
  if (!bookingVal) {
    errors.push('• Booking Id is required.');
    document.getElementById('bookingId').classList.add('error-border');
    document.getElementById('err-bookingId').textContent = 'Please enter your Booking Id.';
  }

  const nameVal = document.getElementById('name').value.trim();
  if (!nameVal) {
    errors.push('• Contact Name is required.');
    document.getElementById('name').classList.add('error-border');
    document.getElementById('err-name').textContent = 'Please enter your name.';
  }

  const emailElem = document.getElementById('email');
  const emailVal = emailElem.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal) {
    errors.push('• Email is required.');
    emailElem.classList.add('error-border');
    document.getElementById('err-email').textContent = 'Please enter an email address.';
  } else if (!emailPattern.test(emailVal)) {
    errors.push('• Email must be a valid email address.');
    emailElem.classList.add('error-border');
    document.getElementById('err-email').textContent = 'Invalid email format.';
  }

  const phoneVal = document.getElementById('phone').value.trim();
  if (!phoneVal) {
    errors.push('• Phone is required.');
    document.getElementById('phone').classList.add('error-border');
    document.getElementById('err-phone').textContent = 'Please enter your phone number.';
  }

  const subjectVal = document.getElementById('subject').value.trim();
  if (!subjectVal) {
    errors.push('• Subject is required.');
    document.getElementById('subject').classList.add('error-border');
    document.getElementById('err-subject').textContent = 'Please enter a subject.';
  }

  const descVal = document.getElementById('description').value.trim();
  if (!descVal) {
    errors.push('• Description is required.');
    document.getElementById('description').classList.add('error-border');
    document.getElementById('err-description').textContent = 'Please enter a description.';
  }

  if (errors.length > 0) {
    summaryBox.style.display = 'block';
    summaryBox.innerHTML = errors.join('<br>');
    return;
  }
 this.submit();
  // Redirect to thank you page after successful validation
  window.location.href = 'thankyou.html';
});
