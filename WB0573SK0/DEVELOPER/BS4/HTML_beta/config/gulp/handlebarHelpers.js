var handlebars = require('handlebars');

handlebars.registerHelper("iff", function(a, operator, b, opts) {

	var bool = false;

	switch(operator) {
	   case '==':
	       bool = a == b;
	       break;
	   case '>':
	       bool = a > b;
	       break;
	   case '<':
	       bool = a < b;
	       break;
	   case '||':
	       bool = a || b;
	       break;
	   default:
	       throw "Unknown operator " + operator;
	}

	if (bool) {

	    return opts.fn(this);

	} else {

	    return opts.inverse(this);
	    
	}
});

handlebars.registerHelper("getMenuItem", function(nav, item, opts) {
	var res = findValue(nav, 'slug', item);
	return opts.fn(res);
});

function findValue(object, key, itm){
    if(object.hasOwnProperty(key) && object[key]==itm)
        return object;

    for(var i=0;i<Object.keys(object).length;i++){
        if(typeof object[Object.keys(object)[i]]=="object"){
            o=findValue(object[Object.keys(object)[i]], key, itm);
            if(o && o[key] && o[key]==itm)
                return o;
        }
    }

    return null;
}