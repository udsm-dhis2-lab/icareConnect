import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { materialModules } from "../../material-modules";
import { FormModule } from "../form/form.module";
import { NgxMultipleItemsFilterModule } from "../ngx-multiple-item-filter/ngx-multiple-item-filter.module";
import { containers } from "./containers";
import { components } from "./components";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...materialModules,
    FormModule,
    NgxMultipleItemsFilterModule,
  ],
  declarations: [...containers, ...components],
  providers: [],
  exports: [...containers],
})
export class NgxiCareHumanResourceModule {}
