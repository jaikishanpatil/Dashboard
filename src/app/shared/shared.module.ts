import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../Modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

const components: any[] = [TableComponent, SearchComponent, ToastNotificationComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule ,FormsModule],
  exports: [...components],
})
export class SharedModule {}
