const fs = require('fs');
const { checkSemanticCache } = require('graphifyy');

const detect = JSON.parse(fs.readFileSync('.graphify/.graphify_detect_semantic.json', 'utf-8'));
const allFiles = [
  ...((detect.files || {}).document || []),
  ...((detect.files || {}).paper || []),
  ...((detect.files || {}).image || []),
];

const [cachedNodes, cachedEdges, cachedHyperedges, uncached] = checkSemanticCache(allFiles);

if (cachedNodes.length || cachedEdges.length || cachedHyperedges.length) {
    fs.writeFileSync('.graphify/.graphify_cached.json', JSON.stringify({nodes: cachedNodes, edges: cachedEdges, hyperedges: cachedHyperedges}));
}
fs.writeFileSync('.graphify/.graphify_uncached.txt', uncached.join('\n'));
console.log(`Cache: ${allFiles.length - uncached.length} files hit, ${uncached.length} files need extraction`);
