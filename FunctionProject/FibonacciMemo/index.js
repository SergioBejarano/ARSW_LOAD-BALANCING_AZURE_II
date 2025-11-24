var bigInt = require("big-integer");

module.exports = async function (context, req) {
    context.log('FibonacciMemo function processed a request.');

    const nth = parseInt(req.body?.nth || req.query?.nth);
    if (isNaN(nth) || nth < 0) {
        context.res = {
            status: 400,
            body: "Please pass a valid non-negative integer 'nth' in the query or body"
        };
        return;
    }

    const memo = {
        0: bigInt.zero,
        1: bigInt.one
    };

    function fib(n) {
        if (memo[n] !== undefined) return memo[n];

        memo[n] = fib(n - 1).add(fib(n - 2));
        return memo[n];
    }

    const result = fib(nth);

    context.res = {
        status: 200,
        body: {
            nth: nth,
            fibonacci: result.toString()
        }
    };
};