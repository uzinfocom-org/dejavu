import { ParsedRequest } from "./types";
import html from "./template/html";

export function getHtml(parsedReq: ParsedRequest) {
  const { full_name } = parsedReq;
  const html_template = html(full_name);

  return html_template;
}
