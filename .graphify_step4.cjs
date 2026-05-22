const fs = require('fs');
const { buildFromJson } = require('graphifyy');
const { cluster, scoreAll } = require('graphifyy');
const { godNodes, surprisingConnections, suggestQuestions } = require('graphifyy');
const { generateReport } = require('graphifyy');
const { toJson } = require('graphifyy');
const { toHtml } = require('graphifyy');

const extraction = JSON.parse(fs.readFileSync('.graphify/.graphify_extract.json', 'utf-8'));
const detection = JSON.parse(fs.readFileSync('.graphify/.graphify_detect.json', 'utf-8'));

const G = buildFromJson(extraction);
const communities = cluster(G);
const cohesion = scoreAll(G, communities);
const tokens = {input: extraction.input_tokens || 0, output: extraction.output_tokens || 0};
const gods = godNodes(G);
const surprises = surprisingConnections(G, communities);
const labels = new Map(Array.from(communities.keys(), cid => [cid, 'Community ' + cid]));
const questions = suggestQuestions(G, communities, labels);

const report = generateReport(G, communities, cohesion, labels, gods, surprises, detection, tokens, 'E:/web/RDK-digital-Jambi-', {suggestedQuestions: questions});
fs.writeFileSync('.graphify/GRAPH_REPORT.md', report);
toJson(G, communities, '.graphify/graph.json');
toHtml(G, Object.fromEntries(communities), '.graphify/graph.html');

const analysis = {
    communities: Object.fromEntries(Array.from(communities.entries(), ([k, v]) => [String(k), v])),
    cohesion: Object.fromEntries(Array.from(cohesion.entries(), ([k, v]) => [String(k), v])),
    gods,
    surprises,
    questions,
};
fs.writeFileSync('.graphify/.graphify_analysis.json', JSON.stringify(analysis, null, 2));

console.log(`Graph: ${G.order} nodes, ${G.size} edges, ${communities.size} communities`);
