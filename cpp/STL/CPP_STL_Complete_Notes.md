# C++ STL — Complete Notes for DSA & Competitive Programming
*Hinglish + English | Time Complexity | Tricks | LeetCode Patterns | Practice Sets (Basic → Medium → Advanced)*

> Is guide ko ek baar dhang se padh aur saath mein practice questions solve kar — phir STL ka koi bhi question dimaag se nahi nikalega. Har topic same structure follow karta hai:
> **Concept (Hinglish) → Syntax/Code → Time Complexity → Tricks & Gotchas → DSA/CP Use Cases → LeetCode Pattern Recognition → Practice Questions (Basic / Medium / Advanced)**

---

## Topic 1: Pairs

**Kya hai / What it is:**
`pair` ek simple container hai jo do values ko ek unit mein bandh ke rakhta hai — same type ho ya different type, koi farak nahi padta. Jab bhi tumhe 2 related values ek saath store/pass/return karne ho (jaise coordinate `(x, y)`, ya `(value, index)`), pair use karo. 3+ values chahiye to pairs ko nest kar sakte ho, ya `tuple` use karo.

```cpp
pair<int, int> p = {1, 2};
cout << p.first << " " << p.second;          // 1 2

// Nested pair for 3 values
pair<int, pair<int,int>> nested = {1, {2, 3}};
cout << nested.second.first;                  // 2

// Vector of pairs — very common pattern
vector<pair<int,int>> v = {{1,2},{3,4}};

// C++17 structured binding — clean unpacking
auto [a, b] = p;
```

**Time Complexity:** Creation, `.first`/`.second` access, assignment — all **O(1)**.

**Tricks & Gotchas:**
- `make_pair(a,b)` aur `{a,b}` dono kaam karte hain — `{}` cleaner hai, modern C++ mein prefer karo.
- Pairs **default sort** `.first` ke basis pe hote hain, tie hone par `.second` pe (lexicographic). Ye property bahut interviews/CP mein use hoti hai bina custom comparator likhe.
- `auto [a,b] = p;` se structured binding karke directly variables mein unpack karo — code clean rehta hai.
- Pair ko map ki value/key bhi bana sakte ho jab composite key/value chahiye ho.

**DSA / CP Use Cases:**
- Sort array but **remember original index** — `pair<value, index>` banao, sort karo, original index abhi bhi mil jayega.
- Graph adjacency list with weights: `vector<pair<int,int>> adj[N]` → (neighbor, weight).
- Interval/scheduling problems: `pair<start, end>`.
- Dijkstra/Prim's: `priority_queue<pair<int,int>>` → (distance, node).

**LeetCode Pattern Recognition:**
- "Sort but track original position" → `pair<val, idx>` + sort.
- Weighted graphs → edges as pairs/tuples.
- Interval merging/scheduling → `pair<start,end>` + sort by `.first`.

**Practice Questions:**

*Basic:*
1. Given an array, create `pair<value, index>` for each element, sort by value, print original indices in new order.
2. Given two arrays `a[]` and `b[]`, form pairs `(a[i], b[i])`, sort by sum descending.
3. Find the pair with maximum absolute difference using a vector of pairs.

*Medium:*
1. LeetCode 56 — Merge Intervals (vector<pair<int,int>>)
2. LeetCode 973 — K Closest Points to Origin (pair<distance, point>)
3. LeetCode 1899 — Merge Triplets to Form Target Triplet

*Advanced:*
1. LeetCode 759 — Employee Free Time (interval pairs + sweep)
2. Dijkstra's Shortest Path — classic CP problem using `priority_queue<pair<int,int>>`
3. LeetCode 218 — The Skyline Problem (pair-based sweep line)

---

## Topic 2: Vectors

**Kya hai / What it is:**
Vector ek **dynamic array** hai — size runtime pe badh/ghat sakta hai, aur ye contiguous memory mein stored hota hai (isliye array jaisi fast random access milti hai: `v[i]` in O(1)). Yeh STL ka sabse zyada use hone wala container hai — 90% DSA solutions mein vector dikhega.

```cpp
vector<int> v;                  // empty vector
vector<int> v(5);               // size 5, all 0
vector<int> v(5, 100);          // size 5, all 100
vector<int> v2(v);              // copy of v
vector<vector<int>> grid(n, vector<int>(m, 0)); // 2D vector

v.push_back(10);                // add at end
v.emplace_back(10);             // same but constructs in-place (faster, no temp object)

v[i];  v.at(i);                 // access (at() does bounds checking, throws exception)

// Iterators
v.begin(), v.end();             // forward
v.rbegin(), v.rend();           // reverse

v.erase(v.begin()+2);                 // erase single element at index 2
v.erase(v.begin()+1, v.begin()+4);    // erase range [1,4)
v.insert(v.begin()+2, 50);            // insert 50 at index 2
v.insert(v.begin()+2, 3, 50);         // insert three 50s at index 2

v.size(); v.pop_back(); v.clear(); v.empty(); v.swap(v2);
```

**Time Complexity:**
| Operation | Complexity |
|---|---|
| Access `v[i]` | O(1) |
| `push_back` / `emplace_back` (amortized) | O(1) |
| `pop_back` | O(1) |
| `insert(pos, val)` | O(n) (shifts elements) |
| `erase(pos)` | O(n) (shifts elements) |
| `size`, `empty`, `clear`* | O(1) (*clear is O(n) for destructors but usually treated O(1) practically for ints) |
| Linear search | O(n) |

**Tricks & Gotchas:**
- `emplace_back` > `push_back` for objects/pairs — avoids creating a temporary object. For plain ints, difference is negligible, but habit-banao.
- Vector resizing doubles capacity internally → that's why push_back is **amortized O(1)**, not always O(1) — occasional O(n) resize hidden inside.
- `v.reserve(n)` pehle se call kar do agar size pata hai — resizing ka overhead bachega. Bahut helpful in CP for performance.
- 2D vector banate time `vector<vector<int>> grid(n, vector<int>(m,0))` — yaad rakhna `n` rows, `m` columns.
- `erase`/`insert` baar baar middle mein karna ho to **vector avoid karo, list use karo** (O(1) vs O(n)).

**DSA / CP Use Cases:**
- Almost every array-based DSA problem: sliding window, two pointers, prefix sum, sorting, binary search on vector.
- Adjacency list representation of graphs.
- DP tables (`vector<vector<int>> dp`).
- Storing intermediate results when array size is unknown beforehand.

**LeetCode Pattern Recognition:**
- Default container choice jab tak koi specific need (LIFO/FIFO/sorted/unique) na ho.
- Two-pointer / sliding window problems almost always vector pe operate karte hain.
- Jab "in-place modify" + "dynamic size" dono chahiye ho → vector hi best.

**Practice Questions:**

*Basic:*
1. LeetCode 1 — Two Sum (vector traversal + hashmap)
2. LeetCode 26 — Remove Duplicates from Sorted Array (in-place vector manipulation)
3. Reverse a vector using `rbegin()`/`rend()` without extra space.

*Medium:*
1. LeetCode 15 — 3Sum (two pointer on sorted vector)
2. LeetCode 238 — Product of Array Except Self
3. LeetCode 169 — Majority Element (Moore's voting on vector)

*Advanced:*
1. LeetCode 42 — Trapping Rain Water (two-pointer/prefix-suffix on vector)
2. LeetCode 4 — Median of Two Sorted Arrays (binary search across vectors)
3. LeetCode 84 — Largest Rectangle in Histogram (monotonic stack over vector)

---

## Topic 3: Lists & Deques

**Kya hai / What it is:**
`list` ek **doubly linked list** hai — har element ke paas previous aur next ka pointer hota hai. Isliye front/back/middle insertion-deletion **O(1)** hai (vector mein middle insert O(n) hota hai), lekin random access `l[i]` jaisa kuch nahi hai — list mein index se access nahi hota, sirf iterators se traverse karna padta hai.

`deque` (double-ended queue) ek hybrid hai — vector jaisi random access bhi deta hai AND front/back par O(1) insert/delete bhi deta hai. Internally ye chunks of arrays use karta hai.

```cpp
list<int> l;
l.push_back(10); l.push_front(5);   // both O(1)!
l.pop_back(); l.pop_front();
l.insert(it, 100);                  // O(1) if you have the iterator
l.erase(it);

deque<int> dq;
dq.push_back(1); dq.push_front(2);  // both O(1)
dq.pop_back(); dq.pop_front();
dq[2];                              // O(1) random access — list won't give you this!
```

**Time Complexity:**
| Operation | list | deque | vector |
|---|---|---|---|
| push/pop front | O(1) | O(1) | O(n) |
| push/pop back | O(1) | O(1) | O(1) |
| Random access `[i]` | ❌ Not Available | O(1) | O(1) |
| Insert/erase in middle (with iterator) | O(1) | O(n) | O(n) |

**Tricks & Gotchas:**
- List mein index se access **nahi** hota — `l[2]` compile hi nahi hoga. Sirf iterator se hi traverse karo.
- Deque ka use karo jab tumhe "sliding window" type problems mein dono end se fast insert/delete chahiye ho — list se zyada cache-friendly bhi hai (vector jaisa memory layout).
- 99% CP problems mein `deque` use hota hai (sliding window maximum jaisa), `list` rarely use hota hai because random access ki zaroorat almost always padti hai.

**DSA / CP Use Cases:**
- **Deque → Sliding Window Maximum/Minimum** — classic monotonic deque pattern.
- Deque → implementing both Stack and Queue with same structure.
- List → LRU Cache implementation (along with unordered_map) — fast O(1) removal from middle.

**LeetCode Pattern Recognition:**
- "Find max/min in every window of size k" → **monotonic deque**.
- "Design a data structure with O(1) get/put and eviction" → list + hashmap (LRU Cache).

**Practice Questions:**

*Basic:*
1. Implement push_front/push_back/pop_front/pop_back using `deque` and print result.
2. Reverse a `list` using iterators only (no extra array).
3. Use deque to check if a sequence is a palindrome (compare front/back, pop both ends).

*Medium:*
1. LeetCode 239 — Sliding Window Maximum (monotonic deque)
2. LeetCode 862 — Shortest Subarray with Sum at Least K (deque + prefix sum)
3. LeetCode 933 — Number of Recent Calls (deque as sliding window counter)

*Advanced:*
1. LeetCode 146 — LRU Cache (list + unordered_map, O(1) get/put)
2. LeetCode 1438 — Longest Continuous Subarray With Absolute Diff ≤ Limit (two monotonic deques)
3. LeetCode 460 — LFU Cache (multiple lists/maps combined — hard but great practice)

---

## Topic 4: Stacks

**Kya hai / What it is:**
Stack ek **LIFO (Last-In-First-Out)** structure hai — jo element sabse last mein gaya, wahi sabse pehle bahar aayega. Socho ek plates ka dher — jo plate sabse upar rakhi, wahi pehle uthayi jaayegi. STL ka `stack` internally `deque` pe based hota hai by default.

```cpp
stack<int> st;
st.push(10);
st.top();      // see top element, O(1)
st.pop();      // remove top, O(1) — note: pop() doesn't return value!
st.empty();
st.size();
```

**Time Complexity:** push, pop, top, empty, size — sab **O(1)**. Random access **possible nahi hai** (no `st[i]`).

**Tricks & Gotchas:**
- `pop()` koi value return **nahi** karta — agar value chahiye to pehle `top()` call karo, phir `pop()`.
- Stack overflow ka concept yahin se aata hai — recursive function calls bhi internally ek "call stack" use karte hain (DFS recursion ↔ explicit stack equivalent hote hain).
- **Monotonic Stack** ek bahut important pattern hai — stack mein elements ko increasing ya decreasing order mein maintain karna, jab bhi "next greater/smaller element" type question dikhe, isi pe jump karo.

**DSA / CP Use Cases:**
- Balanced parentheses / expression validation.
- **Next Greater/Smaller Element** pattern — monotonic stack.
- Converting recursive DFS to iterative using explicit stack.
- Expression evaluation (infix→postfix, postfix evaluation).
- Histogram-based area problems.

**LeetCode Pattern Recognition:**
- "Next greater/smaller element" / "previous greater/smaller" → **monotonic stack**, almost always O(n) trick instead of O(n²) brute force.
- "Valid parentheses / matching brackets" → stack.
- "Largest rectangle / histogram" → monotonic stack with index tracking.
- Iterative tree/graph traversal (when recursion depth is a concern) → explicit stack.

**Practice Questions:**

*Basic:*
1. LeetCode 20 — Valid Parentheses
2. LeetCode 1614 — Maximum Nesting Depth of the Parentheses
3. Reverse a string using a stack.

*Medium:*
1. LeetCode 739 — Daily Temperatures (monotonic stack — next greater element)
2. LeetCode 503 — Next Greater Element II (circular array + stack)
3. LeetCode 155 — Min Stack (design with O(1) getMin)

*Advanced:*
1. LeetCode 84 — Largest Rectangle in Histogram (monotonic stack, hard)
2. LeetCode 42 — Trapping Rain Water (stack-based approach)
3. LeetCode 224 — Basic Calculator (expression evaluation with stack)

---

## Topic 5: Queues

**Kya hai / What it is:**
Queue ek **FIFO (First-In-First-Out)** structure hai — jo pehle aaya, wahi pehle jaayega. Socho ek line/queue mein lage log — jo pehle line mein lagega, wahi pehle service paayega. BFS traversal ka backbone yahi hai.

```cpp
queue<int> q;
q.push(10);     // add to back
q.front();      // see front element
q.back();       // see back element
q.pop();        // remove from front, O(1)
q.empty(); q.size();
```

**Time Complexity:** push, pop, front, back — sab **O(1)**.

**Tricks & Gotchas:**
- Queue mein `pop()` value return nahi karta — `front()` se value lo, phir `pop()` karo.
- BFS mein queue hi use hoti hai (DFS mein stack/recursion) — yeh sabse common interview confusion point hai, yaad rakh: **BFS = Queue, DFS = Stack/Recursion**.
- `priority_queue` is technically a different beast (next topic) — normal `queue` strictly FIFO hai, no ordering by value.

**DSA / CP Use Cases:**
- **BFS** in graphs/trees (level order traversal, shortest path in unweighted graph).
- Multi-source BFS (rotten oranges type problems).
- Implementing producer-consumer / task scheduling simulations.
- Circular queue → buffer management problems.

**LeetCode Pattern Recognition:**
- "Shortest path in unweighted graph/grid" → BFS with queue.
- "Level order traversal of tree" → queue.
- "Minimum steps/operations to reach a state" → BFS with queue (state-space search).

**Practice Questions:**

*Basic:*
1. LeetCode 232 — Implement Queue using Stacks
2. LeetCode 102 — Binary Tree Level Order Traversal
3. Simulate a circular queue with fixed size using array/queue.

*Medium:*
1. LeetCode 994 — Rotting Oranges (multi-source BFS)
2. LeetCode 542 — 01 Matrix (multi-source BFS)
3. LeetCode 1091 — Shortest Path in Binary Matrix

*Advanced:*
1. LeetCode 127 — Word Ladder (BFS over word transformations)
2. LeetCode 815 — Bus Routes (BFS over graph of routes)
3. LeetCode 1293 — Shortest Path in a Grid with Obstacles Elimination (BFS + state tracking)

---

## Topic 6: Priority Queues (Heaps)

**Kya hai / What it is:**
`priority_queue` ek **heap** hai — by default **max-heap**, matlab sabse bada element hamesha top pe milega. Internally ye binary heap pe based hota hai (array representation). Jab bhi "sabse bada/chota element baar baar nikalna ho efficiently" wala kaam ho, priority_queue use karo.

```cpp
priority_queue<int> pq;                       // max-heap (default)
pq.push(10); pq.top(); pq.pop();

priority_queue<int, vector<int>, greater<int>> minHeap;  // min-heap

// Priority queue of pairs (very common in graph algos)
priority_queue<pair<int,int>> pq2;            // max-heap by pair (sorts by .first then .second)
priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> minPQ; // min-heap of pairs
```

**Time Complexity:**
| Operation | Complexity |
|---|---|
| push | O(log n) |
| pop | O(log n) |
| top | O(1) |
| Building heap from n elements | O(n) |

**Tricks & Gotchas:**
- Default priority_queue = **max-heap**. Min-heap banane ke liye `greater<int>` use karo with explicit container type — syntax yaad karo: `priority_queue<int, vector<int>, greater<int>>`.
- Trick to make min-heap without writing the full template: push negative values into a max-heap (`pq.push(-x)`), then negate again when popping. Quick CP hack.
- `priority_queue<pair<int,int>>` sorts by `.first` primarily — bahut useful for Dijkstra: push `{-distance, node}` in a max-heap to simulate min-heap behavior, OR just declare a min-heap directly with `greater<>`.
- Custom comparator for priority_queue with custom objects/structs — define `operator<` overload, or pass a comparator struct/lambda.

**DSA / CP Use Cases:**
- **Dijkstra's Algorithm** — min-heap of (distance, node).
- **Kth largest/smallest element** problems — maintain heap of size k.
- **Merge K sorted lists/arrays** — min-heap of (value, list_index, element_index).
- Median-finding / running median (two heaps: max-heap for lower half, min-heap for upper half).
- Huffman Encoding, scheduling problems (always pick min/max next task).

**LeetCode Pattern Recognition:**
- "Find Kth largest/smallest" → maintain a heap of size K.
- "Merge K sorted structures" → min-heap with K pointers.
- "Running median / median of data stream" → two heaps technique.
- "Greedy: always process smallest/largest task next" → priority_queue.

**Practice Questions:**

*Basic:*
1. LeetCode 215 — Kth Largest Element in an Array
2. LeetCode 1046 — Last Stone Weight (max-heap simulation)
3. Build a min-heap from scratch and demonstrate push/pop.

*Medium:*
1. LeetCode 347 — Top K Frequent Elements (heap + hashmap)
2. LeetCode 973 — K Closest Points to Origin
3. LeetCode 621 — Task Scheduler (greedy + max-heap)

*Advanced:*
1. LeetCode 23 — Merge K Sorted Lists (min-heap of K pointers)
2. LeetCode 295 — Find Median from Data Stream (two heaps)
3. LeetCode 1631 — Path With Minimum Effort (Dijkstra-style with priority_queue)

---

## Topic 7: Sets & Multisets

**Kya hai / What it is:**
`set` ek container hai jo elements ko **sorted order** mein aur **strictly unique** rakhta hai — duplicate insert karo to koi effect nahi hoga. Internally ye **Red-Black Tree (self-balancing BST)** pe based hota hai, isliye saari operations O(log n) mein hoti hain.

`multiset` same hai but duplicates allow karta hai — sorted order maintain karta hai, just unique-ness ki guarantee nahi.

```cpp
set<int> s;
s.insert(10); s.insert(5); s.insert(10);  // duplicate ignored, set: {5, 10}
s.erase(10);
s.find(5);              // returns iterator, s.end() if not found
s.count(5);             // 0 or 1 for set

auto it = s.lower_bound(5);   // first element >= 5
auto it2 = s.upper_bound(5);  // first element > 5

multiset<int> ms;
ms.insert(5); ms.insert(5);   // both stay, ms: {5, 5}
ms.erase(ms.find(5));         // erases ONE occurrence (careful: ms.erase(5) removes ALL!)
ms.count(5);                  // returns count of occurrences
```

**Time Complexity:**
| Operation | set / multiset |
|---|---|
| insert | O(log n) |
| erase (by value) | O(log n) |
| find | O(log n) |
| lower_bound / upper_bound | O(log n) |
| Iteration (gives sorted order) | O(n) |

**Tricks & Gotchas:**
- **BIGGEST TRAP**: `ms.erase(value)` multiset mein **saare occurrences** delete kar deta hai! Ek hi occurrence delete karna ho to `ms.erase(ms.find(value))` use karo.
- `set` mein khud `find()` use karo, `std::find()` algorithm use mat karo — algorithm wala O(n) hoga, member function wala O(log n).
- `*s.begin()` = smallest element, `*s.rbegin()` = largest element — ek hi line mein min/max mil jata hai bina explicit loop ke.
- `lower_bound`/`upper_bound` set mein bahut powerful hain — "find smallest element ≥ x" type queries O(log n) mein solve ho jaati hain.

**DSA / CP Use Cases:**
- Maintaining a sorted dynamic collection while doing frequent insert/delete/search.
- Finding nearest greater/smaller element from a dynamic set (using lower_bound/upper_bound).
- Removing duplicates while keeping sorted order automatically.
- Multiset → maintaining a sliding window where you need sorted order + duplicates + fast removal.

**LeetCode Pattern Recognition:**
- "Maintain a sorted structure with dynamic insert/delete" → set/multiset.
- "Find closest value to x in a dynamic collection" → `lower_bound` on set.
- "Range queries on dynamic sorted data" → set + lower_bound/upper_bound combo.

**Practice Questions:**

*Basic:*
1. Remove duplicates from an array and print in sorted order using a set.
2. LeetCode 217 — Contains Duplicate (variant using set)
3. Find the smallest element ≥ x in a dynamic set using `lower_bound`.

*Medium:*
1. LeetCode 220 — Contains Duplicate III (multiset + sliding window)
2. LeetCode 846 — Hand of Straights (multiset greedy)
3. LeetCode 729 — My Calendar I (set for interval overlap checking)

*Advanced:*
1. LeetCode 480 — Sliding Window Median (multiset + two iterators)
2. LeetCode 1606 — Find Servers That Handled Most Number of Requests (multiset/ordered structure)
3. LeetCode 218 — The Skyline Problem (multiset-based sweep line variant)

---

## Topic 8: Unordered Sets

**Kya hai / What it is:**
`unordered_set` bhi unique elements store karta hai, lekin **sorted order maintain nahi karta** — internally ye **hash table** use karta hai. Iska fayda yeh hai ki average case mein insert/find/erase **O(1)** hota hai (set ke O(log n) se faster).

```cpp
unordered_set<int> us;
us.insert(10);
us.find(10);     // O(1) average
us.erase(10);
us.count(10);    // 0 or 1
```

**Time Complexity:**
| Operation | Average Case | Worst Case |
|---|---|---|
| insert/find/erase | O(1) | O(n) (rare, hash collisions) |

**Tricks & Gotchas:**
- Jab order/sorting **important nahi hai**, sirf "membership check" karna hai (is x present or not) → unordered_set use karo, set se faster hota hai.
- Worst case O(n) tab aata hai jab hash collisions zyada ho jaayein — competitive programming mein kabhi kabhi adversarial test cases unordered_set ko deliberately slow kar dete hain (anti-hash test cases) — agar TLE aaye to set try karo.
- Custom objects/structs ke liye unordered_set use karna ho to custom hash function define karni padti hai — thoda extra kaam.
- Set vs Unordered Set decision: **"Order chahiye?"** → set. **"Sirf fast lookup chahiye?"** → unordered_set.

**DSA / CP Use Cases:**
- Fast membership checking — "has this element been seen before?"
- Detecting duplicates in O(n) overall time.
- Used heavily in graph problems for "visited" tracking (though usually `vector<bool>` is preferred there for speed when nodes are 0 to n-1).
- Set operations: union, intersection, difference of two collections.

**LeetCode Pattern Recognition:**
- "Check if element exists" / "have we seen this before" → unordered_set, O(1) lookup.
- "Find longest consecutive sequence" → unordered_set membership trick.
- Two-array intersection/union problems.

**Practice Questions:**

*Basic:*
1. LeetCode 217 — Contains Duplicate (using unordered_set)
2. LeetCode 349 — Intersection of Two Arrays
3. Check if a string has all unique characters using unordered_set.

*Medium:*
1. LeetCode 128 — Longest Consecutive Sequence (unordered_set, O(n) trick)
2. LeetCode 287 — Find the Duplicate Number (set-based approach, then try without extra space)
3. LeetCode 1248 — Count Number of Nice Subarrays (prefix + hashing pattern)

*Advanced:*
1. LeetCode group: anti-hash test cases — research why unordered_set can TLE in CP and how to defend (custom hash / use set instead)
2. LeetCode 332 — Reconstruct Itinerary (multiset/unordered structures + Eulerian path)
3. LeetCode 1948 — Delete Duplicate Folders in System (hashing + tree serialization)

---

## Topic 9: Maps, Multimaps & Unordered Maps

**Kya hai / What it is:**
`map` ek **key-value** container hai jo keys ko **sorted order** mein, **unique** rakhta hai (Red-Black Tree based, jaise set). `multimap` same hai but duplicate keys allowed hain. `unordered_map` hash-table based hai — order nahi maintain karta but average O(1) operations deta hai (jaise unordered_set).

```cpp
map<string,int> m;
m["apple"] = 5;             // insert/update
m.insert({"banana", 3});
m["apple"]++;                // if key doesn't exist, creates with 0 then increments — careful!

if (m.find("apple") != m.end()) { /* exists */ }   // safe check, doesn't create entry
m.count("apple");           // 0 or 1
m.erase("apple");

for (auto &[key, val] : m) cout << key << " " << val;   // iterates in SORTED key order

unordered_map<string,int> um;   // same syntax, NO sorted order, but O(1) average ops

multimap<string,int> mm;
mm.insert({"a", 1}); mm.insert({"a", 2});  // both stay
```

**Time Complexity:**
| Operation | map / multimap | unordered_map |
|---|---|---|
| insert/find/erase | O(log n) | O(1) average, O(n) worst |
| Iteration order | Sorted by key | No guaranteed order |

**Tricks & Gotchas:**
- **Biggest trap**: `m["key"]` agar key exist nahi karta to **automatically create kar deta hai** with default value (0 for int) — agar tum sirf check karna chahte ho ki key exist karti hai ya nahi, `m[]` use mat karo, `m.find()` ya `m.count()` use karo, warna accidentally entries create ho jayengi.
- `map` mein iteration **sorted key order** mein hoti hai — frequency counting + "process in sorted order" dono ek saath chahiye ho to map perfect hai.
- `unordered_map` "frequency counting" ke liye fastest hai jab order matter nahi karta — most common pattern in DSA (`unordered_map<int,int> freq;`).
- `m["apple"]++` ek bahut common one-liner hai for frequency counting — pehli baar 0 se start hota hai automatically.

**DSA / CP Use Cases:**
- **Frequency counting** — characters, elements, words (`unordered_map<char,int>`).
- **Two Sum pattern** — store value→index mapping for O(n) lookup.
- Grouping problems (Anagrams, etc.) — map from a "signature" to list of items.
- Graph representation with non-integer/sparse node labels.
- `map` specifically when you need sorted-key iteration (e.g., time-based event processing).

**LeetCode Pattern Recognition:**
- "Count frequency of elements" → `unordered_map<T,int>`.
- "Have I seen value X before, and at what index?" → unordered_map for O(n) Two Sum style solutions.
- "Group elements by some computed key" → map of key → vector of elements.
- "Process events/elements in sorted key order" → use `map` (not unordered_map).

**Practice Questions:**

*Basic:*
1. LeetCode 1 — Two Sum (unordered_map value→index)
2. LeetCode 242 — Valid Anagram (frequency map)
3. Count frequency of each word in a sentence using unordered_map.

*Medium:*
1. LeetCode 49 — Group Anagrams (map of sorted-string → list)
2. LeetCode 3 — Longest Substring Without Repeating Characters (map + sliding window)
3. LeetCode 380 — Insert Delete GetRandom O(1) (unordered_map + vector combo)

*Advanced:*
1. LeetCode 146 — LRU Cache (unordered_map + list combo)
2. LeetCode 295 — Find Median from Data Stream (can combine with maps in some variants)
3. LeetCode 1218 — Longest Arithmetic Subsequence of Given Difference (map-based DP)

---

## Topic 10: Sorting & Custom Comparators

**Kya hai / What it is:**
`sort()` STL ka built-in sorting function hai — internally **Introsort** (Quicksort + Heapsort + Insertion sort hybrid) use karta hai, jisse average aur worst case dono mein good performance milti hai. Custom sorting order chahiye ho (jaise descending, ya kisi specific field pe) to **comparator function** likhte hain.

```cpp
vector<int> v = {5,2,8,1};
sort(v.begin(), v.end());                 // ascending (default)
sort(v.begin(), v.end(), greater<int>());  // descending

// Custom comparator for pairs — sort by second element ascending,
// if tie then first element descending
bool cmp(pair<int,int> &p1, pair<int,int> &p2) {
    if (p1.second != p2.second) return p1.second < p2.second;
    return p1.first > p2.first;
}
sort(v.begin(), v.end(), cmp);

// Lambda version (modern, inline)
sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
```

**Time Complexity:** `sort()` → **O(n log n)** average and worst case. `stable_sort()` → O(n log n) but preserves relative order of equal elements (useful when stability matters).

**Tricks & Gotchas:**
- Comparator function must return **true if first argument should come before second** — mentally fix two instances `p1` and `p2`, ask "is p1 supposed to come before p2?" and return accordingly. Ye exact mindset interview mein bhi bolna chahiye.
- Galat comparator likhne se **undefined behavior** ho sakta hai (crash bhi ho sakta hai) — comparator must define a strict weak ordering (no `<=`, use strict `<`/`>`).
- `sort()` unstable hota hai by default (equal elements ka relative order guarantee nahi) — stability chahiye to `stable_sort()` use karo.
- Sorting custom structs → either overload `operator<` inside the struct, or pass a comparator/lambda to `sort()`.

**DSA / CP Use Cases:**
- Greedy algorithms almost always start with sorting (activity selection, interval scheduling, job sequencing).
- Sorting by multiple criteria (e.g., sort by end time, then by start time) — classic interval problems.
- Custom struct sorting in simulation-style CP problems.

**LeetCode Pattern Recognition:**
- "Greedy: pick earliest finishing / smallest first" → sort + greedy pick.
- "Sort by custom criteria (multiple fields)" → write comparator carefully with the p1/p2 mental model.
- Interval problems (merge, overlap, scheduling) → sort by start or end time first, almost always the first step.

**Practice Questions:**

*Basic:*
1. Sort an array of strings by length using a custom comparator.
2. Sort a vector of pairs by second element descending.
3. LeetCode 977 — Squares of a Sorted Array

*Medium:*
1. LeetCode 435 — Non-overlapping Intervals (sort by end time, greedy)
2. LeetCode 452 — Minimum Number of Arrows to Burst Balloons (sort + greedy)
3. LeetCode 179 — Largest Number (custom string comparator)

*Advanced:*
1. LeetCode 1235 — Maximum Profit in Job Scheduling (sort + DP/binary search)
2. LeetCode 406 — Queue Reconstruction by Height (multi-criteria sort + insertion trick)
3. LeetCode 1851 — Minimum Interval to Include Each Query (sort + priority_queue combo)

---

## Topic 11: Bit Manipulation Built-ins

**Kya hai / What it is:**
GCC compiler kuch **built-in functions** deta hai jo bit-level operations ko ek single instruction mein kar dete hain — bahut fast (hardware-level CPU instructions use karte hain), aur CP mein time bachate hain.

```cpp
__builtin_popcount(x);        // count of set bits (1s) in int x
__builtin_popcountll(x);      // same, for long long
__builtin_clz(x);             // count leading zeros (int)
__builtin_ctz(x);             // count trailing zeros (int)
__builtin_clzll(x);           // long long version of clz
__builtin_ctzll(x);           // long long version of ctz

// Manual bit tricks (good to know alongside built-ins)
x & 1;            // check if x is odd
x & (x-1);        // removes the last set bit
x & -x;           // isolates the last set bit
x | (1<<i);       // set bit i
x & ~(1<<i);      // unset bit i
x ^ (1<<i);       // toggle bit i
```

**Time Complexity:** Built-in functions → effectively **O(1)** (hardware instruction, treated as constant relative to word size).

**Tricks & Gotchas:**
- `__builtin_popcount` sirf `int` (32-bit) ke liye safe hai — `long long` (64-bit) ke liye **hamesha** `__builtin_popcountll` use karo, warna wrong answer aa sakta hai bade numbers pe.
- `x & (x-1)` se last set bit hat jaata hai — isse popcount manually bhi nikal sakte ho without built-in (loop tak chalao jab tak x != 0).
- Ye built-ins **GCC-specific** hain, standard C++ ka part nahi hain — Codeforces/most judges GCC use karte hain isliye chalte hain, but agar tum MSVC ya kuch aur compiler pe ho to available nahi honge.
- Bitmask DP (subsets ka representation as bits) mein popcount bahut use hota hai.

**DSA / CP Use Cases:**
- Counting set bits for subset-sum / bitmask DP problems.
- XOR-based problems (single number, missing number tricks).
- Checking power of 2: `x && !(x & (x-1))`.
- Bitmask representing visited states in DP (Traveling Salesman, subset DP).

**LeetCode Pattern Recognition:**
- "Count of 1 bits / Hamming weight" → `__builtin_popcount`.
- "Find the single/unique number among duplicates" → XOR tricks.
- "Subset enumeration / bitmask DP" → use bits to represent subsets, popcount to know subset size.

**Practice Questions:**

*Basic:*
1. LeetCode 191 — Number of 1 Bits
2. LeetCode 231 — Power of Two
3. LeetCode 136 — Single Number (XOR trick)

*Medium:*
1. LeetCode 338 — Counting Bits
2. LeetCode 137 — Single Number II (bit manipulation, appears 3 times trick)
3. LeetCode 78 — Subsets (bitmask enumeration approach)

*Advanced:*
1. LeetCode 1986 — Minimum Number of Work Sessions to Finish the Tasks (bitmask DP)
2. LeetCode 943 — Find the Shortest Superstring (bitmask DP, hard)
3. LeetCode 847 — Shortest Path Visiting All Nodes (bitmask BFS — TSP-style)

---

## Topic 12: Permutations (`next_permutation`)

**Kya hai / What it is:**
`next_permutation()` ek built-in algorithm hai jo current arrangement ko uske **lexicographically next greater permutation** mein convert kar deta hai — in-place. Agar koi next permutation exist nahi karta (already largest hai), to ye container ko smallest permutation mein rearrange kar deta hai aur `false` return karta hai.

```cpp
vector<int> v = {1,2,3};
sort(v.begin(), v.end());     // IMPORTANT: start from sorted to get ALL permutations

do {
    for (int x : v) cout << x << " ";
    cout << "\n";
} while (next_permutation(v.begin(), v.end()));

// Also exists: prev_permutation() — gives lexicographically previous permutation
```

**Time Complexity:** Single call to `next_permutation` → **O(n)**. Generating **all** n! permutations → O(n! × n) overall.

**Tricks & Gotchas:**
- **All** permutations chahiye to container **sorted** se start karna zaroori hai — warna sirf "current ke baad wale" permutations milenge, sab nahi.
- n! permutations bahut fast badhta hai — n=10 pe 3.6 million, n=12 pe 479 million. CP mein n ≤ 8-10 tak hi practical hai brute force permutation ke liye.
- `next_permutation` use karna recursive backtracking-based permutation generation se **faster aur cleaner** hai jab simple "saari permutations chaiye" wala kaam ho.
- Strings pe bhi direct kaam karta hai since string bhi iterator-compatible container hai: `next_permutation(s.begin(), s.end())`.

**DSA / CP Use Cases:**
- Generating all permutations of a string/array for brute-force search problems.
- "Find Kth permutation" type problems (though factorial number system approach is faster for large n).
- Used as a building block when brute-forcing small search spaces (n ≤ 10) in competitive programming.

**LeetCode Pattern Recognition:**
- "Generate all permutations" → can use `next_permutation` in a loop, OR backtracking (interview-preferred since it shows recursion skill).
- "Next permutation of a number/array" → directly maps to LeetCode 31.
- "Kth permutation sequence" → factorial number system (smarter than brute force next_permutation looping).

**Practice Questions:**

*Basic:*
1. LeetCode 31 — Next Permutation
2. Print all permutations of a 3-element array using `next_permutation` in a loop.
3. Check if string s2 is a permutation of string s1 (sort + compare, or frequency map).

*Medium:*
1. LeetCode 46 — Permutations (compare backtracking approach vs `next_permutation` loop)
2. LeetCode 47 — Permutations II (with duplicates — handle via set/skip logic)
3. LeetCode 567 — Permutation in String (sliding window + frequency, alternate non-permutation-function approach)

*Advanced:*
1. LeetCode 60 — Permutation Sequence (Kth permutation — factorial number system, smarter than next_permutation loop)
2. LeetCode 996 — Number of Squareful Arrays (permutations + backtracking + pruning)
3. LeetCode 1947 — Maximum Compatibility Score Sum (uses permutation generation over small n)

---

## Topic 13: Max/Min Element & Other Useful Algorithms

**Kya hai / What it is:**
STL ke `<algorithm>` header mein bahut saare ready-made functions hain jo manual loops likhne se bachate hain. Sabse common: `max_element`, `min_element`, `accumulate`, `count`, `find`, `binary_search`, `unique`, `reverse`.

```cpp
vector<int> v = {3,1,4,1,5};

*max_element(v.begin(), v.end());     // largest value (note the * to dereference iterator!)
*min_element(v.begin(), v.end());     // smallest value
max_element(v.begin(), v.end()) - v.begin();  // INDEX of max element

accumulate(v.begin(), v.end(), 0);    // sum of all elements (0 = initial value)
count(v.begin(), v.end(), 1);         // count occurrences of value 1
find(v.begin(), v.end(), 4);          // returns iterator to first occurrence, or .end()

binary_search(v.begin(), v.end(), 4); // true/false, REQUIRES sorted range
lower_bound(v.begin(), v.end(), 4);   // iterator to first element >= 4 (sorted range)
upper_bound(v.begin(), v.end(), 4);   // iterator to first element > 4 (sorted range)

reverse(v.begin(), v.end());          // reverse in-place
unique(v.begin(), v.end());           // removes CONSECUTIVE duplicates (sort first for full effect!)
```

**Time Complexity:**
| Function | Complexity |
|---|---|
| `max_element` / `min_element` | O(n) |
| `accumulate` | O(n) |
| `count` / `find` (linear) | O(n) |
| `binary_search` / `lower_bound` / `upper_bound` | O(log n) — **requires sorted range** |
| `reverse` | O(n) |
| `unique` | O(n) (but only removes consecutive dupes — sort first!) |

**Tricks & Gotchas:**
- `max_element`/`min_element` return an **iterator**, not the value — must dereference with `*`. Forgetting the `*` is the #1 beginner mistake here.
- To get the **index** of max/min element: `max_element(v.begin(), v.end()) - v.begin()`.
- `binary_search`, `lower_bound`, `upper_bound` only work correctly on a **sorted range** — using them on unsorted data gives garbage results silently (no error thrown!).
- `unique()` only removes **consecutive** duplicates — it doesn't sort first. Always `sort()` before `unique()` if you want all duplicates gone, then combine with `.erase()`: `v.erase(unique(v.begin(), v.end()), v.end());`

**DSA / CP Use Cases:**
- Quick min/max queries without writing a manual loop.
- `accumulate` for running sums, prefix-sum-like quick calculations.
- `lower_bound`/`upper_bound` for binary search on answer (a very common CP technique — binary search the answer, then check feasibility).
- `unique` + `erase` idiom for deduplication after sorting.

**LeetCode Pattern Recognition:**
- "Binary search on answer" problems (minimize/maximize something subject to a constraint) → `lower_bound`/manual binary search are core tools.
- "Find min/max in a range/window" → `max_element`/`min_element`, though for repeated sliding-window queries, a monotonic deque (Topic 3) is faster than calling these repeatedly.
- Deduplication after sorting → `sort` + `unique` + `erase` idiom.

**Practice Questions:**

*Basic:*
1. Find max and min element along with their indices in an array.
2. LeetCode 605 — Can Place Flowers (uses simple traversal, good for practicing utility functions)
3. Remove duplicates from a sorted array using `unique` + `erase`.

*Medium:*
1. LeetCode 34 — Find First and Last Position of Element in Sorted Array (lower_bound/upper_bound)
2. LeetCode 1011 — Capacity To Ship Packages Within D Days (binary search on answer)
3. LeetCode 875 — Koko Eating Bananas (binary search on answer)

*Advanced:*
1. LeetCode 410 — Split Array Largest Sum (binary search on answer, harder feasibility check)
2. LeetCode 1231 — Divide Chocolate (binary search on answer variant)
3. LeetCode 1631 — Path With Minimum Effort (binary search + BFS/DFS combo)

---

## Master Cheat Sheet — "Jab Yeh Dikhe, Toh Yeh Use Karo"

| Signal in the Problem | Container/Tool to Reach For |
|---|---|
| Need dynamic array, random access | `vector` |
| Need fast insert/delete at BOTH ends | `deque` |
| Need fast insert/delete in MIDDLE, no random access needed | `list` |
| LIFO behavior, "next greater/smaller element" | `stack` (often monotonic) |
| FIFO behavior, BFS, level order | `queue` |
| Need max/min element repeatedly with insertions | `priority_queue` (heap) |
| Need sorted + unique elements, dynamic | `set` |
| Need sorted + duplicates allowed, dynamic | `multiset` |
| Need fast O(1) membership check, order doesn't matter | `unordered_set` |
| Need key-value pairs in sorted key order | `map` |
| Need key-value pairs, fastest lookup, order doesn't matter | `unordered_map` |
| Need frequency counting | `unordered_map<T,int>` |
| Greedy algorithm, interval problems | `sort` + custom comparator |
| Sliding window max/min | monotonic `deque` |
| Need all permutations | `next_permutation` (sorted start) or backtracking |
| Counting set bits / subset DP | `__builtin_popcount` |
| Binary search on a sorted structure | `lower_bound` / `upper_bound` / `binary_search` |
| Track original index after sorting | `vector<pair<value,index>>` |

## General Tips for Tackling STL-based LeetCode Questions

1. **Pehle pattern identify karo, phir container choose karo** — sawal padhte hi soch "is this FIFO? LIFO? Need sorted? Need fast lookup?" — container apne aap clear ho jaayega.
2. **Time complexity ka mental check** — agar n ≤ 10^5 and you're thinking O(n²), STL se O(n log n) ya O(n) approach dhundo (usually a set/map/heap is hiding in the better solution).
3. **Brute force se start karo, phir optimize** — pehle simple nested loop/vector approach likho to ensure correctness, phir socho "kaunsa STL container ye operation O(log n) ya O(1) mein kar dega?"
4. **Comparator likhte time hamesha p1/p2 mental model use karo** — "should p1 come before p2? true/false?"
5. **Dry run karo chhote example pe** — especially heaps, monotonic stacks/deques — galti yahin pakad mein aati hai.
6. **Edge cases**: empty container, single element, all duplicates, already sorted/reverse sorted — STL functions kabhi kabhi silently wrong answer dete hain (e.g., binary_search on unsorted data) instead of crashing.

---

*Banaya gaya for Srishti's C++ STL practice — Amazon ML Summer School aur DSA/CP grind ke liye. Pura practice karne ke baad agar koi specific topic pe doubt ho ya kisi practice question ka detailed walkthrough chahiye ho, bas pooch lena.*
