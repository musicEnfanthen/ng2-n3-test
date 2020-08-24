import { Component, OnInit } from '@angular/core';

// const N3 = require('n3');
import * as N3 from 'n3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng2-n3-test';

  message = 'Hello World';


  ngOnInit () {
    const parser = new N3.Parser();

    parser.parse(
      `PREFIX c: <http://example.org/cartoons#>
   c:Tom a c:Cat.
   c:Jerry a c:Mouse;
           c:smarterThan c:Tom.`,
      (error, quad, prefixes) => {
        if (quad)
          console.log(quad);
        else
          console.log("# That's all, folks!", prefixes);
      });

  }


}
