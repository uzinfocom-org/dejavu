import { ParsedRequest } from "./types";
import { filterHtml } from "./filterHtml";

export function getHtml (parsedReq: ParsedRequest) {
    const { full_name } = parsedReq;

    const html = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> ${filterHtml(full_name)} </title>
</head>
<style> h1 { color: red } </style>
<body>

    <h1> ${filterHtml(full_name)} <h1/>
</body>
</html>
    `

    return html;
}
