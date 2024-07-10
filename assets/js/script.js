// script.js
document.getElementById('cv_download').addEventListener('click', function() {
    // Create an anchor element (a) to trigger the download
    var downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', '../cv/'); // Replace with your file path
    downloadAnchor.setAttribute('download', 'Faldu Viraj.pdf'); // Replace with desired file name

    // Simulate click of anchor to trigger download
    downloadAnchor.click();

    // Remove anchor from body
    document.body.removeChild(downloadAnchor);
});
