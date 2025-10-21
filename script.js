//your code here

const radio = document.getElementById('new_Delhi');

radio.addEventListener('change', () => {
            if (radio.checked) {
                const html = `
                        <blockquote class="quote" cite="https://en.wikipedia.org/wiki/New_Delhi">New Delhi is the capital of India and an administrative district of NCT Delhi.</blockquote>
                `;
                document.body.insertAdjacentHTML('beforeend', html);
            }
        });