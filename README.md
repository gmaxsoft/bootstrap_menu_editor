# Bootstrap Menu Editor

Remake of old Menu Editor Library (made with Typescript), works with Bootstrap 5. 

## Install

Via NPM

```
npm install @maxsoft/bootstrap_menu_editor
```

## How to use

### Imports
```js
import '@maxsoft/bootstrap_menu_editor/lib/css/bootstrap_menu_editor.min.css';
import { MenuEditor, initializeIconPicker } from '@maxsoft/bootstrap_menu_editor';
```

### Creating the object

HTML
```html
<div id="element-id"></div>
```
Javascript

```js
const menuEditor = new MenuEditor('element-id', { maxLevel: 3 });
```

### Setting the Events

```js
menuEditor.onClickDelete((event) => {
	if (confirm('Do you want to delete the item ' + event.item.getDataset().text)) {
		event.item.remove(); // remove the item
	}
});

menuEditor.onClickEdit((event) => {
	let itemData = event.item.getDataset();
	console.log(itemData);
	menuEditor.edit(event.item); // set the item in edit mode
});

menuEditor.onDragEnd((event) => {
	let output = editor.getString();
	console.log(output);
	// add logic here
});
```

### Setting the data

The data

```js
var nestedData = [
	{
	"text": "Home",
	"href": "/home",
	"tooltip": "Go to home page",
	"icon": "fa-solid fa-house",
	"children": []
	},
	{
	"text": "About Us",
	"href": "/about",
	"tooltip": "Learn more about our company",
	"icon": "fa-solid fa-address-card",
	"children": []
	},
	{
	"text": "Services",
	"href": "/services",
	"tooltip": "Discover the services we offer",
	"icon": "fa-solid fa-gear",
	"children": [
		{
		"text": "Service 1",
		"href": "/services/1",
		"tooltip": "Details for Service 1",
		"icon": "cog",
		"children": []
		},
		{
		"text": "Service 2",
		"href": "/services/2",
		"tooltip": "Details for Service 2",
		"icon": "cog",
		"children": []
		}
	]
	}
];
```

The method:

```js
menuEditor.setArray(nestedData);
```

### Mount the menu editor

```js
menuEditor.mount();
```

### Add a new item

```js
let newItem = {
    text: txtText.value, // required
    href: txtHref.value, // required
    icon: txtIcon.value, // required
    tooltip: txtTooltip.value, // required
    something: "Something" // custom attributes are optional
};
menuEditor.add(newItem);
```

### Update an item

The menu editor must have an item in edit mode. See `onClickEdit` event in **Events** section

```js
let data = {
	text: txtText.value,
	href: txtHref.value,
	icon: txtIcon.value,
	tooltip: txtTooltip.value,
};
menuEditor.update(data);
```

### Output

```js
let output = menuEditor.getString();
console.log(output);
```

### Remove all items
```js
menuEditor.empty();
```

## DEV mode

Run this command

```shell
npm run dev
```

## Add IconPicker Modal

**Include HTML**:
   ```html
   <div class="container mt-5">
     <h1>FontAwesome Icon Picker</h1>
     <div class="input-group mb-3">
       <input type="text" id="myIconInput" class="form-control" placeholder="Kliknij, aby wybrać ikonę" readonly>
       <span class="input-group-text" id="selectedIconDisplay"></span>
     </div>
   </div>
   <div class="modal fade" id="iconPickerPopup" tabindex="-1" aria-labelledby="iconPickerModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="iconPickerModalLabel">Select the FontAwesome icon</h5>
           <button type="button" class="btn-close" id="closePopup" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
			<div class="mb-3">
              <input type="text" class="form-control" id="iconSearch" placeholder="Search for an icon by name...">
            </div>
           <div id="iconList" class="icon-list"></div>
         </div>
       </div>
     </div>
   </div>
   ```

   ## License
   
   MIT License. See [LICENSE](LICENSE) for details.
   
   ## Acknowledgments
   
   - [FontAwesome](https://fontawesome.com/) for the icon library.
   - [Bootstrap](https://getbootstrap.com/) for the responsive UI framework.
   - [Webpack](https://webpack.js.org/) for bundling.
   
   ---