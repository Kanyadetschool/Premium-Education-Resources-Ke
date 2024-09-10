var mainApp = {};
(function() {
    var mainContainer = document.getElementById("main_container");

    // Set Firebase Authentication persistence
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        init(); // Initialize the app once persistence is set
    })
    .catch((error) => {
        console.error('Error setting persistence:', error);
    });

    var logout = function() {
        firebase.auth().signOut().then(function() {
            // Redirect to the correct URL after sign-out
            window.location.href = "./GoogleAuthlogin.html";
        }).catch(function(error) {
            console.error('Sign-out error:', error);
        });
    };

    var init = function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("User is signed in");
                mainContainer.style.display = "";
                inactivityTime.reset(); // Start the inactivity timer
                inactivityTime.setup(); // Set up the event listeners for user activity
            } else {
                console.log("User is not signed in");
                mainContainer.style.display = "none";
                // Redirect to login if user is not signed in
                window.location.href = "./GoogleAuthlogin.html";
            }
        });
    };

    var inactivityTime = function() {
        var timer;
        var warningTimer;

        function resetTimer() {
            clearTimeout(timer);
            clearTimeout(warningTimer);
            timer = setTimeout(showWarning, 270000); // 4.5 minutes
        }

        function showWarning() {
            var countdown = 30;
            Swal.fire({
                title: 'Inactivity Warning',
                html: `You will be logged out in <strong>${countdown}</strong> seconds due to inactivity.`,
                icon: 'warning',
                timer: 30000,
                showCancelButton: true,
                confirmButtonText: 'Stay Logged In',
                cancelButtonText: 'Log Out Now',
                timerProgressBar: true,
                willClose: () => {
                    clearTimeout(warningTimer);
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    resetTimer(); // User wants to stay logged in
                } else {
                    logout(); // Log out immediately
                }
            });

            var interval = setInterval(() => {
                countdown--;
                if (countdown >= 0) {
                    Swal.getContent().querySelector('strong').textContent = countdown;
                } else {
                    clearInterval(interval);
                }
            }, 1000);

            warningTimer = setTimeout(logout, 30000); // Auto logout after 30 seconds
        }

        function setupInactivityListener() {
            window.addEventListener('mousemove', resetTimer);
            window.addEventListener('keydown', resetTimer);
            window.addEventListener('scroll', resetTimer);
            window.addEventListener('touchstart', resetTimer);
            window.addEventListener('click', resetTimer);
        }

        return {
            reset: resetTimer,
            setup: setupInactivityListener
        };
    }();

    mainApp.logout = logout;
})();
