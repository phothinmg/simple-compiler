/*
Simple Compiler                                    
String to result with Javascript                 
*                                                                           
Copyright (C) 2024 Pho Thin Maung.                       
*                                                                           
*****************************
String :                    *       
sun {number} and {number}   * 
sub {number} from {number}  *
mul {number} with {number}  *
div {number} by {number}    *
*****************************
 */
function transpileString(str) {
  var x = str.split(" ");
  /* lexer, text > token object */
  //   var t = {
  //     operator: x[0],
  //     firstNumber:x[0],,
  //     expression: x[2],
  //     secondNumber: parseInt(x[3]),
  //   };
  var t = [
    {
      type: "Operator",
      value: x[0],
    },
    {
      type: "Number",
      value: x[1],
    },
    {
      type: "Expression",
      value: x[2],
    },
    {
      type: "Number",
      value: x[3],
    },
  ];
  /* parser , token > ast */
  var a = {
    type: "Program",
    body: [
      {
        type: "Operator",
        value: x[0],
      },
      {
        type: "Number",
        value: x[1],
      },
      {
        type: "Expression",
        value: x[2],
      },
      {
        type: "Number",
        value: x[3],
      },
    ],
    sourceType: "text",
  };
  /* transpile ast > JS Result */
  var sum = function (a, b) {
    return parseInt(a) + parseInt(b);
  };
  var sub = function (a, b) {
    return parseInt(a) - parseInt(b);
  };
  var mul = function (a, b) {
    return parseInt(a) * parseInt(b);
  };
  var div = function (a, b) {
    return parseInt(a) / parseInt(b);
  };
  var result = 0;
  var ac = a.body[0].value;
  var ex = a.body[2].value;
  if (ac === "sum" && ex === "and") {
    result = sum(a.body[1].value, a.body[3].value);
  } else if (ac === "sub" && ex === "from") {
    result = sub(a.body[1].value, a.body[3].value);
  } else if (ac === "mul" && ex === "with") {
    result = mul(a.body[1].value, a.body[3].value);
  } else if (ac === "div" && ex === "by") {
    result = div(a.body[1].value, a.body[3].value);
  } else {
    console.log("Syntax error");
  }
  const token = JSON.stringify(t, null, 2);
  const ast = JSON.stringify(a, null, 2);
  return { token, ast, result };
}

var str = "sum 5 and 4";

console.log(transpileString(str).ast);
