import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HumanResourceComponent } from "./pages/human-resource/human-resource.component";
import { HumanResourceRoutingModule } from "./human-resource-routing.module";
@NgModule({
  declarations: [HumanResourceComponent],
  entryComponents: [],
  providers: [],
  imports: [CommonModule, SharedModule, HumanResourceRoutingModule],
})
export class HumanResourceModule {}
