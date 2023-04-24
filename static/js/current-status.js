fetch("https://status.cafe/users/jovannmc/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      document.getElementById("statuscafe-mobile-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/jovannmc" target="_blank">' + r.author + '</a> ' + r.face + ' ' + r.timeAgo
    document.getElementById("statuscafe-content").innerHTML = r.content
    document.getElementById("statuscafe-mobile-username").innerHTML = '<a href="https://status.cafe/users/jovannmc" target="_blank">' + r.author + '</a> ' + r.face + ' ' + r.timeAgo
    document.getElementById("statuscafe-mobile-content").innerHTML = r.content
  })
