async function askAI() {
  const msg = document.getElementById("msg").value;

  const res = await fetch("/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  document.getElementById("reply").innerText = data.reply;
}

// Fake people list (later Firebase)
document.getElementById("peopleList").innerHTML = `
<li>Ali (Online)</li>
<li>Sara (Offline)</li>
<li>Ahmed (VIP)</li>
`;