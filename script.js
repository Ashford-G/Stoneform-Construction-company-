const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

// Add the client's real WhatsApp number before delivery, in international digits-only format.
const whatsappNumber = ""; // Example format: 263771234567
const whatsappLink = document.querySelector("#whatsappLink");
if (whatsappLink) {
  if (whatsappNumber) {
    whatsappLink.href = `https://wa.me/${whatsappNumber}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  } else {
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Demo website: add the real company's WhatsApp number in script.js before client delivery.");
    });
  }
}

const quoteForm = document.querySelector("#quoteForm");
const formHelp = document.querySelector("#formHelp");
quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const message = [
    "PROJECT ENQUIRY — STONEFORM CONSTRUCTION",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Project: ${data.get("projectType")}`,
    `Details: ${data.get("message") || "Not provided"}`
  ].join("\\n");
  if (whatsappNumber) {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    formHelp.textContent = "Your enquiry message has been prepared in WhatsApp. Please send it there to complete the enquiry.";
  } else {
    formHelp.textContent = "Demo only: the form is working, but no message was sent. Add the real company's WhatsApp number in script.js before client delivery.";
    formHelp.classList.add("form-help-warning");
  }
});
