const fs = require('fs');
const { saveSemanticCache } = require('graphifyy');

const raw = fs.existsSync('.graphify/.graphify_semantic_new.json') ? JSON.parse(fs.readFileSync('.graphify/.graphify_semantic_new.json', 'utf-8')) : {nodes:[],edges:[],hyperedges:[]};
const saved = saveSemanticCache(raw.nodes || [], raw.edges || [], raw.hyperedges || []);
console.log(`Cached ${saved} files`);

const cached = fs.existsSync('.graphify/.graphify_cached.json') ? JSON.parse(fs.readFileSync('.graphify/.graphify_cached.json', 'utf-8')) : {nodes:[],edges:[],hyperedges:[]};
const allNodes = cached.nodes.concat(raw.nodes || []);
const allEdges = cached.edges.concat(raw.edges || []);
const allHyperedges = (cached.hyperedges || []).concat(raw.hyperedges || []);
const seen = new Set();
const deduped = [];
for (const n of allNodes) { if (!seen.has(n.id)) { seen.add(n.id); deduped.push(n); } }

const merged = {
    nodes: deduped,
    edges: allEdges,
    hyperedges: allHyperedges,
    input_tokens: raw.input_tokens || 0,
    output_tokens: raw.output_tokens || 0,
};
fs.writeFileSync('.graphify/.graphify_semantic.json', JSON.stringify(merged, null, 2));
console.log(`Extraction complete - ${deduped.length} nodes, ${allEdges.length} edges (${cached.nodes.length} from cache, ${(raw.nodes||[]).length} new)`);
