import { Component, ContentChildren, AfterContentInit, QueryList} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabs: QueryList <TabComponent> 

  constructor(){}
  
  ngAfterContentInit(): void {
  //selecting the active tab
      const activeTabs = this.tabs?.filter(
        tab => tab.active
      )
      if(!activeTabs || activeTabs.length===0){
        this.selectTab(this.tabs!.first)
      }
  }

  selectTab(tab:TabComponent){
    //setting all the tabs as active : false
    this.tabs?.forEach(tab=>{
      tab.active = false
    })
    //then making the selected tab active : true
    tab.active = true
  }

}
