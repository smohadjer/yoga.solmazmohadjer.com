(function() {
  var template = Handlebars.template, templates = myApp.templates = myApp.templates || {};
templates['classes-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":22}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":32}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"list") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['listing'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":34}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0));
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasPage") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":12,"column":24}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"teachers") : depths[1])) != null ? lookupProperty(stack1,"length") : stack1),">",1,{"name":"ifCond","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":100}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<a href=\"teachers.html#"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</a>";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n				"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":60},"end":{"line":12,"column":89}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return ",";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"class") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":43}}})) != null ? stack1 : "")
    + " data-filter-teacher-id=\""
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"teachers") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":68},"end":{"line":1,"column":106}}})) != null ? stack1 : "")
    + "\" data-filter-class-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"courseId") || (depth0 != null ? lookupProperty(depth0,"courseId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"courseId","hash":{},"data":data,"loc":{"start":{"line":1,"column":130},"end":{"line":1,"column":142}}}) : helper)))
    + "\">\n	<time>\n		<span class=\"dayofweek\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dayofweek") || (depth0 != null ? lookupProperty(depth0,"dayofweek") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dayofweek","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":39}}}) : helper)))
    + "</span>\n		<span class=\"monthday\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":34}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"daynumber") || (depth0 != null ? lookupProperty(depth0,"daynumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"daynumber","hash":{},"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":48}}}) : helper)))
    + "</span>\n		<span class=\"hours\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hours") || (depth0 != null ? lookupProperty(depth0,"hours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hours","hash":{},"data":data,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":31}}}) : helper)))
    + "</span>\n	</time>\n	<h1><a href=\"classes.html?id="
    + alias4(((helper = (helper = lookupProperty(helpers,"courseId") || (depth0 != null ? lookupProperty(depth0,"courseId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"courseId","hash":{},"data":data,"loc":{"start":{"line":7,"column":30},"end":{"line":7,"column":42}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"courseName") || (depth0 != null ? lookupProperty(depth0,"courseName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"courseName","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":58}}}) : helper)))
    + "</a></h1>\n	<p class=\"teacher\"><strong>Teacher:</strong>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"teachers") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "	 </p>\n	<p class=\"level\"><strong>Level:</strong> "
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":15,"column":42},"end":{"line":15,"column":51}}}) : helper)))
    + "</p>\n	<p class=\"address\"><strong>At:</strong> "
    + alias4(((helper = (helper = lookupProperty(helpers,"address") || (depth0 != null ? lookupProperty(depth0,"address") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data,"loc":{"start":{"line":16,"column":41},"end":{"line":16,"column":52}}}) : helper)))
    + "</p>\n</li>\n";
},"useData":true,"useDepths":true});
templates['teachers-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":22}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":32}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"list") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();