import { IncomingMessage, ServerResponse } from "http";

function index (_req: IncomingMessage, res: ServerResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Uzinfocom open graph image generator<h1/>')
}

export default index;
