Deno.serve({
  port: 8872,
}, (_req) => {
  return new Response("hello world")
})