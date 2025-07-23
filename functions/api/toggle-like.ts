export async function onRequest(req: Request): Promise<Response> {
  const forwarded = req.headers["cf-connecting-ip"];
  
  return new Response(JSON.stringify({ message: "Hello from backend!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
