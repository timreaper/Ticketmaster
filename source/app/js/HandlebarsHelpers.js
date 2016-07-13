/**
 * If Condition
 *      This is an if loop for handlebars.
 ***/
Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 == v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

/**
 * If Condition (Not)
 *      This is an if not loop for handlebars.
 ***/
Handlebars.registerHelper('ifCondNot', function (v1, v2, options) {
    if (v1 != v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

/** 
 * If Equals
 *      Takes in two numbers and checks if they are of equal value
 ***/
Handlebars.registerHelper('ifEquals', function (x, y, options) {
    console.log('x = ' + x);
    console.log('y = ' + y);
    if (x === y) {
        return options.fn(this);
    }
});

/**
 * Math
 *      Allows for mathematical operators
 ***/
Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

/**
 * While Less Than
 *      Runs this code while less than X
 ***/
Handlebars.registerHelper('while_less_than', function (x, block) {
    var counter = '';
    for (var i = 1; i >= x; --i)
        counter += block.fn(i);
    return counter;
});

/**
 * While More Than
 *      Runs this code while more than X
 ***/
Handlebars.registerHelper('while_more_than', function (x, block) {
    var counter = '';
    for (var i = 1; i <= x; ++i)
        counter += block.fn(i);
    return counter;
});