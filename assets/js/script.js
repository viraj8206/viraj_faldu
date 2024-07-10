document.getElementById('cv_download').addEventListener('click', function() {
    // Replace with your file URL
    var fileUrl = '../assets/cv/';
  
    // Use an anchor element to initiate download
    var a = document.createElement('a');
    a.style.display = 'none';
    console.log(fileUrl);
    a.href = fileUrl;
  
    // Set the file name (you can set dynamically if needed)
    a.download = 'Faldu Viraj.pdf'; // Example filename
  
    // Append anchor to body and trigger click event
    document.body.appendChild(a);
    a.click();
  
    // Clean up
    document.body.removeChild(a);
  });
  
