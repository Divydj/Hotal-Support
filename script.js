document.getElementById('complaintForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Temporarily block form submission

  const fields = [
      { id: 'Booking__c', name: 'Booking Id' },
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

  const emailElem = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const params = new URLSerachParams(window.location.search);
 document.getElementById('Booking__c').value = params.has('bookingId')? params.get('bookingId'):'';
  // if (!document.getElementById('Booking__c').value.trim()) {
  //   errors.push('• Booking Id is required.');
  //   document.getElementById('Booking__c').classList.add('error-border');
  //   document.getElementById('err-Booking__c').textContent = 'Please enter your Booking Id.';
  // }

  if (!document.getElementById('name').value.trim()) {
    errors.push('• Contact Name is required.');
    document.getElementById('name').classList.add('error-border');
    document.getElementById('err-name').textContent = 'Please enter your name.';
  }

  const emailVal = emailElem.value.trim();
  if (!emailVal) {
    errors.push('• Email is required.');
    emailElem.classList.add('error-border');
    document.getElementById('err-email').textContent = 'Please enter an email address.';
  } else if (!emailPattern.test(emailVal)) {
    errors.push('• Email must be a valid email address.');
    emailElem.classList.add('error-border');
    document.getElementById('err-email').textContent = 'Invalid email format.';
  }

  if (!document.getElementById('phone').value.trim()) {
    errors.push('• Phone is required.');
    document.getElementById('phone').classList.add('error-border');
    document.getElementById('err-phone').textContent = 'Please enter your phone number.';
  }

  if (!document.getElementById('subject').value.trim()) {
    errors.push('• Subject is required.');
    document.getElementById('subject').classList.add('error-border');
    document.getElementById('err-subject').textContent = 'Please enter a subject.';
  }

  if (!document.getElementById('description').value.trim()) {
    errors.push('• Description is required.');
    document.getElementById('description').classList.add('error-border');
    document.getElementById('err-description').textContent = 'Please enter a description.';
  }

  if (errors.length > 0) {
    summaryBox.style.display = 'block';
    summaryBox.innerHTML = errors.join('<br>');
    return; // Stop submission
  }

  // ✅ Submit form if validation passes
  this.submit();
});
