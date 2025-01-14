document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        village: document.getElementById('village').value,
        contact: document.getElementById('contact').value,
        complaintType: document.getElementById('complaintType').value,
        description: document.getElementById('description').value,
    };

    console.log('Form Data:', formData); // Debugging के लिए

    alert("आपकी शिकायत सफलतापूर्वक सबमिट हो गई है। धन्यवाद!");
});
