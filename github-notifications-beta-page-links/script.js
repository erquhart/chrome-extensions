runWhenReady(fixLinks)
onTreeChange(fixLinks)

function fixLinks() {
  const getLink = ariaLabel => document.querySelector(`a[aria-label="${ariaLabel}"]`)
  const fixLink = ariaLabel => {
    const link = getLink(ariaLabel)
    if (!link) return
    link.setAttribute('href', link.href.replace('notifications?', 'notifications/beta?'))
  }
  fixLink('Previous')
  fixLink('Next')
}

function onTreeChange(fn) {
  const observer = new MutationObserver(() => fn())
  observer.observe(document, { childList: true, subtree: true })
}

function runWhenReady(fn) {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      fn()
    }
  }, 50)
}