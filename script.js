document.querySelector('.btnLogin-popup').addEventListener('click', function() {
    window.location.href = 'give.html';
});


// Ensure "Home" button navigates to index.html
document.querySelector(".navigation a[href='#']").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});




//history button click
document.addEventListener("DOMContentLoaded", function () {
    // Select the "Our History" dropdown link
    const historyLink = document.querySelector(".dropdown-content a[href='#']");

    if (historyLink) {
        historyLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior

            // Redirect to about.html with a hash for the history section
            window.location.href = "about.html#history";
        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let slideIndex = 0;

    function showSlides() {
        slides.forEach(slide => slide.style.opacity = "0"); // Hide all slides

        slides[slideIndex].style.opacity = "1"; // Show current slide
        slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide

        setTimeout(showSlides, 4000); // Change slide every 3 seconds
    }

    showSlides(); // Start slideshow
});




document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".service-times h2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !target.classList.contains("animated")) {
                target.classList.add("animate", "animated"); // Add both classes
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(target);
});

//home quote
const devotions = [
    "Be still, and know that I am God. - Psalm 46:10",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "For we walk by faith, not by sight. - 2 Corinthians 5:7",
    "Cast all your anxiety on Him because He cares for you. - 1 Peter 5:7",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "Come to me, all you who are weary and burdened, and I will give you rest. - Matthew 11:28",
    "God is our refuge and strength, a very present help in trouble. - Psalm 46:1",
    "Give thanks to the Lord, for He is good; His love endures forever. - Psalm 107:1",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
    "My grace is sufficient for you, for my power is made perfect in weakness. - 2 Corinthians 12:9",
    "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life. - John 3:16",
    "The name of the Lord is a strong tower; the righteous run into it and are safe. - Proverbs 18:10",
    "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus. - 1 Thessalonians 5:16-18",
    "Commit your way to the Lord; trust in Him, and He will act. - Psalm 37:5",
    "The Lord your God is with you, the Mighty Warrior who saves. - Zephaniah 3:17",
    "Do not fear, for I am with you; do not be dismayed, for I am your God. - Isaiah 41:10",
    "This is the day that the Lord has made; let us rejoice and be glad in it. - Psalm 118:24",
    "Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal. - Isaiah 26:4",
    "You will keep in perfect peace those whose minds are steadfast because they trust in you. - Isaiah 26:3",
    "With God all things are possible. - Matthew 19:26",
    "Let all that you do be done in love. - 1 Corinthians 16:14",
    "Blessed are the pure in heart, for they shall see God. - Matthew 5:8",
    "I sought the Lord, and He answered me; He delivered me from all my fears. - Psalm 34:4",
    "Be strong and take heart, all you who hope in the Lord. - Psalm 31:24",
    "For the Lord gives wisdom; from His mouth come knowledge and understanding. - Proverbs 2:6",
    "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven. - Matthew 5:16"

];

function fetchNewDevotion() {
    const randomIndex = Math.floor(Math.random() * devotions.length);
    document.getElementById("devotional-text").innerText = devotions[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    // --- Redirect "Proceed to Donation" to pay.html ---
    const donationForm = document.getElementById("donationForm");
    if (donationForm) {
        donationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "pay.html";
        });
    }

    // --- Payment Selection Handling ---
    const paymentMethod = document.getElementById("payment-method");
    const achPayment = document.getElementById("ach-payment");
    const cardPayment = document.getElementById("card-payment");

    if (paymentMethod && achPayment && cardPayment) {
        paymentMethod.addEventListener("change", function () {
            achPayment.classList.toggle("hidden", paymentMethod.value !== "ach");
            cardPayment.classList.toggle("hidden", paymentMethod.value !== "card");
        });
    }

    // --- Ensure Routing & Account Number Inputs Allow Only Numbers ---
    const routingInput = document.getElementById("routing-number");
    const accountInput = document.getElementById("account-number");

    function validateRoutingInput() {
        let value = routingInput.value.replace(/\D/g, ""); // Allow only numbers
        if (value.length > 9) value = value.slice(0, 9); // Limit routing to 9 digits
        routingInput.value = value; // Update input value
    }

    function validateAccountInput() {
        let value = accountInput.value.replace(/\D/g, ""); // Allow only numbers
        if (value.length > 50) value = value.slice(0, 50); // Limit account number to 50 digits
        accountInput.value = value; // Update input value
    }

    if (routingInput) {
        routingInput.addEventListener("input", validateRoutingInput);
    }

    if (accountInput) {
        accountInput.addEventListener("input", validateAccountInput);
    }
});
