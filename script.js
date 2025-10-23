async function download() {
  const url = document.getElementById("url").value;
  const format = document.getElementById("format").value;

  const response = await fetch("/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, format }),
  });

  if (response.ok) {
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "video.mp4";
    link.click();
  } else {
    const error = await response.json();
    alert("Error: " + error.error);
  }
}