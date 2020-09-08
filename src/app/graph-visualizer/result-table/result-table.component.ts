import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Quad } from 'n3';

@Component({
    selector: 'app-result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultTableComponent implements OnInit {
    @Input() results: Quad[];

    constructor() {}

    ngOnInit(): void {}
}
