import { NgModule } from '@angular/core';
import { AwesomeEmojiesComponent } from './component/awesome.emojies.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [AwesomeEmojiesComponent],
  exports: [AwesomeEmojiesComponent]
})
export class AwesomeEmojiesModule {}
