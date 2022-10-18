# context_menu_js
Context menu for web pages.

## using
include js and css files in head:
    
    <script src="context_menu.js"></script>
  	<link rel="stylesheet" href="context_menu.css">

set up context menu:
    
    let context_menu1 = new ContextMenu([
		  {'name': 'NAME_OF_ITEM', 'function': FUNCTION},
		  {'name': 'NAME_OF_ITEM', 'function': FUNCTION},
		  {'name': 'NAME_OF_ITEM', 'function': FUNCTION},
		  . . .
		], CSS_SELECTOR);

`NAME_OF_ITEM` string value

`FUNCTION` new or existed function

`CSS_SELECTOR` css selector like document.querySelector()
