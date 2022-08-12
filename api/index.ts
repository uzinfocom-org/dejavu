WebStorm
import { IncomingMessage, ServerResponse } from "http";

function index(_req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      paths: [
        {
          path: "/xinux",
          params: ["title"],
        },
        {
          path: "/honor",
          params: ["full_name"],
        },
      ],
    })
  );
}

export default index;
