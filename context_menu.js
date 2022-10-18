
//version 1.0

class ContextMenu {

	constructor(list, object) {
		var _self = this;

		this.list = list;

		this.object = object;
		document.addEventListener('click', function(e) {
			_self.hideMenu();
		});
		this.object.addEventListener('contextmenu', function(e) {
			_self.showMenu();
			e.preventDefault();
			return false;
		});

		this.mouse_pose = [0, 0];
		document.addEventListener('mousemove', function(e) {
			_self.mouse_pose[0] = e.clientX;
			_self.mouse_pose[1] = e.clientY;
		});

		this.menu_object = document.createElement('div');
		this.menu_object.setAttribute('class', 'context_menu');
		this.menu_object.appendChild(
			document.createElement('ul')
		);
		for(let i = 0; i < this.list.length; i++) {
			let menu_item = document.createElement('li');
			menu_item.innerHTML = this.list[i]['name'];
			menu_item.addEventListener('click', this.list[i]['function']);
			this.menu_object.querySelector('ul').appendChild(menu_item);
		}
		this.hideMenu();
		document.body.appendChild(this.menu_object);

	}

	showMenu() {
		this.menu_object.style.display = 'block';
		if(this.mouse_pose[0] < 10) this.mouse_pose[0] = 10;
		if(this.mouse_pose[1] < 10) this.mouse_pose[1] = 10;
		if(this.mouse_pose[0] > window.innerWidth  - this.menu_object.clientWidth  - 10) this.mouse_pose[0] = window.innerWidth  - this.menu_object.clientWidth  - 10;
		if(this.mouse_pose[1] > window.innerHeight - this.menu_object.clientHeight - 10) this.mouse_pose[1] = window.innerHeight - this.menu_object.clientHeight - 10;
		this.menu_object.style.left = this.mouse_pose[0] + 'px';
		this.menu_object.style.top  = this.mouse_pose[1] + 'px';
	}

	hideMenu() {
		this.menu_object.style.display = 'none';
	}

}
