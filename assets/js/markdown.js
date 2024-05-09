/* Renders work packages contents from markdown files */
function processMarkdown(dir, fn) {
fetch(`${dir}/${fn}.md`)
    .then(response => response.text())
    .then(mdString => converter.makeHtml(mdString))
    .then(htmlString => $(`#view-${fn}`).html(htmlString));
}

var converter = new showdown.Converter();
converter.setOption('simplifiedAutoLink', true);
converter.setOption('tables', true);

/* Be careful of hardcoded variables here */
const workstream_files = ["ws1", "ws2", "ws3", "ws4", "ws5"] 
workstream_files.forEach(fn => processMarkdown("other_data/work_streams/", fn))