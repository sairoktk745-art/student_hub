import fetch from "node-fetch";

export async function askAI(message) {
  const response = await fetch(
    "https://api.anthropic.com/v1/messages",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-3-opus",
        max_tokens: 300,
        messages: [{ role: "user", content: message }]
      })
    }
  );

  const data = await response.json();
  return data.content[0].text;
}