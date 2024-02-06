## Simple Compiler with JavaScript

String of some math operators to result with javascript.

> Learning about compiler with Javascript.
> This is only for exercise.

```
Only this four lines of text can be compile.

- sum {number} and {number}
- sub {number} from {number}
- mul {number} with {number}
- div {number} by {number}
```

**_string to token_**

```js
var str = "sum 5 and 4";

var token = transpileString(str).token;
```

Token

```
[
  {
    "type": "Operator",
    "value": "sum"
  },
  {
    "type": "Number",
    "value": "5"
  },
  {
    "type": "Expression",
    "value": "and"
  },
  {
    "type": "Number",
    "value": "4"
  }
]
```

**_token to ast_**

```js
var str = "sum 5 and 4";

var ast = transpileString(str).ast;
```

AST

```
{
  "type": "Program",
  "body": [
    {
      "type": "Operator",
      "value": "sum"
    },
    {
      "type": "Number",
      "value": "5"
    },
    {
      "type": "Expression",
      "value": "and"
    },
    {
      "type": "Number",
      "value": "4"
    }
  ],
  "sourceType": "text"
}
```

**_result_**

```js
var str = "sum 5 and 4";

var result = transpileString(str).result;

// 9
```
