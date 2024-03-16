

const scriptURL = 'https://script.google.com/macros/s/AKfycbzJrmfbtH9mxDjgRt31ovJrBWXvrSGLu9gy_G-ywao6eHTMVHrfJ8a1w-pCGCw2DHhUvA/exec'

const form = document.forms['form-sfide']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("La tua sfida è stata inserita." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})