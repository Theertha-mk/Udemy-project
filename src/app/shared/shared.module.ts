import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AlertComponent } from './alert/alert.component'
import { DropdownDirectives } from './dropdown.directive'
import { LoadingSpinnerComponent } from './loading-spinners/loading-spinners.component'
import { PlaceholderDirective } from './placeholder/placeholder.directive'

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirectives,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirectives,
    CommonModule,
  ]
})
export class SharedModule {}
