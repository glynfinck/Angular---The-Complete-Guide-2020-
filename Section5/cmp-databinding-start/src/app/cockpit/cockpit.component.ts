import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('contentInput',{static: true}) contentInput: ElementRef;

  onAddServer(HTMLNameInput) {
    console.log(this.contentInput)
    this.serverCreated.emit({
      serverName: HTMLNameInput.value, 
      serverContent: this.contentInput.nativeElement.value
    })
  }

  onAddBlueprint(HTMLNameInput) {
    this.blueprintCreated.emit({
      serverName: HTMLNameInput.value,
      serverContent: this.contentInput.nativeElement.value
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
