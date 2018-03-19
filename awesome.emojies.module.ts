import { NgModule } from '@angular/core';
import { AwesomeEmojies } from './component/awesome.emojies.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		AwesomeEmojies
	],
	exports: [
		AwesomeEmojies
	]
})
export class AwesomeEmojiesModule {}
