const fs = require('fs');

const ast = JSON.parse(fs.readFileSync('.graphify/.graphify_ast.json', 'utf-8'));
const sem = JSON.parse(fs.readFileSync('.graphify/.graphify_semantic.json', 'utf-8'));

const seen = new Set(ast.nodes.map(n => n.id));
const mergedNodes = [...ast.nodes];
for (const n of sem.nodes) { if (!seen.has(n.id)) { mergedNodes.push(n); seen.add(n.id); } }

const mergedEdges = ast.edges.concat(sem.edges);
const mergedHyperedges = sem.hyperedges || [];
const merged = {
    nodes: mergedNodes,
    edges: mergedEdges,
    hyperedges: mergedHyperedges,
    input_tokens: sem.input_tokens || 0,
    output_tokens: sem.output_tokens || 0,
};
fs.writeFileSync('.graphify/.graphify_extract.json', JSON.stringify(merged, null, 2));
console.log(`Merged: ${mergedNodes.length} nodes, ${mergedEdges.length} edges (${ast.nodes.length} AST + ${sem.nodes.length} semantic)`);
