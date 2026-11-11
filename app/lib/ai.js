// LLM summaries via OpenRouter
export async function summarise(text) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_API_KEY}` },
    body: JSON.stringify({ model: "openrouter/auto", messages: [{ role: "user", content: text }] }),
  });
  return res.json();
}
