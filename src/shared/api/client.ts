import ky from "ky";

export const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api",
  credentials: "include",
  hooks: {
    beforeRequest: [
      (request) => request.headers.set("x-client-surface", "opsbridge-fe"),
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 401) {
          await ky.post("http://localhost:8000/api/auth/refresh", { credentials: "include" });
        }
      },
    ],
  },
});
