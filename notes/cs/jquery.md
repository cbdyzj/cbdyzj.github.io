# jQuery

###  Selector

use ',' to merge selection

```
#id
.class
element
*

ancestor descendant
parent > child
prev + next
prev ~ siblings

:first     :last      :header      :not(selector) 
:even      :odd       :eq(index)   :animated
:gt(index) :lt(index) :focus

:contains(text)
:empty
:has(selector)
:parent

:hidden
:visible

[attribute]         [attribute=value]
[attribute!=value]  [attribute^=value]
[attribute$=value]  [attribute*=value]

:input     :text    :password    :radio
:checkbox  :submit  :image       :reset
:button    :file
```

##  Function

```javascript
$([selector,[context]])
$(callback) //$(document).ready(callback)

var o = $(selector)

//method
o.each();     o.map();         o.size();
o.length;     o.selector;      o.context;
o.get();      o.index();       o.eq();

o.data();     o.removeData();

o.queue();    o.dequeue();     o.clearQueue();

o.attr();     o.removeAttr();
o.prop();     o.removeProp();
o.addClass(); o.removeClass(); o.toggleClass();
o.html();     o.text();        o.val();

o.css()


o.show();     o.hide();        o.toggle();
o.slideUp();  o.slideDown();   o.slideToggle();
o.fadeIn();   o.fadeOut();
o.fadeTo();   o.fadeToggle();
o.animate();  o.stop();
o.delay();    o.finish()
o.first();    o.last();

o.hasClass()
o.filter()
o.is()
o.has()
o.not()

o.parent();   o.children();
o.priv();     o.privAll();     o.privUnit();
o.next();     o.nextAll()      o.nextUnit();
o.find()


// event
o.ready()
o.on(evevt,callback)
o.off()
o.one()
o.trigger()
o.triggerHandler()
o.hover(over,out)
o.toggle()

o.blur();       o.change();      o.click();     o.dbclick();
o.error();      o.focus();       o.focusin();   o.focusout();	o.keydown();    o.keypress();    o.keyup();     o.mousedown();
o.mouseenter(); o.mouseleaver(); o.mousemove(); o.mouseout();
o.mouseover();  o.mouseup();     o.resize();    o.sroll();
o.select();     o.submit();      o.unload()

//ajax
$.load();  $.get();  $.post();  $.ajax();
$.getJSON()
$.getScript()

$.ajaxPrefilter()
$.ajaxSetup()

//dom op
o.append();      o.prepend();
o.appendTo();    o.prependTo();
o.before();      o.after();
o.insertAfter(); o.insertBefore();
o.wrap();        o.unwrap();
o.wrapAll();     o.wrapInner();
o.replaceWith(); o.replaceAll();
o.empty();       o.remove();
o.detach();      o.clone();
```

