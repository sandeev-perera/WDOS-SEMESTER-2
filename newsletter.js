const subscribeForm = document.getElementById("subscribeForm");

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const get_email = document.getElementById('email').value;

        let subscribedEmails = localStorage.getItem('subscribedEmails');
        if (!subscribedEmails) {
            subscribedEmails = [];
        } else {
            subscribedEmails = JSON.parse(subscribedEmails);
        }

        subscribedEmails.push(get_email);
        localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

        alert("Thank you for subscribing to our newsletter!");

        // Clear the input field after subscribing
        document.getElementById('email').value = "";
    });

