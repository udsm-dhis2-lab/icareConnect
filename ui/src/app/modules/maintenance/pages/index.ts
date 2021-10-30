import { LocationManagementComponent } from './location-management/location-management.component';
import { MaintenanceHomeComponent } from './maintenance-home/maintenance-home.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { UserManagementComponent } from './user-management/user-management-home/user-management.component';
import { PriceListHomeComponent } from './price-list-home/price-list-home.component';

export const maintenancePages: any[] = [
  MaintenanceHomeComponent,
  UserManagementComponent,
  LocationManagementComponent,
  AddUserComponent,
  EditUserComponent,
  PriceListHomeComponent,
];

export {
  MaintenanceHomeComponent,
  UserManagementComponent,
  LocationManagementComponent,
  AddUserComponent,
  EditUserComponent,
  PriceListHomeComponent,
};
