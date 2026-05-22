# Graph Report - E:/web/RDK-digital-Jambi-  (2026-05-22)

## Corpus Check
- 51 files · ~150.733 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 68 nodes · 103 edges · 7 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output


## Input Scope
- Requested: tracked
- Resolved: tracked (source: cli)
- Included files: 51 · Candidates: 105
- Excluded: 0 untracked · 9811 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.
## God Nodes (most connected - your core abstractions)
1. `wt()` - 8 edges
2. `at()` - 5 edges
3. `Tt()` - 5 edges
4. `kt()` - 5 edges
5. `lt()` - 4 edges
6. `ct()` - 4 edges
7. `mt()` - 4 edges
8. `yt()` - 4 edges
9. `I()` - 4 edges
10. `ln()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `mt()` --calls--> `k()`  [EXTRACTED]
  E:/web/RDK-digital-Jambi-/backup/js/jquery-1.10.2.js → E:/web/RDK-digital-Jambi-/backup/js/jquery-1.10.2.js  _Bridges community 6 → community 8_
- `wt()` --calls--> `lt()`  [EXTRACTED]
  E:/web/RDK-digital-Jambi-/backup/js/jquery-1.10.2.js → E:/web/RDK-digital-Jambi-/backup/js/jquery-1.10.2.js  _Bridges community 1 → community 3_
- `Tt()` --calls--> `yt()`  [EXTRACTED]
  E:/web/RDK-digital-Jambi-/backup/js/jquery-1.10.2.js → E:/web/RDK-digital-Jambi-/backup/js/jquery-1.10.2.js  _Bridges community 1 → community 6_

## Communities

### Community 1 - "Community 1"
Cohesion: 0.2
Nodes (11): an(), bt(), gn(), I(), Nt(), R(), sn(), Tt() (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (2): clearMenus(), getParent()

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (7): ct(), ht(), lt(), M(), ot(), qt(), xt()

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (6): ln(), nn(), nr(), rn(), un(), zn()

### Community 6 - "Community 6"
Cohesion: 0.6
Nodes (5): at(), F(), kt(), mt(), yt()

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (3): er(), Kn(), tr()

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (3): k(), Mn(), on()

## Knowledge Gaps
- **Thin community `Community 2`** (2 nodes): `clearMenus()`, `getParent()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `wt()` connect `Community 1` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `Tt()` connect `Community 1` to `Community 0`, `Community 6`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `at()` connect `Community 6` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._