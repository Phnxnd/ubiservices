import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/hello")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const name = url.searchParams.get("name") ?? "world";
        return Response.json({ message: `Hello, ${name}!` });
      },
    },
  },
});
