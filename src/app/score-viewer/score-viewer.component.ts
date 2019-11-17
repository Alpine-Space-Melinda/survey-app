import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-score-viewer',
    templateUrl: './score-viewer.component.html',
    styleUrls: ['./score-viewer.component.scss']
})
export class ScoreViewerComponent implements OnInit {
    
    @Input() public score: number;
	@Input() public scoreValid: boolean;

    constructor() { }

    ngOnInit() {
    }

}
