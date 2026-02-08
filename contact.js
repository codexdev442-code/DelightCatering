function sendMail() {
  const nameInp = document.getElementById("fullname");
  const phoneInp = document.getElementById("phone");
  const emailInp = document.getElementById("email");
  const messageInp = document.getElementById("message");

  const name = nameInp.value.trim();
  const phone = phoneInp.value.trim();
  const email = emailInp.value.trim();
  const message = messageInp.value.trim();

  let hasError = false;

  // Reset borders
  [nameInp, phoneInp, emailInp, messageInp].forEach(inp => {
    inp.style.border = "1.8px solid lightgrey";
  });

  if (name === "") {
    nameInp.style.border = "1.8px solid red";
    hasError = true;
  }

  if (phone === "") {
    phoneInp.style.border = "1.8px solid red";
    hasError = true;
  }

  if (message === "") {
    messageInp.style.border = "1.8px solid red";
    hasError = true;
  }

  if (hasError) return;

  const subject = "New message from bakery website";

  const body = `
Name: ${name}
Email: ${email}
Phone Number: ${phone}

Message:
${message}
  `;

  window.location.href =
    `mailto:jacknorman12x@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}