import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  @Output() saveData = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  close() {
    console.log('close');
    this.closeModal.emit('close');
  }

  save() {
    console.log('save');
    this.saveData.emit('save');
  }

}
