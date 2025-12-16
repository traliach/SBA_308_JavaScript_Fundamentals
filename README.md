# SBA 308: JavaScript Fundamentals

## Build checkpoints (commit → output)

I worked in small steps. After each commit I ran:

`node main.js`

> Note: During development I temporarily used `DEBUG = true` to see checkpoints.
> For the final submission, `DEBUG = false` so the output is only the final array.

### 1) Commit: "Add sandbox starter data"
Output:
[]
  
### 2) Commit: "Stub function and trycatch"
Output:
[]

### 3) Commit: "Add input validation checks"
Output:
[]

### 4) Commit: "Build due assignment lookup"
Output (DEBUG=true):
Due assignments: 2

### 5) Commit: "Add late penalty helper"
Output (DEBUG=true):
Late penalty check (140/150 late) => adjusted score: 125

### 6) Commit: "Group submissions by learner"
Output (DEBUG=true):
Learners with due submissions: 2

### 7) Commit: "Compute learner results output"
Output (DEBUG=true):
Result for learner 125: {"1":0.94,"2":1,"id":125,"avg":0.985}
Result for learner 132: {"1":0.78,"2":0.833,"id":132,"avg":0.82}

Final output (DEBUG=false):
[
  { "1": 0.94, "2": 1, id: 125, avg: 0.985 },
  { "1": 0.78, "2": 0.833, id: 132, avg: 0.82 }
]


## References

- try/catch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
- throw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- Date_new date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- Date.getTime(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
- Number.isFinite(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
- Number.prototype.toFixed(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed