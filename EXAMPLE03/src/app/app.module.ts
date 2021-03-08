import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { ExampleDirectiveDirective } from './example-directive/example-directive.directive';
import { ExamplePipePipe } from './example-pipe/example-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleDirectiveDirective,
    ExamplePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
