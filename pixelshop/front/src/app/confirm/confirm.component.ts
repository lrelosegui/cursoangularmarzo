import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  isDisabled: Boolean;
  showModal: Boolean;

  constructor() {
    this.isDisabled = true;
  }

  ngOnInit(): void {
  }

}
