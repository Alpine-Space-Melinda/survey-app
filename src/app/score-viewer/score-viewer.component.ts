import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-score-viewer',
    templateUrl: './score-viewer.component.html',
    styleUrls: ['./score-viewer.component.scss']
})
export class ScoreViewerComponent implements OnInit {
    
	@Input() public source: string;
    @Input() public score: { precovid: number, postcovid: number };
	@Input() public scoreValid: { precovid: boolean, postcovid: boolean };

    constructor() { }

    ngOnInit() {
    }

}
