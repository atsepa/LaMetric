import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-module-text',
	template: `<p>{{ text }}</p>`,
	styleUrls: ['./module-text.component.scss']
})
export class ModuleTextComponent {
	@Input() text: string;
}
