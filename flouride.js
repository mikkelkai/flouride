document.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    if (window.location.origin === new window.URL(e.target.href).origin) {
      e.preventDefault()
      window.fetch(e.target.href)
        .then(e => e.text())
        .then(res => {
          document.write(res)
          window.history.pushState({}, '', e.target.href)
        })
        .catch(() => {
          window.location = e.target.href
        })
    }
  }
}
)
