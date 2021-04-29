import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { ExampleDirectiveDirective } from './example-directive/example-directive.directive';
import { ExamplePipePipe } from './example-pipe/example-pipe.pipe';
import { ConvertCoinPipe } from './apps/pipes/convert-coin.pipe';
import { IterateListDirective } from './apps/directives/iterate-list.directive';
import { ChangeColorTextDirective } from './apps/directives/change-color-text.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleDirectiveDirective,
    ExamplePipePipe,
    ConvertCoinPipe,
    IterateListDirective,
    ChangeColorTextDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
