import { AwesomeEmojies } from './../component/awesome.emojies.component';
import { NgModule } from '@angular/core';
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
