window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window) return;

  if (event.data.type && event.data.type == "FROM_PAGE") {
    fetch("http://www.dcs.gla.ac.uk/~stephen/papers/interact2005_fontsize.pdf")
      .then(res => {
        console.log(res.ok);
        console.log(res.status);
        return res.blob();
      })
      .then(blob => {
        console.log(blob);
      });
    console.log("Content script received message: " + event.data.text);
  }
});
