import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { AwesomePipe }        from './awesome.pipe';

import
       { ContactComponent }   from './contact.component';
/*
       { ContactComponent }   from './contact.component';
*/
import { ContactService }     from './contact.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  exports:      [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/