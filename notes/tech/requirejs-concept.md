# Require.js

> AMD（Asynchronous Module Definition）

### Usage

```html
<script data-main="scripts/main" src="scripts/require.js"></script>
```

### Independent modules

```javascript
define({
    method1: function() {},
    method2: function() {},
});

define(function() {
	return {
	    method1: function() {},
		method2: function() {},
    };
});
```

### Dependent modules

```javascript
define(['module1', 'module2'], function(m1, m2) {
    return {
        method: function() {
            m1.methodA();
			m2.methodB();
        }
    };
});

require(['foo', 'bar'], function ( foo, bar ) {
        foo.doSomething();
});

define(function (require) {
   var otherModule = require('otherModule');
});
```
