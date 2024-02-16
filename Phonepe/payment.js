function simulatePayment(status) {
    showProcessingUI();

    simulateAsyncPayment(status)
        .then((result) => {
            if (result === 'accepted') {
                showSuccessUI();
            } else {
                showFailureUI();
            }
        })
        .catch((error) => {
            console.error('Error during payment simulation:', error);
            showFailureUI();
        });
}

function simulateAsyncPayment(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'accepted') {
                resolve(status);
            } else {
                reject(status);
            }
        }, 2000);
    });
}

function showProcessingUI() {
    hideAllUI();
    document.getElementById('processing').style.display = 'block';
}

function showSuccessUI() {
    hideAllUI();
    document.getElementById('success').style.display = 'block';
}

function showFailureUI() {
    hideAllUI();
    document.getElementById('failure').style.display = 'block';
}

function hideAllUI() {
    document.getElementById('processing').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('failure').style.display = 'none';
}