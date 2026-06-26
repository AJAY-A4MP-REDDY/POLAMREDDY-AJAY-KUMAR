/* ==========================================
   APP.JS - PART 1
   POLAMREDDY AJAY KUMAR Portfolio
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
       Scroll To Top
    =============================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

}):
/* ==========================================
   APP.JS - PART 2
   Theme, Mobile Menu & Scroll Animation
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Dark / Light Mode
    ========================== */

    const themeBtn = document.getElementById("themeBtn");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
                themeBtn.innerHTML = "🌙";
            } else {
                localStorage.setItem("theme", "dark");
                themeBtn.innerHTML = "☀️";
            }

        });

    }

    /* ==========================
       Mobile Menu
    ========================== */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }

    /* ==========================
       Scroll Reveal Animation
    ========================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        reveals.forEach((item) => {

            const windowHeight = window.innerHeight;
            const elementTop = item.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                item.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});
/* ==========================================
   APP.JS - PART 3
   Search, Contact Form & Loader
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Project Search
    ========================== */

    const searchBox = document.getElementById("searchBox");
    const cards = document.querySelectorAll(".project-card");

    if (searchBox) {

        searchBox.addEventListener("keyup", () => {

            const value = searchBox.value.toLowerCase();

            cards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    /* ==========================
       Contact Form Validation
    ========================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

            alert("✅ Message sent successfully!");

            contactForm.reset();

        });

    }

    /* ==========================
       Loader Hide
    ========================== */

    const loader = document.querySelector(".loader");

    if(loader){

        window.addEventListener("load",()=>{

            setTimeout(()=>{

                loader.style.opacity="0";

                setTimeout(()=>{

                    loader.style.display="none";

                },500);

            },800);

        });

    }

    /* ==========================
       Basic AI Chat
    ========================== */

    const sendBtn=document.getElementById("sendBtn");
    const input=document.getElementById("userInput");
    const messages=document.getElementById("messages");

    if(sendBtn && input && messages){

        sendBtn.addEventListener("click",()=>{

            const text=input.value.trim();

            if(text==="") return;

            messages.innerHTML +=
            `<div class="chat-message user"><b>You:</b> ${text}</div>`;

            let reply="Welcome! Ask me about my skills, projects, resume or contact details.";

            if(text.toLowerCase().includes("project")){
                reply="You can view my latest projects in the Projects section.";
            }

            if(text.toLowerCase().includes("skill")){
                reply="I work with HTML, CSS, JavaScript, React, Firebase and AI.";
            }

            if(text.toLowerCase().includes("contact")){
                reply="Please visit the Contact page or use the contact form.";
            }

            messages.innerHTML +=
            `<div class="chat-message bot"><b>AI:</b> ${reply}</div>`;

            input.value="";

            messages.scrollTop=messages.scrollHeight;

        });

    }

});
/* ==========================================
   APP.JS - PART 4
   Counters, Active Nav, Skill Animation
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Animated Counters
    ========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.getAttribute("data-target")) || 0;

        let count = 0;

        const speed = Math.max(1, Math.ceil(target / 100));

        function updateCounter() {

            count += speed;

            if (count >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

    /* ==========================
       Skills Progress Animation
    ========================== */

    const progressBars = document.querySelectorAll(".progress span");

    progressBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0%";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Toast Notification
    ========================== */

    window.showToast = function(message) {

        const toast = document.createElement("div");

        toast.innerText = message;

        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.padding = "15px 25px";
        toast.style.background = "#FFD700";
        toast.style.color = "#000";
        toast.style.borderRadius = "30px";
        toast.style.fontWeight = "bold";
        toast.style.zIndex = "99999";

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, 3000);

    };

});
/* ==========================================
   APP.JS - PART 5 (FINAL)
   Final Features
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Digital Clock
    ========================== */

    const clock = document.getElementById("liveClock");

    function updateClock() {

        if (!clock) return;

        const now = new Date();

        clock.innerHTML = now.toLocaleTimeString();

    }

    setInterval(updateClock, 1000);

    updateClock();

    /* ==========================
       Current Year
    ========================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* ==========================
       Welcome Toast
    ========================== */

    setTimeout(() => {

        if (typeof showToast === "function") {
            showToast("🌟 Welcome to POLAMREDDY AJAY KUMAR Portfolio");
        }

    }, 1500);

    /* ==========================
       Copy Email
    ========================== */

    const copyBtn = document.getElementById("copyEmail");

    if (copyBtn) {

        copyBtn.addEventListener("click", async () => {

            const email = copyBtn.dataset.email;

            if (!email) return;

            try {

                await navigator.clipboard.writeText(email);

                if (typeof showToast === "function") {
                    showToast("📧 Email copied successfully!");
                }

            } catch {

                alert("Unable to copy email.");

            }

        });

    }

    /* ==========================
       PWA Install
    ========================== */

    let deferredPrompt;

    const installBtn = document.getElementById("installBtn");

    window.addEventListener("beforeinstallprompt", (e) => {

        e.preventDefault();

        deferredPrompt = e;

        if (installBtn) {
            installBtn.style.display = "inline-block";
        }

    });

    if (installBtn) {

        installBtn.addEventListener("click", async () => {

            if (!deferredPrompt) return;

            deferredPrompt.prompt();

            await deferredPrompt.userChoice;

            deferredPrompt = null;

            installBtn.style.display = "none";

        });

    }

    console.log("✅ Portfolio initialized successfully.");

});
