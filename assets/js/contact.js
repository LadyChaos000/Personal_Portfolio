/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    constactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9ngbtsj','template_y4btrvq','#contact-form','uizR_lNzTUx92p1PN')
        .then(() => {
            //Show sent message
            constactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                constactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            constactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)
