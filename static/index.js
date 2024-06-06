function sendDataAndAttachment(url, data, fileName, fileData) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Or adjust based on your backend API
      },
      body: JSON.stringify({
        data, // Your form data
        attachment: {
          filename: fileName,
          content: fileData, // Base64-encoded file data
        },
      }),
    })
    .then(response => response.json())
    .then(responseData => {
      // Handle successful response
      console.log('Data and attachment sent successfully:', responseData);
    })
    .catch(error => {
      // Handle errors
      console.error('Error sending data and attachment:', error);
    });
  }

  function test(e){
    e.preventdefault();
    console.log("TEST")
    console.log(e);
  }
  