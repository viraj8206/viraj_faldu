// script.js
document.getElementById('cv_download').addEventListener('click', function() {
console.log('demo');
    // Create an anchor element (a) to trigger the download
    var downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', 'asset/cv/'); // Replace with your file path
    downloadAnchor.setAttribute('download', 'resume.pdf'); // Replace with desired file name

    // Simulate click of anchor to trigger download
    downloadAnchor.click();

    // Remove anchor from body
    document.body.removeChild(downloadAnchor);
});
