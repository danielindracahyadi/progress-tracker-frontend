import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-dropdown',
  template: `
  <div class="select" tabindex="1">
    <input class="options-select" name="selectors" type="radio" id="opt1" checked>
    <label for="opt1" class="option">Project yang kamu kerjain apa?</label>
    <input class="options-select" name="selectors" type="radio" id="opt2">
    <label for="opt2" class="option">Dinas Kesehatan</label>
    <input class="options-select" name="selectors" type="radio" id="opt3">
    <label for="opt3" class="option">Macroad Design System</label>
    
	</div>`,
  styles: [`
  .select {
  display:flex;
  flex-direction: column;
  position:relative;
  width:308px;
  height:40px;
  top: 248px;
  left: 64px;
}
 
.option {
  padding:0 30px 0 10px;
  min-height:40px;
  display:flex;
  align-items:center;
  background:  #FFFFFF;
  border-top:#222 solid 1px;
  position:absolute;
  top:0;
  width: 100%;
  pointer-events:none;
  order:2;
  z-index:1;
  transition:background .4s ease-in-out;
  box-sizing:border-box;
  overflow:hidden;
  white-space:nowrap;
  border-radius: 6px;
  border: 1px solid #E7E7E7;
  font-family: 'Source Sans Pro', regular;
  font-size:14px;
}
 
.select:hover {
  border-radius: 6px;
  border: 1px solid #0871CE;
}
 
.select:focus .option {
  position:relative;
  pointer-events:all;
}
 
input {
  opacity:0;
  position:absolute;
  left:-99999px;
  font-family: 'Source Sans Pro', regular;
  font-size:14px;
  letter-spacing: 0;
  color: black;
}
 
input:checked + label {
  order: 1;
  z-index:2;
  background: #FFF;
  border-top:none;
  position:relative;
  font-family: 'Source Sans Pro', sans-serif;
  font-size:14px;
  letter-spacing: 0;
  color: grey;
}

input:checked + label:after {
  content:'';
  width: 0; 
	height: 0; 
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid blue;
  position:absolute;
  right:10px;
  top:calc(50% - 2.5px);
  pointer-events:none;
  z-index:3;
}
 
input:checked + label:before {
  position:absolute;
  right:0;
  height: 40px;
  width: 40px;
  content: '';
  background: #FFF;
}
  `],
  encapsulation: ViewEncapsulation.Native
})
export class CustomDropdownComponent implements OnInit {

  @Input() text = 'Custom Dropdown';
  @Output() countChanged = new EventEmitter<number>();
  private totalClicks: number = 0;

  constructor() {
    
  }

  ngOnInit() {
  }

}