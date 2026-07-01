# STL Master Book — Complete Vectors & Lists Guide
### C++ Standard Template Library | From Zero to Interview-Ready
#### Compiled from all chapters | Every topic covered | Nothing skipped

---

## 📖 TABLE OF CONTENTS

**PART A — VECTORS**

- Chapter 1 — Introduction to Vectors
  - 1.1 Why do Vectors Exist?
  - 1.2 Why Can't Arrays Grow?
  - 1.3 How Vectors Solve the Problem
  - 1.4 What Does "Dynamic" Mean?
  - 1.5 What Does "Runtime" Mean?
  - 1.6 What is Contiguous Memory?
  - 1.7 How Vectors Stay Contiguous While Growing
  - 1.8 Arrays vs Vectors Comparison
  - 1.9 When to Use Arrays vs Vectors
  - 1.10 Time Complexity Table

- Chapter 2 — Constructors & Initialization
  - 2.1 Empty Vector
  - 2.2 Vector with Size
  - 2.3 The Most Common Beginner Mistake
  - 2.4 Vector with Size and Default Value
  - 2.5 Copy Constructor
  - 2.6 2D Vector
  - 2.7 Time Complexity of Constructors
  - 2.8 Which Constructor to Use?
  - 2.9 Common Mistakes

- Chapter 3 — Adding Elements
  - 3.1 push_back()
  - 3.2 What Happens Inside push_back()
  - 3.3 Why push_back() is NOT Always O(1)
  - 3.4 Reallocation
  - 3.5 Capacity
  - 3.6 Why Capacity Doubles
  - 3.7 Amortized O(1) — Explained
  - 3.8 emplace_back()
  - 3.9 Difference — push_back() vs emplace_back()
  - 3.10 What is a Temporary Object?
  - 3.11 Which One Should You Use?
  - 3.12 Common Mistakes

- Chapter 4 — Accessing Elements
  - 4.1 Access using []
  - 4.2 Why [] is O(1)
  - 4.3 What Happens with Invalid Index?
  - 4.4 Access using at()
  - 4.5 [] vs at() Comparison
  - 4.6 front()
  - 4.7 back()
  - 4.8 data()
  - 4.9 Modifying Elements
  - 4.10 Accessing in Loops
  - 4.11 Common Mistakes

- Chapter 5 — Iterators
  - 5.1 What is an Iterator?
  - 5.2 Why Do We Need Iterators?
  - 5.3 Creating an Iterator
  - 5.4 begin()
  - 5.5 Why You Can't Print an Iterator Directly
  - 5.6 Dereferencing with *
  - 5.7 Moving an Iterator with ++
  - 5.8 end() — The Most Misunderstood Concept
  - 5.9 Printing Using Iterators
  - 5.10 Reverse Iterators — rbegin() and rend()
  - 5.11 auto Keyword with Iterators
  - 5.12 Iterator Arithmetic
  - 5.13 Iterator vs Pointer
  - 5.14 How Range-Based Loops Work Internally
  - 5.15 Common Mistakes

- Chapter 6 — insert()
  - 6.1 Why Do We Need insert()?
  - 6.2 Basic Syntax
  - 6.3 The Golden Rule — insert() Goes BEFORE the Iterator
  - 6.4 Internal Working — Element Shifting
  - 6.5 Insert Multiple Copies
  - 6.6 Insert Another Vector (Range Insert)
  - 6.7 Insert Using Initializer List
  - 6.8 What Happens When Capacity is Full?
  - 6.9 Iterator Invalidation After insert()
  - 6.10 push_back() vs insert() Comparison
  - 6.11 Common Mistakes

- Chapter 7 — Removing Elements
  - 7.1 Why Do We Need Deletion?
  - 7.2 pop_back()
  - 7.3 erase() — Single Element
  - 7.4 Internal Working of erase()
  - 7.5 erase() — Range Deletion
  - 7.6 Return Value of erase()
  - 7.7 clear()
  - 7.8 empty()
  - 7.9 Iterator Invalidation After erase()
  - 7.10 Deletion Functions Comparison
  - 7.11 Common Mistakes

- Chapter 8 — Memory Management
  - 8.1 size()
  - 8.2 capacity()
  - 8.3 Size vs Capacity — The Critical Difference
  - 8.4 resize()
  - 8.5 reserve()
  - 8.6 resize() vs reserve() — The Interview Question
  - 8.7 swap()
  - 8.8 shrink_to_fit()
  - 8.9 max_size()
  - 8.10 Internal Memory Layout
  - 8.11 Common Mistakes

- Chapter 9 — Sorting Vectors
  - 9.1 Why Do We Need sort()?
  - 9.2 Basic Syntax
  - 9.3 The [start, end) Rule
  - 9.4 Descending Sort with greater<int>()
  - 9.5 Time Complexity & IntroSort
  - 9.6 Sorting Only Part of a Vector
  - 9.7 Default Sorting of Pairs
  - 9.8 Sorting by Second Element
  - 9.9 Custom Comparator Function
  - 9.10 Lambda Comparator (Preview)
  - 9.11 stable_sort() vs sort()
  - 9.12 Common Mistakes

- Chapter 10 — Lambda Functions
  - 10.1 What is a Lambda?
  - 10.2 Why Were Lambdas Introduced?
  - 10.3 Complete Lambda Syntax
  - 10.4 Smallest Lambda Example
  - 10.5 Lambda Returning a Value
  - 10.6 Sorting Using a Lambda
  - 10.7 Descending Sort with Lambda
  - 10.8 Capture List — []
  - 10.9 Capture by Value [x]
  - 10.10 Capture by Reference [&x]
  - 10.11 Capture Everything [=] and [&]
  - 10.12 Mutable Lambda
  - 10.13 Lambda vs Normal Function

- Chapter 11 — Interview Patterns & Advanced Concepts
  - 11.1 Passing Vector by Value (Method 1)
  - 11.2 Passing Vector by Reference (Method 2)
  - 11.3 Passing by Const Reference (Method 3)
  - 11.4 Returning a Vector from a Function
  - 11.5 Vector of Pairs
  - 11.6 Nested Vectors
  - 11.7 Jagged Arrays
  - 11.8 2D Vector Input/Output
  - 11.9 Dynamic 2D Vector (Graph Representation)
  - 11.10 When to Use a Vector
  - 11.11 When NOT to Use a Vector
  - 11.12 Common Interview Mistakes
  - 11.13 Top 10 Interview Questions

**PART B — LISTS**

- Chapter 12 — std::list (Doubly Linked List)
  - 12.1 Why Do We Need List?
  - 12.2 What is std::list?
  - 12.3 Internal Working — Non-Contiguous Memory
  - 12.4 What is a Doubly Linked List?
  - 12.5 Why Insertion is O(1)
  - 12.6 Why Indexing is Impossible
  - 12.7 Creating Lists
  - 12.8 push_back() and push_front()
  - 12.9 pop_back() and pop_front()
  - 12.10 front() and back()
  - 12.11 Iterators in Lists
  - 12.12 insert()
  - 12.13 erase()
  - 12.14 remove()
  - 12.15 reverse()
  - 12.16 sort()
  - 12.17 unique()
  - 12.18 merge()
  - 12.19 splice()
  - 12.20 Vector vs List — Complete Comparison
  - 12.21 Time Complexity Table
  - 12.22 Common Mistakes
  - 12.23 The Critical Interview Takeaway

**APPENDIX**
- A. Master Cheat Sheet — All Vector Functions
- B. Complete Time Complexity Reference
- C. Interview Questions Bank
- D. Function Importance Ratings
- E. Practice Problems by Chapter

---
---

# PART A — VECTORS

---

# CHAPTER 1 — Introduction to Vectors

---

## 1.1 Why Do Vectors Exist?

Jaab bhi tum C++ mein normal array likhte ho, ek problem aati hai:

```cpp
int arr[5];
```

Ye array exactly **5** integers store kar sakta hai. No more, no less.

Socho ek program jo user se poochhe "kitne students hain?"

User ne likha `5` → `int marks[5];` → sab theek hai.
Kal doosra user aaya aur likha `100` → teri array too small hai.

To tune socha: "main `int marks[1000]` likh deta hoon."

Ab agar sirf 5 students hain, to **995 memory slots waste** ho gaye.

**Yahi hai array ka fundamental problem:**

> Arrays need a **fixed size**. Once created, they cannot change.

---

## 1.2 Why Can't Arrays Grow?

Memory ko hotel rooms ki tarah socho:

```
100 | 101 | 102 | 103 | 104 | 105 | 106 | 107
```

Suppose `int arr[5]` is stored at addresses 100 to 104:

```
+----+----+----+----+----+
|10  |20  |30  |40  |50  |    <- arr[0] to arr[4]
+----+----+----+----+----+
100  101  102  103  104
```

Ab tum `60` store karna chahte ho. Naturally `104` ke baad, yaani `105` pe.

**Lekin kya agar room `105` already kisi aur variable ka hai?**

```
100  101  102  103  104  105
Arr  Arr  Arr  Arr  Arr   X   <- X belongs to another variable
```

Array aage nahi badh sakta. Isliye arrays simply "grow" nahi kar sakte.

---

## 1.3 How Vectors Solve the Problem

Vector kehta hai: **"Don't worry. I'll manage memory myself."**

```cpp
vector<int> v;

v.push_back(10);   // Memory: |10|
v.push_back(20);   // Memory: |10|20|
v.push_back(30);   // Memory: |10|20|30|
```

Tune kabhi `3` specify nahi kiya — vector ne khud adjust kiya. Isliye ise **Dynamic Array** kehte hain.

---

## 1.4 What Does "Dynamic" Mean?

**Dynamic = Size can change while the program is running.**

```cpp
vector<int> v;   // Size = 0
v.push_back(5);  // Size = 1
v.push_back(8);  // Size = 2
v.push_back(20); // Size = 3
```

Vector keeps changing. Arrays cannot.

---

## 1.5 What Does "Runtime" Mean?

Do phases hote hain:

**Compile Time** — Compiler tera C++ code machine code mein convert karta hai.
```cpp
int arr[5];  // Compiler already knows: Size = 5
```

**Runtime** — Program actually execute ho raha hota hai.
```cpp
int n;
cin >> n;
vector<int> v(n);  // Compiler didn't know this. It happens during execution.
```

User ne `6` enter kiya → size = 6. Kal `500` enter kiya → size = 500. Compiler ne kabhi nahi jaana. Isliye: **Runtime**.

---

## 1.6 What is Contiguous Memory?

Ye probably vectors ka **sabse important concept** hai.

**Contiguous = No gaps. Everything together.**

```
+----+----+----+----+----+
|10  |20  |30  |40  |50  |   <- Contiguous Memory
+----+----+----+----+----+
100  101  102  103  104
```

Example of **NON-contiguous** memory:
```
Address: 100   250   700   900   1500
Value:    10    20    30    40    50   <- Scattered!
```

**Why is contiguous memory so useful?**

Suppose `arr[3]` chahiye. Computer ko pata hai `arr[0]` is at address `100`.

```
arr[3] = 100 + 3 = 103
```

Sirf **ek calculation**. Done. Isliye `arr[i]` → **O(1)**.

---

## 1.7 How Vectors Stay Contiguous While Growing

Agar vector grow karta hai, to contiguous kaise rahega?

Socho vector mein abhi `10 20 30` hai aur next address occupied hai.

```
+----+----+----+
|10  |20  |30  |  <- Vector full, next memory belongs to someone else
+----+----+----+
```

Ab `push_back(40)` call kiya. Internally STL yeh karta hai:

**Step 1:** Find a larger empty block elsewhere in memory.
```
+----+----+----+----+----+----+    <- Larger empty block found
```

**Step 2:** Copy `10`, `20`, `30` to new block.

**Step 3:** Insert `40`.
```
+----+----+----+----+
|10  |20  |30  |40  |    <- New contiguous memory
+----+----+----+----+
```

**Step 4:** Delete old memory.

Tu kuch notice nahi karta. Vector handles it automatically.

---

## 1.8 Arrays vs Vectors Comparison

| Feature | Array | Vector |
|---|---|---|
| Size | Fixed | Dynamic |
| Can grow? | No | Yes |
| `.size()` | No | Yes |
| `push_back()` | No | Yes |
| `erase()` | No | Yes |
| `insert()` | No | Yes |
| Contiguous memory | Yes | Yes |
| Speed | Faster by a tiny margin | Slight overhead for flexibility |

---

## 1.9 When to Use Arrays vs Vectors

**Use Arrays when:**
- Fixed, known size
- Very low-level programming / embedded systems
- Competitive programming with known, fixed-size data (sometimes)

```cpp
int marks[100];  // Exactly 100 students, never changes
```

**Use Vectors almost everywhere else:**
- LeetCode / Codeforces / Competitive Programming
- Interviews
- Production C++

```cpp
vector<int> nums;  // Size unknown, determined at runtime
```

---

## 1.10 Time Complexity Table — Chapter 1

| Operation | Array | Vector |
|---|---|---|
| Random Access `[i]` | O(1) | O(1) |
| Insert at End | Not possible if full | Amortized O(1) |
| Delete at End | O(1) | O(1) |
| Insert in Middle | O(n) | O(n) |
| Delete in Middle | O(n) | O(n) |

*We'll prove why push_back() is amortized O(1) in Chapter 3.*

---
---

# CHAPTER 2 — Constructors & Initialization

---

## 2.1 Empty Vector

```cpp
vector<int> v;
```

Creates an empty vector. Memory: (empty). `v.size()` returns `0`.

```cpp
cout << v[0];   // ❌ CRASH — zero elements exist, v[0] doesn't exist
```

**When to use:** Most common. When you don't know how many elements you'll have in advance.

```cpp
int n; cin >> n;
vector<int> v;
for(int i = 0; i < n; i++){
    int x; cin >> x;
    v.push_back(x);
}
```

**Time Complexity:** O(1)

---

## 2.2 Vector with Size

```cpp
vector<int> v(5);
```

> ⚠️ Beginner trap: Many think this creates an empty vector with capacity 5.
> **WRONG.** It creates **5 actual elements**, each initialized to `0`.

```cpp
vector<int> v(5);
for(int x : v) cout << x << " ";
// Output: 0 0 0 0 0
```

`v.size()` returns `5`. You can directly use `v[0]` through `v[4]`.

**When to use:** When you already know you need exactly `n` positions.
```cpp
int n; cin >> n;
vector<int> marks(n);
for(int i = 0; i < n; i++) cin >> marks[i];  // No push_back needed
```

**Time Complexity:** O(n) — every element must be initialized to 0.

---

## 2.3 The Most Common Beginner Mistake

```cpp
vector<int> v;
for(int i = 0; i < 5; i++){
    cin >> v[i];   // ❌ CRASH — v has size 0, v[i] doesn't exist
}
```

**Why it crashes:** `v` has 0 elements. There is no `v[0]`.

**Fix Option 1:**
```cpp
vector<int> v(5);
for(int i = 0; i < 5; i++) cin >> v[i];  // ✅ v already has 5 slots
```

**Fix Option 2:**
```cpp
vector<int> v;
for(int i = 0; i < 5; i++){
    int x; cin >> x;
    v.push_back(x);  // ✅ creates new slot then fills it
}
```

---

## 2.4 Vector with Size and Default Value

```cpp
vector<int> v(5, 100);
// Creates 5 elements, all initialized to 100
// Output: 100 100 100 100 100
```

**Common uses:**
```cpp
vector<int> freq(26, 0);     // Frequency array for 26 alphabets
vector<int> dist(n, INT_MAX); // Distance array for Dijkstra
vector<bool> vis(n, false);   // Visited array for BFS/DFS
```

**Time Complexity:** O(n) — every element must be assigned the default value.

---

## 2.5 Copy Constructor

```cpp
vector<int> v1 = {1, 2, 3};
vector<int> v2(v1);  // Deep copy of v1
```

These are **two separate vectors**. Changing `v2` does NOT affect `v1`:

```cpp
v2[0] = 100;
// v1: 1 2 3   (unchanged)
// v2: 100 2 3 (changed)
```

**Time Complexity:** O(n) — every element is copied individually.

---

## 2.6 2D Vector

```cpp
vector<vector<int>> grid(n, vector<int>(m, 0));
```

Scary lagta hai, par simple hai. Breakdown:
- `vector<int>(m, 0)` → one row of `m` zeros
- `vector<vector<int>>` → a vector of vectors (rows)
- Result: n rows, m columns, all zeros

```cpp
vector<vector<int>> grid(3, vector<int>(4, 0));
// Creates:
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0

grid[1][2];  // Second row, third column
```

**Used in:** Graphs, matrices, DP tables, BFS/DFS grids.

**Time Complexity:** O(n × m)

---

## 2.7 Time Complexity of Constructors

| Constructor | Complexity |
|---|---|
| `vector<int> v;` | O(1) |
| `vector<int> v(n);` | O(n) |
| `vector<int> v(n, val);` | O(n) |
| `vector<int> v2(v1);` | O(n) |
| `vector<vector<int>>(n, vector<int>(m))` | O(n × m) |

---

## 2.8 Which Constructor to Use?

| Situation | Constructor |
|---|---|
| Unknown size, will use push_back | `vector<int> v;` |
| Know the size, will fill with cin | `vector<int> v(n);` |
| Need same initial value everywhere | `vector<int> v(n, -1);` |
| Need a copy | `vector<int> copy(original);` |
| Need a matrix | `vector<vector<int>> mat(n, vector<int>(m, 0));` |

---

## 2.9 Common Mistakes — Chapter 2

**Mistake 1:** Accessing empty vector
```cpp
vector<int> v;
v[0] = 5;   // ❌ Crash. Size = 0.
```

**Mistake 2:** push_back into already-sized vector
```cpp
vector<int> v(5);
for(int i = 0; i < 5; i++)
    v.push_back(i);   // ❌ Creates 10 elements: 0 0 0 0 0 0 1 2 3 4
// If you want to replace, use: v[i] = i;
```

**Mistake 3:** Confusing empty vector with sized vector
```cpp
vector<int> v;   // 0 elements
vector<int> v(5);  // 5 elements (all 0)
```

---
---

# CHAPTER 3 — Adding Elements

---

## 3.1 push_back()

```cpp
vector<int> v;
v.push_back(10);   // |10|
v.push_back(20);   // |10|20|
v.push_back(30);   // |10|20|30|
```

**What it does:** Inserts an element at the **end** of the vector.
**Time Complexity:** Normally O(1), but there's an exception (see below).

---

## 3.2 What Happens Inside push_back()

```cpp
vector<int> v;
v.push_back(5);
```

Internally:
1. Allocate memory for `5`.
2. Store `5`.

If space already exists from a previous reallocation:
1. Simply write the new value into the next available slot.
2. Increment size by 1.

Very fast. No copying involved.

---

## 3.3 Why push_back() is NOT Always O(1)

Suppose memory currently is:
```
+----+----+----+
|10  |20  |30  |   <- Full! No more space.
+----+----+----+
```

Now `push_back(40)` is called. Where does `40` go?

**There is no empty room.** This triggers **Reallocation**.

---

## 3.4 Reallocation

When `Size == Capacity`, vector performs these 4 steps:

**Step 1:** Find a larger empty block in memory.
```
+----+----+----+----+----+----+    <- Larger block found
```

**Step 2:** Copy all old elements `10 20 30`.

**Step 3:** Insert new element `40`.
```
+----+----+----+----+
|10  |20  |30  |40  |
+----+----+----+----+
```

**Step 4:** Delete the old memory block.

This entire process = **Reallocation**. This particular push_back takes O(n) — but it happens rarely.

---

## 3.5 Capacity

Vector has two numbers: **Size** (elements you stored) and **Capacity** (memory slots allocated).

```cpp
vector<int> v;     // Size = 0, Capacity = 0
v.push_back(10);   // Size = 1, Capacity = 1
v.push_back(20);   // Size = 2, Capacity = 2
v.push_back(30);   // Size = 3, Capacity = 4  ← capacity doubled!
v.push_back(40);   // Size = 4, Capacity = 4
v.push_back(50);   // Size = 5, Capacity = 8  ← capacity doubled again!
```

**Visualize capacity as reserved hotel rooms:**
```
Size = 3, Capacity = 5:
+----+----+----+----+----+
|10  |20  |30  |    |    |
+----+----+----+----+----+
Used Used Used  Empty Empty
```

---

## 3.6 Why Capacity Doubles?

Agar capacity sirf +1 badhti har baar:
```
Capacity: 1 → 2 → 3 → 4 → 5 → 6 ...
```

Har insertion pe reallocation hogi → bahut slow.

Capacity doubling se reallocations **much less frequently** hoti hain:
```
Capacity growth: 0 → 1 → 2 → 4 → 8 → 16 → 32 → 64...
```

Different compilers may use slightly different growth strategies, but doubling is the standard idea.

---

## 3.7 Amortized O(1) — Explained

> **Interview Question:** "If push_back() sometimes copies all elements (O(n)), why is it called O(1)?"

Let's trace 8 insertions:
```
Insert 1: No copy needed.      Cost = 1
Insert 2: Copy 1 element.      Cost = 2
Insert 3: Copy 2 elements.     Cost = 3
Insert 4: No copy.             Cost = 1
Insert 5: Copy 4 elements.     Cost = 5
Insert 6: No copy.             Cost = 1
Insert 7: No copy.             Cost = 1
Insert 8: No copy.             Cost = 1
```

Total cost = 1+2+3+1+5+1+1+1 = 15 for 8 insertions.
Average per insertion = 15/8 ≈ **2** → constant!

Most insertions are O(1). Copying happens only occasionally. **Average (amortized) cost = O(1).**

---

## 3.8 emplace_back()

```cpp
v.emplace_back(10);   // Looks just like push_back for integers
```

For plain integers, almost identical to push_back. The real difference shows up for complex types.

---

## 3.9 Difference — push_back() vs emplace_back()

Suppose:
```cpp
vector<pair<int,int>> v;
```

**Using push_back:**
```cpp
v.push_back({10, 20});
```
Step 1: Create temporary pair `(10, 20)` outside the vector.
Step 2: Copy/move that temporary into the vector.
**Two steps.**

**Using emplace_back:**
```cpp
v.emplace_back(10, 20);
```
Vector constructs `(10, 20)` **directly inside its memory**.
No temporary object created. **One step.**

```
push_back:    Temporary → Copy → Vector
emplace_back: Vector constructs directly
```

---

## 3.10 What is a Temporary Object?

```cpp
pair<int,int> p = {10, 20};   // This is a temporary/separate object
v.push_back(p);               // push_back takes it and copies it in
```

`emplace_back(10, 20)` doesn't need a separate object. It builds directly inside.

---

## 3.11 Which One Should You Use?

| Situation | Recommendation |
|---|---|
| `vector<int>` | Either is fine |
| `vector<pair<int,int>>` | Prefer `emplace_back` |
| Custom objects/classes | Definitely `emplace_back` |

In competitive programming, both work. In professional code, prefer `emplace_back` for complex types.

---

## 3.12 Common Mistakes — Chapter 3

**Mistake 1:** Thinking push_back doesn't shift the size
```cpp
vector<int> v(5);
v.push_back(10);
cout << v.size();  // Prints 6, not 5!
```

**Mistake 2:** Confusing array-style assignment with push_back
```cpp
v[5] = 100;       // Needs index 5 to already exist
v.push_back(100); // Creates a new slot, then fills it
```

**Mistake 3:** Thinking push_back always reallocates
```cpp
// push_back reallocates ONLY when Size == Capacity
// Most of the time it just writes to the next available slot
```

---
---

# CHAPTER 4 — Accessing Elements

---

## 4.1 Access using []

```cpp
vector<int> v = {10, 20, 30, 40};
cout << v[0];   // 10
cout << v[2];   // 30
```

```
Index:  0    1    2    3
      +----+----+----+----+
      |10  |20  |30  |40  |
      +----+----+----+----+
```

**Time Complexity: O(1)**

---

## 4.2 Why [] is O(1)

Vectors store data in contiguous memory. Suppose:
- Starting Address = 1000
- Each integer = 4 bytes

```
v[0] → Address 1000
v[1] → Address 1004
v[2] → Address 1008
v[3] → Address 1012
```

Formula: `Address = Start + (Index × size_of_datatype)`

**No searching. No loop. Just one calculation. O(1).**

---

## 4.3 What Happens with Invalid Index?

```cpp
vector<int> v = {10, 20, 30};
cout << v[5];   // ← What happens?
```

Many beginners think: "Compilation Error."
**Wrong.** It compiles successfully.

At runtime: **Undefined Behavior.**

Possible outcomes:
- Garbage value printed
- Program crashes
- Segmentation Fault
- Looks like it works (but may corrupt data)

> This is one of the most dangerous bugs in C++ — silent corruption.

---

## 4.4 Access using at()

```cpp
vector<int> v = {10, 20, 30};
cout << v.at(2);   // 30 — works fine

cout << v.at(5);   // ❌ Throws std::out_of_range exception
```

Instead of silent undefined behavior, `at()` throws an exception you can catch.

---

## 4.5 [] vs at() Comparison

| Feature | `[]` | `at()` |
|---|---|---|
| Bounds checking | No | Yes |
| Speed | Faster | Slightly slower |
| On invalid index | Undefined behavior | Throws exception |
| Use in CP | ✅ Most common | Rare |
| Use in production | Sometimes | Safer choice |

---

## 4.6 front()

```cpp
vector<int> v = {10, 20, 30, 40};
cout << v.front();   // 10 — first element
```

Equivalent to `v[0]`. **Time Complexity: O(1).**

> Always check `v.empty()` before calling `front()` on a potentially empty vector.

---

## 4.7 back()

```cpp
cout << v.back();   // 40 — last element
```

Equivalent to `v[v.size()-1]`. **Time Complexity: O(1).**

Used constantly in stack-style problems (pop then process).

---

## 4.8 data()

```cpp
vector<int> v = {10, 20, 30};
int* ptr = v.data();   // Returns pointer to first element

cout << *ptr;      // 10
cout << *(ptr+1);  // 20
```

Since vectors use contiguous memory, `data()` gives direct pointer access to the underlying array.

**When used:** Interfacing with C libraries, APIs expecting `int*`, low-level programming. Rarely needed in DSA.

**Time Complexity: O(1)**

---

## 4.9 Modifying Elements

```cpp
vector<int> v = {10, 20, 30};
v[1] = 100;    // v: 10 100 30
v.at(2) = 500; // v: 10 100 500
```

---

## 4.10 Accessing in Loops

```cpp
// Method 1: Index-based
for(int i = 0; i < v.size(); i++){
    cout << v[i] << " ";
}

// Method 2: Range-based (read-only style)
for(int x : v){
    cout << x << " ";
}

// Method 3: Range-based with reference (can modify)
for(int &x : v){
    x *= 2;   // Doubles every element
}
```

---

## 4.11 Common Mistakes — Chapter 4

**Mistake 1:** Accessing empty vector
```cpp
vector<int> v;
cout << v[0];    // ❌ Crash. Vector has 0 elements.
```

**Mistake 2:** front()/back() on empty vector
```cpp
vector<int> v;
v.back();        // ❌ Undefined Behavior

// Safe way:
if(!v.empty()) cout << v.back();
```

**Mistake 3:** Off-by-one — last valid index
```cpp
vector<int> v(5);  // Size = 5
cout << v[5];      // ❌ Last valid index is v[4] = v[size-1]
```

**Mistake 4:** Using `size()` in comparison with signed int
```cpp
for(int i = v.size()-1; i >= 0; i--)  // ⚠️ v.size() returns unsigned
// If v is empty, v.size()-1 wraps to a huge number (unsigned underflow)
// Safe: for(int i = (int)v.size()-1; i >= 0; i--)
```

---
---

# CHAPTER 5 — Iterators

---

## 5.1 What is an Iterator?

Pehle vectors bhool jao. Socho memory aisi hai:

```
Address: 1000  1004  1008  1012
Value:     10    20    30    40
```

If you create `vector<int> v = {10, 20, 30, 40}`, the memory maps to:
```
1000 → 10
1004 → 20
1008 → 30
1012 → 40
```

"Pehle element ko point karo" — matlab address store karo, value nahi.

> **Iterator = An object that points to an element of a container.**

Think of it as a **bookmark** in a book — it doesn't store the page's content, it stores **where the page is**.

---

## 5.2 Why Do We Need Iterators?

**"We already have v[0], v[1], v[2] — why iterators?"**

Vectors indexing support karte hain. Lekin bahut saare STL containers nahi karte:

```cpp
set<int> s;
s[0];           // ❌ Won't compile — sets don't support indexing

map<int,int> m;
m[2];           // This means key=2, NOT the 2nd element
```

STL ko ek **common way** chahiye tha har container se traverse karne ke liye. Woh common way = **Iterator**.

---

## 5.3 Creating an Iterator

```cpp
vector<int>::iterator it;   // Declares an iterator for vector<int>
```

Breakdown:
- `vector<int>` → vector of integers
- `::iterator` → iterator type of that vector
- `it` → variable name

Using `auto` (much cleaner):
```cpp
auto it = v.begin();   // Compiler deduces the type automatically
```

---

## 5.4 begin()

```cpp
vector<int> v = {10, 20, 30, 40};
auto it = v.begin();
```

```
10    20    30    40
^
it   (points to first element: 10)
```

**Important:** Iterator stores the **address** of the element, NOT the value.

---

## 5.5 Why You Can't Print an Iterator Directly

```cpp
cout << it;   // Prints something like: 0x7ffeefbff560 (an address!)
```

Iterator stores an address (memory location), not the value. To get the value, you must **dereference** it.

---

## 5.6 Dereferencing with *

```cpp
cout << *it;   // Prints: 10
```

`*` means: "Give me the value stored at this address." Like a pointer.

```
10    20    30    40
^
it
*it = 10
```

---

## 5.7 Moving an Iterator with ++

```cpp
auto it = v.begin();   // Points to 10
it++;                  // Now points to 20
cout << *it;           // Prints: 20

it++;                  // Now points to 30
cout << *it;           // Prints: 30
```

```
10   20   30   40
          ^
         it (after two ++)
```

---

## 5.8 end() — The Most Misunderstood Concept

```cpp
vector<int> v = {10, 20, 30, 40};
```

**Common wrong answer:** `v.end()` points to `40`.
**Correct:** `v.end()` points to **one position AFTER the last element**.

```
10   20   30   40   [imaginary position]
                         ^
                       end()
```

**Why?** Because it makes loops clean:

```cpp
for(auto it = v.begin(); it != v.end(); it++){
    // Processes: 10, 20, 30, 40
    // Loop stops when it reaches end() — exactly after last element
}
```

If `end()` pointed to `40`, we'd need special handling for the last element. The "one past the end" convention makes loop logic simple and uniform.

> ⚠️ **Never dereference `end()`** — it points to no valid element. `*v.end()` = Undefined Behavior.

---

## 5.9 Printing Using Iterators

```cpp
for(auto it = v.begin(); it != v.end(); it++){
    cout << *it << " ";    // Note: *it, NOT it
}
// Output: 10 20 30 40
```

---

## 5.10 Reverse Iterators — rbegin() and rend()

```cpp
// rbegin() → points to LAST element
// rend()   → points to one position BEFORE the first element

for(auto it = v.rbegin(); it != v.rend(); it++){
    cout << *it << " ";
}
// Output: 40 30 20 10
```

```
10   20   30   40
^                ^
rend()        rbegin()
```

---

## 5.11 auto Keyword with Iterators

Without `auto`:
```cpp
vector<int>::iterator it = v.begin();   // Long and verbose
```

With `auto`:
```cpp
auto it = v.begin();   // Compiler deduces: it is vector<int>::iterator
```

This is called **Type Deduction**. Always use `auto` with iterators — cleaner and less error-prone.

---

## 5.12 Iterator Arithmetic

Since vectors have **random access iterators**, you can do arithmetic:

```cpp
auto it = v.begin();

it++;       // Move to next element
it + 2;     // Jump 2 positions forward
it - 1;     // Go 1 position back
*(it + 2);  // Value 2 positions ahead

// Example: v = {10, 20, 30, 40}
// v.begin() + 2 → points to 30
// *(v.begin() + 2) = 30
```

> Note: This arithmetic works for vectors (random access iterators). It does NOT work for list, set, map (bidirectional iterators only support ++ and --).

---

## 5.13 Iterator vs Pointer

| Pointer | Iterator |
|---|---|
| Works with arrays | Works with STL containers |
| Stores raw memory address | Behaves like a generalized pointer |
| Uses `*` | Uses `*` |
| Uses `++` | Uses `++` |
| Can go out of bounds silently | Has container-aware movement |

Think of an iterator as a **smart pointer designed for STL containers**.

---

## 5.14 How Range-Based Loops Work Internally

Tum ye likhte ho:
```cpp
for(int x : v) cout << x << " ";
```

Compiler internally converts this to something like:
```cpp
for(auto it = v.begin(); it != v.end(); ++it){
    int x = *it;
    cout << x << " ";
}
```

Isliye range-based loops har STL container pe kaam karte hain — set, map, list, vector sab.

---

## 5.15 Common Mistakes — Chapter 5

**Mistake 1:** Printing iterator without dereferencing
```cpp
cout << it;    // ❌ Prints address, not value
cout << *it;   // ✅ Prints value
```

**Mistake 2:** Dereferencing `end()`
```cpp
cout << *v.end();   // ❌ Undefined Behavior — end() is past the last element
```

**Mistake 3:** Incrementing past `end()`
```cpp
auto it = v.end();
it++;   // ❌ Invalid — already past the end
```

**Mistake 4:** Using iterator after modifying the vector
```cpp
auto it = v.begin();
v.push_back(100);   // If this causes reallocation, 'it' is now INVALID
cout << *it;        // ❌ May crash
```

---
---

# CHAPTER 6 — insert()

---

## 6.1 Why Do We Need insert()?

```cpp
vector<int> v = {10, 20, 30, 40};
v.push_back(25);   // Result: 10 20 30 40 25 ← WRONG
```

We wanted `10 20 25 30 40`. `push_back()` only adds to end.

To insert at a **specific position**, use `insert()`.

---

## 6.2 Basic Syntax

```cpp
v.insert(iterator_position, value);

// Example:
vector<int> v = {10, 20, 30, 40};
v.insert(v.begin() + 2, 25);
// Result: 10 20 25 30 40
```

`v.begin() + 2` points to `30`. Insert `25` before `30`.

---

## 6.3 The Golden Rule — insert() Goes BEFORE the Iterator

```cpp
v.insert(v.begin(), 100);       // Insert before index 0 → 100 10 20 30 40
v.insert(v.end(), 100);         // Insert before end() → 10 20 30 40 100 (same as push_back)
v.insert(v.begin() + 2, 100);   // Insert before index 2 → 10 20 100 30 40
```

> **Rule:** `insert(pos, val)` inserts `val` BEFORE `pos`. Always.

---

## 6.4 Internal Working — Element Shifting

```
Before: 10 20 30 40    → insert 25 before 30

Step 1: Move 40 right:   10 20 30 _ 40
Step 2: Move 30 right:   10 20 _ 30 40
Step 3: Insert 25:       10 20 25 30 40
```

This shifting is why insert is O(n) — every element after the insertion point must move.

**Visual:**
```
Before: +----+----+----+----+
        |10  |20  |30  |40  |

After:  +----+----+----+----+----+
        |10  |20  |25  |30  |40  |
```

---

## 6.5 Insert Multiple Copies

```cpp
v.insert(position, count, value);

// Example:
vector<int> v = {1, 2, 3};
v.insert(v.begin() + 1, 3, 100);
// Result: 1 100 100 100 2 3
// Inserted 3 copies of 100 before index 1
```

---

## 6.6 Insert Another Vector (Range Insert)

```cpp
vector<int> a = {1, 2, 3};
vector<int> b = {10, 20};

a.insert(a.end(), b.begin(), b.end());
// Result: 1 2 3 10 20

a.insert(a.begin() + 1, b.begin(), b.end());
// Result: 1 10 20 2 3
```

---

## 6.7 Insert Using Initializer List

```cpp
vector<int> v = {1, 2, 3};
v.insert(v.begin() + 1, {100, 200, 300});
// Result: 1 100 200 300 2 3
```

---

## 6.8 What Happens When Capacity is Full?

Agar `Size == Capacity` at time of insert:
1. Allocate larger memory
2. Copy all existing elements
3. Perform the shift + insert
4. Delete old memory

(Same reallocation process as push_back's reallocation.)

---

## 6.9 Iterator Invalidation After insert()

```cpp
auto it = v.begin();
v.insert(v.begin(), 100);   // If vector reallocates, 'it' is now INVALID
cout << *it;                // ❌ May crash — it points to deleted memory
```

After any `insert()` that may cause reallocation, **never use old iterators**.

---

## 6.10 push_back() vs insert() Comparison

| Feature | push_back() | insert() |
|---|---|---|
| Where | End only | Anywhere |
| Time complexity | Amortized O(1) | O(n) |
| Element shifting | No | Yes |
| Speed | Faster | Slower |

---

## 6.11 Common Mistakes — Chapter 6

**Mistake 1:** Thinking insert() adds AFTER the iterator
```cpp
v.insert(v.begin() + 2, 100);   // Inserts BEFORE index 2, not after
```

**Mistake 2:** Passing index instead of iterator
```cpp
v.insert(2, 100);              // ❌ Doesn't compile
v.insert(v.begin() + 2, 100);  // ✅ Correct
```

**Mistake 3:** Using iterator after insert
```cpp
auto it = v.begin();
v.insert(v.begin(), 100);   // 'it' may now be invalid if reallocation happened
```

---
---

# CHAPTER 7 — Removing Elements

---

## 7.1 Why Do We Need Deletion?

```cpp
vector<int> v = {10, 20, 30, 40, 50};
// Want to remove 30 → result: 10 20 40 50
```

---

## 7.2 pop_back()

```cpp
vector<int> v = {10, 20, 30, 40};
v.pop_back();
// Result: 10 20 30
```

**What happens:** Just decrements size by 1. No shifting. Memory stays.

**Before:**
```
+----+----+----+----+
|10  |20  |30  |40  |
+----+----+----+----+
```
**After:**
```
+----+----+----+
|10  |20  |30  |
+----+----+----+
```

**Time Complexity: O(1)**

> `pop_back()` does NOT return the removed element. Store `v.back()` first if you need the value:
```cpp
int last = v.back();
v.pop_back();
```

---

## 7.3 erase() — Single Element

```cpp
v.erase(iterator);

// Example:
vector<int> v = {10, 20, 30, 40};
v.erase(v.begin() + 2);   // Remove element at index 2 (value 30)
// Result: 10 20 40
```

---

## 7.4 Internal Working of erase()

```
Before: 10 20 30 40

Delete 30:   10 20 _  40   (gap appears)
Shift left:  10 20 40      (gap filled)
```

Vector must remain contiguous → elements after deletion point shift left.

**Time Complexity: O(n)** (worst case: delete first element, shift n-1 elements)

---

## 7.5 erase() — Range Deletion

```cpp
v.erase(first_iterator, last_iterator);
// Removes [first, last) — first included, last EXCLUDED

// Example:
vector<int> v = {1, 2, 3, 4, 5, 6};
v.erase(v.begin() + 1, v.begin() + 4);
// Removes indices 1, 2, 3 (values 2, 3, 4) — index 4 (value 5) is NOT removed
// Result: 1 5 6
```

> The `[first, last)` half-open interval rule is consistent across all of STL.

---

## 7.6 Return Value of erase()

Many beginners don't know this — `erase()` returns an **iterator to the element that came after the deleted one**:

```cpp
vector<int> v = {10, 20, 30, 40};
auto it = v.erase(v.begin() + 1);   // Erases 20
// it now points to 30 (the element after deleted 20)
cout << *it;   // 30
```

**This is critical for safe deletion inside loops:**
```cpp
// WRONG — iterator becomes invalid after erase:
for(auto it = v.begin(); it != v.end(); it++){
    if(*it == 5) v.erase(it);   // ❌ 'it' is now invalid after erase
}

// CORRECT — use return value of erase:
for(auto it = v.begin(); it != v.end(); ){
    if(*it == 5) it = v.erase(it);   // ✅ it updated to next valid position
    else ++it;
}
```

---

## 7.7 clear()

```cpp
vector<int> v = {1, 2, 3, 4};
v.clear();
// v.size() = 0, v.empty() = true
```

**Does capacity become zero?** Usually NO. Memory may stay allocated; only elements are removed.

```cpp
// After clear():
cout << v.size();      // 0
cout << v.capacity();  // Still may show previous capacity
cout << v.empty();     // true (1)
```

**Time Complexity: O(n)** — destructors are called for all elements.

---

## 7.8 empty()

```cpp
vector<int> v;
cout << v.empty();    // 1 (true)

v.push_back(10);
cout << v.empty();    // 0 (false)
```

**Best practice:** Use `v.empty()` instead of `v.size() == 0` — cleaner and expresses intent clearly.

**Time Complexity: O(1)**

---

## 7.9 Iterator Invalidation After erase()

```cpp
auto it = v.begin() + 2;
v.erase(it);   // 'it' is now invalid
cout << *it;   // ❌ Undefined Behavior
```

Always use the return value of `erase()` to get the next valid iterator.

---

## 7.10 Deletion Functions Comparison

| Function | What it Removes | Complexity |
|---|---|---|
| `pop_back()` | Last element | O(1) |
| `erase(it)` | One specific element | O(n) |
| `erase(first, last)` | A range | O(n) |
| `clear()` | Everything | O(n) |

---

## 7.11 Common Mistakes — Chapter 7

**Mistake 1:** Passing index to erase instead of iterator
```cpp
v.erase(2);              // ❌ Won't compile
v.erase(v.begin() + 2);  // ✅
```

**Mistake 2:** Using iterator after erase
```cpp
auto it = v.begin();
v.erase(it);
cout << *it;   // ❌ Undefined Behavior
```

**Mistake 3:** Calling pop_back() on empty vector
```cpp
vector<int> v;
v.pop_back();   // ❌ Undefined Behavior — always check empty() first
```

**Mistake 4:** Thinking clear() frees memory
```cpp
v.clear();
// Size = 0, but capacity likely unchanged
// Use shrink_to_fit() if you want to request memory release
```

---
---

# CHAPTER 8 — Memory Management

---

## 8.1 size()

```cpp
vector<int> v = {10, 20, 30};
cout << v.size();   // 3
```

Returns number of elements currently stored. **Time Complexity: O(1)** (stored internally, no counting).

---

## 8.2 capacity()

```cpp
vector<int> v;
v.push_back(10); cout << v.capacity();  // 1
v.push_back(20); cout << v.capacity();  // 2
v.push_back(30); cout << v.capacity();  // 4 ← doubled!
```

Returns how much memory is currently allocated (total slots, including empty ones).

**Time Complexity: O(1)**

---

## 8.3 Size vs Capacity — The Critical Difference

```
Size = 3, Capacity = 5:

+----+----+----+----+----+
|10  |20  |30  |    |    |
+----+----+----+----+----+
Used Used Used Empty Empty
```

**Size** = elements actually stored = what you put in.
**Capacity** = allocated memory slots = what is reserved.

Capacity ≥ Size always. It can be larger but never smaller.

**Run this experiment — it's one of the best ways to understand vectors:**
```cpp
vector<int> v;
for(int i = 1; i <= 20; i++){
    v.push_back(i);
    cout << "Size=" << v.size() << " Capacity=" << v.capacity() << "\n";
}
```

---

## 8.4 resize()

```cpp
v.resize(newSize);
```

**Case 1 — Increasing size:**
```cpp
vector<int> v = {1, 2, 3};
v.resize(5);
// Result: 1 2 3 0 0  ← new elements default to 0
```

**Case 2 — Decreasing size:**
```cpp
vector<int> v = {1, 2, 3, 4, 5};
v.resize(3);
// Result: 1 2 3  ← elements 4 and 5 are removed
```

**Case 3 — Resize with value:**
```cpp
vector<int> v = {1, 2, 3};
v.resize(6, 100);
// Result: 1 2 3 100 100 100
```

**Time Complexity:** O(new elements added or removed) — worst case O(n).

---

## 8.5 reserve()

```cpp
vector<int> v;
v.reserve(100);
```

**Does NOT create 100 elements.** Creates 0 elements but reserves space for 100.

```cpp
v.reserve(100);
cout << v.size();      // 0  ← no elements
cout << v.capacity();  // 100 ← memory reserved

cout << v[0];   // ❌ CRASH — no elements exist despite capacity being 100
```

**Why use reserve():**
Without reserve, inserting 100,000 elements causes many reallocations:
```
Capacity: 1 → 2 → 4 → 8 → 16 → 32 → ... → 65536 → 131072
```

With `v.reserve(100000)` — single allocation, no reallocations needed.

**Time Complexity:** O(n) if reallocation happens, O(1) otherwise.

---

## 8.6 resize() vs reserve() — The Interview Question

| Feature | `resize()` | `reserve()` |
|---|---|---|
| Changes size? | ✅ Yes | ❌ No |
| Changes capacity? | Sometimes | ✅ Yes |
| Creates elements? | ✅ Yes | ❌ No |
| Use case | "I need n elements" | "I will insert n elements — allocate ahead" |

```cpp
vector<int> v;
v.resize(5);    // Size=5, Capacity≥5, 5 elements exist (all 0)
v.reserve(5);   // Size=0, Capacity=5, 0 elements exist — still empty
```

---

## 8.7 swap()

```cpp
vector<int> a = {1, 2, 3};
vector<int> b = {10, 20};
a.swap(b);
// a: 10 20
// b: 1 2 3
```

**Time Complexity: O(1)** — vectors exchange internal pointers, no element-by-element copying.

---

## 8.8 shrink_to_fit()

```cpp
vector<int> v;
v.reserve(100);       // Capacity = 100
v.push_back(10);      // Size = 1, Capacity = 100

v.shrink_to_fit();    // Requests: reduce capacity to match size
// Capacity may become 1 (implementation-defined)
```

The C++ standard calls this a **request** — implementations are not required to shrink, but most do.

**Time Complexity:** O(n) if memory reallocated.

---

## 8.9 max_size()

```cpp
cout << v.max_size();   // Something like 2305843009213693951
```

Maximum theoretical elements the vector could hold on your system. Rarely used in DSA.

---

## 8.10 Internal Memory Layout

```
Capacity=4, Size=2:

+----+----+----+----+
|10  |20  |    |    |   ← slots 2 and 3 reserved but not used
+----+----+----+----+

After v.resize(2): logically still 10 20, capacity unchanged
After v.push_back(50): 10 20 50 — no reallocation needed (capacity was 4)
```

---

## 8.11 Common Mistakes — Chapter 8

**Mistake 1:** Thinking reserve() creates elements
```cpp
v.reserve(5);
v[0] = 10;   // ❌ No elements exist! Need push_back or resize first.
```

**Mistake 2:** Thinking clear() releases memory
```cpp
v.clear();              // Size = 0, but capacity unchanged
v.shrink_to_fit();      // Request memory release after clear
```

**Mistake 3:** Confusing resize and reserve
```cpp
v.resize(5);   // Creates 5 elements (you can use v[0] to v[4])
v.reserve(5);  // Reserves memory for 5 elements (v is still empty!)
```

---
---

# CHAPTER 9 — Sorting Vectors

---

## 9.1 Why Do We Need sort()?

Instead of writing Bubble Sort or Merge Sort manually, C++ STL provides `sort()` — highly optimized and works on any range.

---

## 9.2 Basic Syntax

```cpp
sort(v.begin(), v.end());

// Full example:
vector<int> v = {5, 1, 4, 2, 3};
sort(v.begin(), v.end());
// Output: 1 2 3 4 5
```

`v.begin()` = starting point (first element included).
`v.end()` = ending point (one past last — last element included in sort).

---

## 9.3 The [start, end) Rule

```cpp
sort(v.begin(), v.end());
// Sorts everything from begin() up to (but not including) end()
// Since end() is "one past the last", this sorts the entire vector
```

This `[start, end)` convention is used in ALL of STL: `sort`, `erase`, `lower_bound`, `upper_bound`, etc.

---

## 9.4 Descending Sort with greater<int>()

```cpp
sort(v.begin(), v.end(), greater<int>());
// Output: 5 4 3 2 1
```

`greater<int>()` is a **comparator** that makes sort use `>` instead of `<`.

---

## 9.5 Time Complexity & IntroSort

**Time Complexity: O(n log n)**

**Which algorithm does STL use?**

> Common wrong answer: "Quicksort"
> **Correct:** **IntroSort** (Introduction Sort)

IntroSort is a hybrid:
```
Start with Quicksort
↓
If recursion depth becomes too deep → switch to Heapsort
↓
For small subarrays → use Insertion Sort
```

This gives:
- Fast average performance (like Quicksort)
- Guaranteed O(n log n) worst case (unlike pure Quicksort)

---

## 9.6 Sorting Only Part of a Vector

```cpp
vector<int> v = {9, 7, 4, 3, 8, 2};
sort(v.begin() + 2, v.begin() + 5);
// Only sorts indices 2, 3, 4 (values 4, 3, 8)
// Result: 9 7 3 4 8 2
```

---

## 9.7 Default Sorting of Pairs

```cpp
vector<pair<int,int>> v = {{4,3}, {7,5}, {2,8}};
sort(v.begin(), v.end());
// Sorts by .first first; if .first equal, sorts by .second
// Result: (2,8) (4,3) (7,5)
```

```cpp
// Equal .first example:
vector<pair<int,int>> v = {{2,8}, {2,3}, {1,5}};
sort(v.begin(), v.end());
// Result: (1,5) (2,3) (2,8)  ← both have .first=2, sorted by .second
```

---

## 9.8 Sorting by Second Element

By default, sort compares `.first`. To sort by `.second`, write a custom comparator.

---

## 9.9 Custom Comparator Function

```cpp
bool comp(pair<int,int> a, pair<int,int> b){
    return a.second < b.second;   // Sort by second element ascending
}

sort(v.begin(), v.end(), comp);
```

**Mental model for writing comparators:**
> Fix two instances `a` and `b`. Ask: "Should `a` come BEFORE `b`?" Return `true` if yes.

**Multi-criteria example (second ascending, if equal then first descending):**
```cpp
bool comp(pair<int,int> a, pair<int,int> b){
    if(a.second != b.second) return a.second < b.second;
    return a.first > b.first;
}
```

> ⚠️ Use strict `<` or `>`. Never use `<=` or `>=` in comparators — it causes undefined behavior (violates strict weak ordering).

---

## 9.10 Lambda Comparator (Preview)

```cpp
sort(v.begin(), v.end(), [](pair<int,int> a, pair<int,int> b){
    return a.second < b.second;
});
```

Same as the named comparator function, written inline. Covered fully in Chapter 10.

---

## 9.11 stable_sort() vs sort()

**sort()** — not stable (equal elements may change relative order)
**stable_sort()** — stable (equal elements preserve original relative order)

```cpp
stable_sort(v.begin(), v.end(), comp);  // O(n log n), preserves stability
```

Use `stable_sort` when you need to preserve the original ordering of elements that compare as equal.

---

## 9.12 Common Mistakes — Chapter 9

**Mistake 1:** Forgetting parentheses on end()
```cpp
sort(v.begin(), v.end);    // ❌ Won't compile
sort(v.begin(), v.end());  // ✅
```

**Mistake 2:** Non-strict comparator
```cpp
return a.second <= b.second;   // ❌ Wrong — use strict <
return a.second < b.second;    // ✅
```

**Mistake 3:** Using sort() on list
```cpp
list<int> l;
sort(l.begin(), l.end());   // ❌ Won't compile — list iterators not random access
l.sort();                   // ✅ Use member function
```

---
---

# CHAPTER 10 — Lambda Functions

---

## 10.1 What is a Lambda?

Suppose you need a comparator that's used only once. Writing a full separate function feels unnecessary:

```cpp
bool comp(pair<int,int> a, pair<int,int> b){
    return a.second < b.second;
}
sort(v.begin(), v.end(), comp);
```

Lambda = **A function without a name** (Anonymous Function).

```cpp
sort(v.begin(), v.end(),
    [](pair<int,int> a, pair<int,int> b){
        return a.second < b.second;
    });
```

Everything stays in one place. Cleaner.

---

## 10.2 Why Were Lambdas Introduced?

Without lambda:
- Create a separate function with a name
- Takes up space even if used only once
- Clutters code with single-use helper functions

With lambda:
- Write the logic exactly where it's needed
- No naming required
- Used heavily in STL algorithms (sort, find_if, count_if, remove_if, etc.)

---

## 10.3 Complete Lambda Syntax

```cpp
[capture_list](parameters) -> return_type {
    body
};
```

- `[capture_list]` — what outside variables to bring in (see below)
- `(parameters)` — input parameters, just like a function
- `-> return_type` — optional, compiler usually deduces it
- `{ body }` — function body

---

## 10.4 Smallest Lambda Example

```cpp
auto greet = [](){
    cout << "Hello";
};

greet();   // Output: Hello
```

Equivalent to:
```cpp
void greet(){ cout << "Hello"; }
```

---

## 10.5 Lambda Returning a Value

```cpp
auto add = [](int a, int b){
    return a + b;
};

cout << add(5, 3);   // Output: 8
```

Equivalent to:
```cpp
int add(int a, int b){ return a + b; }
```

---

## 10.6 Sorting Using a Lambda

```cpp
vector<pair<int,int>> v = {{4,8}, {7,2}, {2,5}};

sort(v.begin(), v.end(), [](pair<int,int> a, pair<int,int> b){
    return a.second < b.second;
});
// Result: (7,2) (2,5) (4,8)
```

**How STL uses it:** It calls the lambda with two elements, gets true/false, and decides ordering. Repeats until sorted.

---

## 10.7 Descending Sort with Lambda

```cpp
sort(v.begin(), v.end(), [](int a, int b){
    return a > b;
});
// Same as: sort(v.begin(), v.end(), greater<int>());
```

---

## 10.8 Capture List — []

Lambda ke andar outside variables use karne ke liye **capture list** use karte hain.

```cpp
int x = 10;

auto fun = [](){
    cout << x;   // ❌ Error — x not captured
};
```

---

## 10.9 Capture by Value [x]

```cpp
int x = 10;

auto fun = [x](){
    cout << x;   // ✅ x captured by value (copy)
};

x = 999;   // Changing original doesn't affect the captured copy
fun();     // Output: 10 (the copy captured at lambda creation time)
```

---

## 10.10 Capture by Reference [&x]

```cpp
int x = 10;

auto fun = [&x](){
    x++;   // Modifies the ORIGINAL x
};

fun();
cout << x;   // Output: 11
```

---

## 10.11 Capture Everything [=] and [&]

```cpp
int a = 10, b = 20;

// Capture all by value:
auto fun1 = [=](){ cout << a + b; };  // Output: 30
// Changes to a,b after this line don't affect fun1

// Capture all by reference:
auto fun2 = [&](){ a++; b++; };       // Modifies both a and b directly
```

---

## 10.12 Mutable Lambda

By default, captured-by-value variables cannot be modified inside the lambda:

```cpp
int x = 10;
auto fun = [x](){ x++; };   // ❌ Error — can't modify captured copy by default

auto fun = [x]() mutable {
    x++;            // ✅ Can modify the COPY (not the original)
    cout << x;      // Prints 11
};
fun();
cout << x;          // Still 10 — original unchanged
```

---

## 10.13 Lambda vs Normal Function

| Feature | Normal Function | Lambda |
|---|---|---|
| Has name | Yes | No (anonymous) |
| Reusable | Yes | Usually one-time |
| Definition location | Separate | Written inline |
| Can capture variables | No (only via parameters) | Yes (capture list) |
| Code length | Longer | Shorter |

**Lambda is preferred when** the function is used only once and written at the call site makes code clearer.

---
---

# CHAPTER 11 — Interview Patterns & Advanced Concepts

---

## 11.1 Passing Vector by Value (Method 1)

```cpp
void print(vector<int> v){
    for(int x : v) cout << x << " ";
}
```

Agar vector mein 100,000 elements hain, **complete copy** banti hai → **O(n) overhead**.

**When to use:** Only when you actually need a separate copy inside the function (very rare).

---

## 11.2 Passing Vector by Reference (Method 2)

```cpp
void print(vector<int> &v){
    for(int x : v) cout << x << " ";
}
```

No copy. Just a reference to the original. **O(1) to pass.**

Function can modify the original vector. **Use this 95% of the time.**

---

## 11.3 Passing by Const Reference (Method 3) — Best Practice

```cpp
void print(const vector<int> &v){
    for(int x : v) cout << x << " ";
    // v.push_back(100);   ← ❌ Compiler error — const prevents modification
}
```

No copy, no modification risk. **Best for read-only functions.** Professional C++ code uses this pattern extensively.

---

## 11.4 Returning a Vector from a Function

```cpp
vector<int> create(){
    vector<int> v = {1, 2, 3};
    return v;   // Perfectly fine!
}
```

Modern C++ uses **Return Value Optimization (RVO)** — the vector is often not even copied, it's constructed directly at the caller's location. Don't worry about returning vectors by value in modern C++.

---

## 11.5 Vector of Pairs

```cpp
vector<pair<int,int>> v;
v.push_back({1, 10});
v.emplace_back(2, 20);   // More efficient

for(auto x : v){
    cout << x.first << " " << x.second << "\n";
}
```

**Used in:** Graph adjacency lists (node, weight), sorting with index tracking, interval problems.

---

## 11.6 Nested Vectors (2D Vector)

```cpp
vector<vector<int>> matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

cout << matrix[1][2];   // Row 1 (second row), Col 2 (third col) = 6
```

**Traversal:**
```cpp
for(int i = 0; i < matrix.size(); i++){
    for(int j = 0; j < matrix[i].size(); j++){
        cout << matrix[i][j] << " ";
    }
    cout << "\n";
}
```

---

## 11.7 Jagged Arrays

Unlike C arrays, vector rows can have different sizes:

```cpp
vector<vector<int>> v = {
    {1, 2},
    {3, 4, 5},
    {6}
};
// Row 0: 1 2
// Row 1: 3 4 5
// Row 2: 6
```

This is called a **Jagged Array** — rows of unequal lengths.

---

## 11.8 2D Vector Input/Output

```cpp
int n, m;
cin >> n >> m;

// Input:
vector<vector<int>> v(n, vector<int>(m));
for(int i = 0; i < n; i++)
    for(int j = 0; j < m; j++)
        cin >> v[i][j];

// Output:
for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++)
        cout << v[i][j] << " ";
    cout << "\n";
}
```

---

## 11.9 Dynamic 2D Vector — Graph Representation

```cpp
int n = 5;
vector<vector<int>> graph(n);   // n empty rows

graph[0].push_back(3);   // Edge 0 → 3
graph[0].push_back(5);   // Edge 0 → 5
graph[2].push_back(7);   // Edge 2 → 7

// Memory:
// 0 → [3, 5]
// 1 → []
// 2 → [7]
// 3 → []
// 4 → []
```

This is exactly how **adjacency lists** are stored for graph problems.

---

## 11.10 When to Use a Vector

✅ Size is unknown at compile time
✅ Need fast random access `v[i]`
✅ Primarily adding elements to the end
✅ Need sorting or binary search
✅ Using STL algorithms (`sort`, `find`, `lower_bound`)
✅ Most LeetCode/CP problems
✅ Storing results, intermediate data

---

## 11.11 When NOT to Use a Vector

❌ Frequently inserting/deleting **at the front** → Use `deque` (O(1) front push) or `list` (O(1) anywhere with iterator)

❌ Frequently inserting/deleting **in the middle** with no need for random access → Use `list`

❌ Need LIFO behavior → Use `stack`

❌ Need FIFO behavior → Use `queue`

❌ Need sorted, unique elements → Use `set`

❌ Need fast key-based lookup → Use `map` or `unordered_map`

---

## 11.12 Common Interview Mistakes

**Mistake 1:** Passing by value (unnecessary copy)
```cpp
void fun(vector<int> v)    // ❌ Copies entire vector
void fun(vector<int> &v)   // ✅ Reference, no copy
```

**Mistake 2:** Accessing empty vector
```cpp
vector<int> v;
v[0] = 5;   // ❌ Crash
```

**Mistake 3:** Accessing beyond reserved capacity
```cpp
v.reserve(5);
cout << v[0];   // ❌ No elements exist
```

**Mistake 4:** Wrong erase in loop
```cpp
// Wrong:
for(auto it = v.begin(); it != v.end(); it++)
    if(*it == 5) v.erase(it);   // ❌ iterator invalid after erase

// Correct:
for(auto it = v.begin(); it != v.end(); )
    if(*it == 5) it = v.erase(it);  // ✅ use return value
    else ++it;
```

---

## 11.13 Top 10 Interview Questions

1. Difference between `reserve()` and `resize()`?
2. Difference between `push_back()` and `emplace_back()`?
3. Difference between `v[]` and `v.at()`?
4. Difference between `size()` and `capacity()`?
5. Why is `push_back()` amortized O(1)?
6. Why does vector double capacity instead of incrementing by 1?
7. Why is `vector` indexing O(1)?
8. Why should vectors be passed by reference to functions?
9. Can `clear()` free memory? If not, what can?
10. What is iterator invalidation and when does it occur?

---
---

# PART B — LISTS

---

# CHAPTER 12 — std::list (Doubly Linked List)

---

## 12.1 Why Do We Need List?

```cpp
vector<int> v = {10, 20, 30, 40};
v.insert(v.begin(), 5);   // Insert 5 at beginning
```

Internally: **every single element shifts right** → O(n).

Suppose you do this 100,000 times → very slow.

---

## 12.2 What is std::list?

> `std::list` is a **Doubly Linked List** provided by STL.

Unlike vectors, elements are **NOT stored in contiguous memory**. Each element (node) is stored somewhere in memory, connected by pointers.

---

## 12.3 Internal Working — Non-Contiguous Memory

```cpp
list<int> l = {10, 20, 30};
```

Vector would store: `|10|20|30|` at consecutive addresses.

List stores:
```
Address 1000          Address 8000          Address 2500
+--------+-----+-----+  +--------+-----+-----+  +--------+-----+-----+
|prev=NULL| 10  |next=8000| |prev=1000| 20  |next=2500| |prev=8000| 30  |next=NULL|
+--------+-----+-----+  +--------+-----+-----+  +--------+-----+-----+
```

Addresses `1000`, `8000`, `2500` — completely different locations. Not contiguous.

---

## 12.4 What is a Doubly Linked List?

Each **node** stores 3 things:
1. **Pointer to previous node**
2. **Data value**
3. **Pointer to next node**

```
NULL ← 10 ↔ 20 ↔ 30 → NULL
```

Each node knows its **previous** and **next** neighbor. Hence "Doubly" (two-way).

---

## 12.5 Why Insertion is O(1)

```
Before: 10 ↔ 20 ↔ 30
Want:   10 ↔ 20 ↔ 25 ↔ 30
```

Only pointer changes needed (after reaching the position):
- `20.next` → points to new node `25`
- `25.prev` → points to `20`
- `25.next` → points to `30`
- `30.prev` → points to `25`

**No shifting. Just 4 pointer updates. O(1).**

---

## 12.6 Why Indexing is Impossible

```cpp
l[3];   // ❌ Won't compile
```

To reach node 3, computer must traverse:
```
10 → 20 → 30 → 40   (visited one by one)
```

No formula like `Base + Index`. Nodes are scattered in memory.

Therefore, lists do **NOT** support `[]` or `at()`.

---

## 12.7 Creating Lists

```cpp
list<int> l;          // Empty list
list<int> l(5);       // 5 zeros: 0 0 0 0 0
list<int> l(5, 100);  // 5 hundreds: 100 100 100 100 100
list<int> l2(l1);     // Copy of l1
```

---

## 12.8 push_back() and push_front()

```cpp
list<int> l;
l.push_back(10);    // l: 10
l.push_back(20);    // l: 10 20
l.push_front(5);    // l: 5 10 20   ← THIS is list's advantage over vector!
```

Both are **O(1)**. `push_front()` on a vector is **O(n)**.

---

## 12.9 pop_back() and pop_front()

```cpp
list<int> l = {5, 10, 20, 30};
l.pop_front();   // l: 10 20 30  — O(1)
l.pop_back();    // l: 10 20     — O(1)
```

Both O(1). On vector: `pop_front()` doesn't even exist (would be O(n)).

---

## 12.10 front() and back()

```cpp
list<int> l = {10, 20, 30};
cout << l.front();   // 10 — O(1)
cout << l.back();    // 30 — O(1)
```

---

## 12.11 Iterators in Lists

Since `l[i]` doesn't work, use iterators to traverse:

```cpp
// Iterator loop:
for(auto it = l.begin(); it != l.end(); it++){
    cout << *it << " ";
}

// Range-based (simpler):
for(int x : l){
    cout << x << " ";
}
```

**Note:** List iterators are **bidirectional** (can go `++` and `--`), but NOT random access. You cannot do `l.begin() + 3` — that arithmetic doesn't work on list iterators.

---

## 12.12 insert()

```cpp
list<int> l = {10, 20, 30};
auto it = l.begin();
it++;               // it now points to 20
l.insert(it, 15);   // Insert 15 before 20
// l: 10 15 20 30
```

- Finding the position: O(n) (must traverse)
- Actual insertion (once you have the iterator): **O(1)** (just pointer updates)

---

## 12.13 erase()

```cpp
list<int> l = {10, 20, 30};
auto it = l.begin();
it++;
l.erase(it);   // Remove 20
// l: 10 30   — No shifting! Just pointer updates.
```

---

## 12.14 remove()

Unique to lists (vectors don't have this member function):

```cpp
list<int> l = {1, 2, 3, 2, 4};
l.remove(2);   // Removes ALL occurrences of 2
// l: 1 3 4
```

**Time Complexity: O(n)** — must scan entire list.

---

## 12.15 reverse()

```cpp
list<int> l = {1, 2, 3};
l.reverse();
// l: 3 2 1
```

**Time Complexity: O(n)**

---

## 12.16 sort()

```cpp
list<int> l = {5, 2, 4, 1};
l.sort();    // ✅ Use member function
// l: 1 2 4 5
```

> ⚠️ You cannot use `std::sort(l.begin(), l.end())` — list iterators are bidirectional, not random access. `std::sort` requires random access iterators. Use `l.sort()` instead.

**Time Complexity: O(n log n)**

---

## 12.17 unique()

```cpp
list<int> l = {1, 1, 2, 2, 3, 3};
l.unique();
// l: 1 2 3
```

**Removes CONSECUTIVE duplicates only:**
```cpp
list<int> l = {1, 2, 1};
l.unique();
// l: 1 2 1   ← The two 1s are not consecutive, so they stay!
```

For removing all duplicates, `sort()` first, then `unique()`.

---

## 12.18 merge()

```cpp
list<int> a = {1, 3, 5};
list<int> b = {2, 4, 6};
a.merge(b);
// a: 1 2 3 4 5 6
// b: empty (elements were moved to a)
```

**Both lists must already be sorted.** Time Complexity: O(n).

---

## 12.19 splice()

Moves elements from one list to another **without copying** (just pointer updates):

```cpp
list<int> a = {1, 2, 3};
list<int> b = {10, 20, 30};

a.splice(a.begin(), b);
// a: 10 20 30 1 2 3
// b: empty

// Or splice at specific position with specific element from b:
a.splice(a.begin(), b, b.begin()); // Move only first element of b to front of a
```

**Time Complexity: O(1)** for transferring nodes (once positions are known).

---

## 12.20 Vector vs List — Complete Comparison

| Feature | Vector | List |
|---|---|---|
| Memory layout | Contiguous | Non-contiguous |
| Internal structure | Dynamic Array | Doubly Linked List |
| Random access `[i]` | ✅ O(1) | ❌ Not available |
| push_front | ❌ O(n) | ✅ O(1) |
| push_back | ✅ Amortized O(1) | ✅ O(1) |
| pop_front | ❌ O(n) | ✅ O(1) |
| pop_back | ✅ O(1) | ✅ O(1) |
| Insert middle (with iterator) | ❌ O(n) | ✅ O(1) |
| Erase middle (with iterator) | ❌ O(n) | ✅ O(1) |
| Cache friendly | ✅ Yes | ❌ Less so |
| Memory per element | Less (data only) | More (data + 2 pointers) |
| sort() | `std::sort(v.begin(), v.end())` | `l.sort()` |
| Iterators | Random access | Bidirectional only |

---

## 12.21 Time Complexity Table

| Operation | Vector | List |
|---|---|---|
| Access by index | O(1) | O(n) |
| push_back | Amortized O(1) | O(1) |
| push_front | O(n) | O(1) |
| pop_back | O(1) | O(1) |
| pop_front | O(n) | O(1) |
| insert (given iterator) | O(n) | O(1) |
| erase (given iterator) | O(n) | O(1) |
| find position | O(n) | O(n) |
| sort | O(n log n) | O(n log n) |
| reverse | O(n) | O(n) |

---

## 12.22 Common Mistakes — Chapter 12

**Mistake 1:** Using indexing on list
```cpp
list<int> l = {1, 2, 3};
cout << l[2];   // ❌ Won't compile. Lists don't support [].
```

**Mistake 2:** Using std::sort on list
```cpp
sort(l.begin(), l.end());   // ❌ Compilation error
l.sort();                   // ✅ Use member function
```

**Mistake 3:** Iterator arithmetic on list
```cpp
auto it = l.begin();
it + 3;             // ❌ Error — list iterators don't support + operator
it++; it++; it++;   // ✅ Must manually advance
```

**Mistake 4:** Thinking list is always faster
```
List: O(1) insert/delete IF you have the iterator
Vector: O(1) random access, much better cache performance
For random access problems: vector wins
For front insertion/deletion heavy problems: list wins
```

---

## 12.23 The Critical Interview Takeaway

Common misconception: *"List insertion is O(1), so lists are always better than vectors."*

**The correct, complete answer:**

- If you **already have an iterator** to the position → list does insert/delete in **O(1)** (just pointer changes)
- If you **must search for the position first** → that search is **O(n)** (must traverse)
- For random access, vectors are **always faster** (O(1) vs O(n))
- Vectors are **more cache-friendly** than lists (contiguous vs scattered memory) — in modern CPUs, cache misses are expensive, so vectors often outperform lists even for insertions in practice

**Rule of thumb:** Use vectors by default. Switch to lists only when you have a specific, measured need for O(1) front insertions or O(1) middle insertion/deletion with a known position.

---
---

# APPENDIX A — Master Cheat Sheet

## All Vector Functions at a Glance

```cpp
// ── CONSTRUCTION ──────────────────────────────────────
vector<int> v;                          // Empty
vector<int> v(5);                       // 5 zeros
vector<int> v(5, 100);                  // 5 hundreds
vector<int> v2(v1);                     // Copy
vector<vector<int>> g(n, vector<int>(m, 0));  // 2D grid

// ── ADDING ELEMENTS ──────────────────────────────────
v.push_back(10);                        // Add to end O(1) amortized
v.emplace_back(10);                     // Construct in-place O(1) amortized

// ── ACCESS ────────────────────────────────────────────
v[i];                                   // O(1) — no bounds check
v.at(i);                                // O(1) — with bounds check
v.front();                              // First element O(1)
v.back();                               // Last element O(1)
v.data();                               // Raw pointer O(1)

// ── ITERATORS ────────────────────────────────────────
v.begin();   v.end();                   // Forward iteration
v.rbegin();  v.rend();                  // Reverse iteration
auto it = v.begin(); *it; ++it;         // Dereference, advance

// ── INSERT ────────────────────────────────────────────
v.insert(v.begin()+2, 50);             // One element before pos O(n)
v.insert(v.begin()+2, 3, 50);          // 3 copies of 50 O(n)
v.insert(v.end(), b.begin(), b.end()); // Range insert O(n)
v.insert(v.begin()+1, {10,20,30});     // Initializer list O(n)

// ── REMOVE ────────────────────────────────────────────
v.pop_back();                           // Remove last O(1)
v.erase(v.begin()+1);                  // Remove one element O(n)
v.erase(v.begin()+1, v.begin()+4);    // Remove range O(n)
v.clear();                              // Remove all O(n)
v.empty();                              // Is it empty? O(1)

// ── MEMORY ────────────────────────────────────────────
v.size();                               // Element count O(1)
v.capacity();                           // Allocated slots O(1)
v.resize(10);                          // Change size O(n)
v.resize(10, -1);                      // Change size with value O(n)
v.reserve(1000);                       // Reserve memory O(n)
v.shrink_to_fit();                     // Request memory reduction O(n)
v.swap(v2);                            // Swap two vectors O(1)
v.max_size();                          // Max possible size O(1)

// ── SORTING ───────────────────────────────────────────
sort(v.begin(), v.end());              // Ascending O(n log n)
sort(v.begin(), v.end(), greater<int>());  // Descending
sort(v.begin(), v.end(), comp);        // Custom comparator
stable_sort(v.begin(), v.end());       // Stable sort O(n log n)
```

---

# APPENDIX B — Complete Time Complexity Reference

| Function | Complexity | Notes |
|---|---|---|
| `v[i]`, `v.at(i)`, `front()`, `back()`, `data()` | O(1) | Contiguous memory math |
| `push_back()`, `emplace_back()` | Amortized O(1) | Occasional O(n) reallocation |
| `pop_back()` | O(1) | No shifting |
| `insert()` | O(n) | Shifting required |
| `erase()` | O(n) | Shifting required |
| `clear()` | O(n) | Destructor calls |
| `size()`, `capacity()`, `empty()`, `max_size()` | O(1) | Stored internally |
| `resize()` | O(n) worst case | |
| `reserve()` | O(n) if reallocates | O(1) if already enough |
| `swap()` | O(1) | Pointer swap |
| `shrink_to_fit()` | O(n) if reallocates | |
| `sort()`, `stable_sort()` | O(n log n) | IntroSort internally |

---

# APPENDIX C — Interview Questions Bank

**Chapter 1 — Introduction**
1. Why are vectors preferred over arrays in C++?
2. Can vectors grow infinitely?
3. If vectors grow by copying, why is indexing still O(1)?
4. What is contiguous memory and why does it matter?
5. Why do vectors need to copy everything during reallocation?

**Chapter 2 — Constructors**
6. Difference between `vector<int> v;` and `vector<int> v(5);`?
7. Why does `vector<int> v(5);` initialize to zeros?
8. Is `vector<int> v2(v1)` a shallow copy or deep copy?
9. Why is creating `vector<int>(1000000)` slower than `vector<int>()`?

**Chapter 3 — Adding Elements**
10. Why is `push_back()` amortized O(1) and not always O(1)?
11. Why does vector double capacity instead of +1?
12. What is a temporary object in the context of push_back?
13. When does `emplace_back()` provide a real advantage over `push_back()`?
14. What is reallocation and when does it occur?

**Chapter 4 — Accessing**
15. Difference between `v[i]` and `v.at(i)`?
16. What is undefined behavior and why is `v[100]` on a small vector dangerous?
17. Why is `v.back()` on an empty vector undefined behavior?

**Chapter 5 — Iterators**
18. What is an iterator and why does STL use them?
19. Why does `v.end()` point past the last element?
20. What does dereferencing (`*it`) do?
21. Difference between a pointer and an iterator?
22. Can you do `v.begin() + 5` for a list iterator? Why/why not?

**Chapter 6 — insert()**
23. Why does `insert()` require an iterator, not an index?
24. Why is `insert()` O(n) but `push_back()` is O(1)?
25. What is iterator invalidation after insert()?

**Chapter 7 — Removing**
26. What does `erase()` return? Why is this useful?
27. Difference between `erase()` and `pop_back()`?
28. Does `clear()` reduce capacity?
29. How do you safely erase elements while iterating?

**Chapter 8 — Memory**
30. Difference between `resize()` and `reserve()`?
31. Why is `swap()` O(1)?
32. Why does `clear()` not always release memory?
33. Can capacity ever be less than size?

**Chapter 9 — Sorting**
34. Which algorithm does `std::sort()` use internally?
35. Difference between `sort()` and `stable_sort()`?
36. What is a strict weak ordering and why must comparators follow it?
37. How are pairs sorted by default?

**Chapter 10 — Lambda**
38. What is a lambda function?
39. Difference between `[x]` and `[&x]` capture?
40. What does `mutable` do in a lambda?

**Chapter 12 — List**
41. Why doesn't `list` support `[]` operator?
42. Why is `push_front()` O(1) for list but O(n) for vector?
43. Why can't you use `std::sort()` on a list?
44. Why does list consume more memory per element than vector?
45. Is list insertion always O(1)? (Be careful — what's the complete answer?)

---

# APPENDIX D — Function Importance Ratings

| Function | Importance | Used In |
|---|---|---|
| `push_back()` | ⭐⭐⭐⭐⭐ | Almost every problem |
| `size()` | ⭐⭐⭐⭐⭐ | Loop conditions, checks |
| `v[i]` | ⭐⭐⭐⭐⭐ | Array access pattern |
| `sort()` | ⭐⭐⭐⭐⭐ | Sorting, greedy, intervals |
| `begin()` / `end()` | ⭐⭐⭐⭐⭐ | Iterators, STL algorithms |
| Range-based `for` | ⭐⭐⭐⭐⭐ | Traversal |
| `empty()` | ⭐⭐⭐⭐⭐ | Safety checks |
| `back()` | ⭐⭐⭐⭐ | Stack-style operations |
| `erase()` | ⭐⭐⭐⭐ | Removal patterns |
| `emplace_back()` | ⭐⭐⭐⭐ | Performance, pairs/objects |
| `front()` | ⭐⭐⭐⭐ | Queue-style operations |
| `resize()` | ⭐⭐⭐ | DP tables, known sizes |
| `reserve()` | ⭐⭐⭐ | Performance optimization |
| `insert()` | ⭐⭐⭐ | Specific position insertion |
| `capacity()` | ⭐⭐ | Understanding internals |
| `swap()` | ⭐⭐ | Two-vector swaps |
| `shrink_to_fit()` | ⭐ | Memory optimization |
| `max_size()` | ⭐ | Rarely needed |
| `data()` | ⭐ | C interop |

---

# APPENDIX E — Practice Problems by Chapter

**Chapter 1 (Conceptual):**
1. What is the biggest limitation of a normal array?
2. Explain what "dynamic" means in a vector, in your own words.
3. Why can `v[i]` be accessed in O(1)?
4. Draw memory after `push_back(1)`, `push_back(2)`, `push_back(3)` from an empty vector.
5. Explain in your own words what happens when a vector has no free space and you call `push_back()`.

**Chapter 2 (Coding):**
1. Create an empty vector, insert 10 integers with `push_back()`, print both ways (index loop + range loop).
2. Create `vector<int> v(10)` and read 10 numbers using indexing.
3. Create `vector<int> v(5, 7)` and print it.
4. Copy one vector to another, change the copy, verify original is unchanged.
5. Create a `3×4` matrix and fill with user input.

**Chapter 3 (Coding):**
1. Print `size()` and `capacity()` after every push_back from 1 to 20 — observe the capacity doubling.
2. Create `vector<pair<int,int>>`, insert 5 pairs using `emplace_back()`.
3. Repeat with `push_back()`, compare syntax.

**Chapter 4 (Coding):**
1. Print first and last element using `front()` and `back()`.
2. Replace every even-indexed element with 0.
3. Safely print last element only if vector is not empty.
4. Use `data()` to print all elements via a pointer.

**Chapter 5 (Coding):**
1. Print vector using `auto it = v.begin()` loop.
2. Print in reverse using `rbegin()`/`rend()`.
3. Print second element using iterator (not v[1]).
4. Print fourth element using `*(v.begin() + 3)`.
5. Compare three ways to print: index, iterator, range-based.

**Chapter 6 (Coding):**
1. Insert 100 at index 2 in `{1,2,3,4}`. Expected: `1 2 100 3 4`.
2. Insert 5 copies of 10 after first element.
3. Merge two vectors using `insert()`.
4. Insert `{100,200,300}` using initializer list.

**Chapter 7 (Coding):**
1. Delete element at index 2 from `{10,20,30,40,50}`.
2. Delete first element.
3. Delete last element using `pop_back()`.
4. Delete range indices 1 to 3 using `erase(first, last)`.
5. Clear vector, print size, capacity, and empty() — observe.

**Chapter 8 (Coding):**
1. Print size and capacity after every push_back for 1 to 20.
2. Demonstrate `resize()` growing and shrinking, print after each.
3. Demonstrate `reserve(100)` — print size and capacity before/after.
4. Swap two vectors, verify contents exchanged.
5. Reserve large capacity, insert few elements, call `shrink_to_fit()`, print capacity change.

**Chapter 9 (Coding):**
1. Sort `{9,4,2,8,1}` ascending.
2. Sort descending.
3. Sort only indices 2 to 5.
4. Sort `vector<pair<int,int>>` by default.
5. Sort by second element using custom comparator.
6. Input `{(1,5),(4,2),(3,9),(2,1)}`, sort by second, expected: `(2,1),(4,2),(1,5),(3,9)`.

**Chapter 10 (Lambda):**
1. Sort integers descending using a lambda.
2. Sort pairs by second element using a lambda.
3. Capture a variable by value, print it.
4. Capture by reference, increment it.
5. Write a lambda that returns the square of a number.

**Chapter 12 (List):**
1. Create list, push_back `10 20 30`, print.
2. push_front `5`, expected: `5 10 20 30`.
3. Remove `20` using iterator.
4. Reverse the list.
5. Sort `{5,2,8,1,3}` using `l.sort()`.

---

*This book was compiled from Striver's STL Master Course — all chapters, every topic, nothing skipped.*
*Reference freely during practice. Once you solve all Appendix E questions, vector and list concepts will be permanent.*

