import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var angular: any;


@Component({
  selector: 'core-ui-dropdown',
  template: `
  <div class="dropdown-style">
    <select>
      <option  *ngFor="let prod of ProductHeader">{{prod.name}} </option>  
    </select>
  </div> 
  `,
  styles: [`
  
  select{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7E7E7;
    border-radius: 6px;
    opacity: 1;
    top: 248px;
    left: 64px;
    width: 308px;
    height: 40px;
    text-align: left;
    font-size: 14px;
    letter-spacing: 0;

    color: #C7C7C7;
    opacity: 1;
    font-family: 'Source Sans Pro', regular;
}

  select > option{
    padding-top: 288px;
    padding-left: 64px;
    background: #FFFFF 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    color : #000;
    
  }
  
  
  `],
  encapsulation: ViewEncapsulation.Native,
  
})
export class CustomDropdownComponent implements OnInit {
  public ProductHeader = [
    { name: 'Project yang kamu kerjain apa?' }, 
    { name: 'Dinas Kesehatan'}, 
    { name: 'Macroad Design System' }];  
  
  
  @Input() text = 'Custom Dropdown';
  @Output() countChanged = new EventEmitter<number>();
  private totalClicks: number = 0;

  constructor() {
    
  }

levelsArr: Array<any>;
  ngOnInit() {
    
    
    }
    
}