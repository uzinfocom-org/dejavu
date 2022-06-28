const entityMap: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

export function filterHtml(html: string | undefined) {
    html ? String(html).replace(/[&<>"'\/]/g, key => entityMap[key]) : '';
}
