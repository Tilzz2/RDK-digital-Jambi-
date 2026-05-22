(async () => {
const fs = require('fs');
const { collectFiles, extract } = require('graphifyy');

const detect = JSON.parse(fs.readFileSync('.graphify/.graphify_detect.json', 'utf-8'));
let codeFiles = [];
for (const f of (detect.files || {}).code || []) {
    codeFiles = codeFiles.concat(collectFiles(f));
}

if (codeFiles.length > 0) {
    const result = await extract(codeFiles);
    fs.writeFileSync('.graphify/.graphify_ast.json', JSON.stringify(result, null, 2));
    console.log(`AST: ${result.nodes.length} nodes, ${result.edges.length} edges`);
} else {
    fs.writeFileSync('.graphify/.graphify_ast.json', JSON.stringify({nodes:[],edges:[],input_tokens:0,output_tokens:0}));
    console.log('No code files - skipping AST extraction');
}
})()
