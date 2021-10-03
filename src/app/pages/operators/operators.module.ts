import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AjaxOperatorComponent } from '../ajax-operator/ajax-operator.component';
import { AuditOperatorComponent } from '../audit-operator/audit-operator.component';
import { BufferCountOperatorComponent } from '../buffer-count-operator/buffer-count-operator.component';
import { BufferOperatorComponent } from '../buffer-operator/buffer-operator.component';
import { BufferTimeOperatorComponent } from '../buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from '../buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from '../buffer-when-operator/buffer-when-operator.component';
import { ConcatMapOperatorComponent } from '../concat-map-operator/concat-map-operator.component';
import { ConcatMapToOperatorComponent } from '../concat-map-to-operator/concat-map-to-operator.component';
import { DebounceOperatorComponent } from '../debounce-operator/debounce-operator.component';
import { DistinctOperatorComponent } from '../distinct-operator/distinct-operator.component';
import { DistinctUntilChangedOperatorComponent } from '../distinct-until-changed-operator/distinct-until-changed-operator.component';
import { DistinctUntilKeyChangedComponent } from '../distinct-until-key-changed/distinct-until-key-changed.component';
import { ElementAtOperatorComponent } from '../element-at-operator/element-at-operator.component';
import { ExhaustMapOperatorComponent } from '../exhaust-map-operator/exhaust-map-operator.component';
import { FilterOperatorComponent } from '../filter-operator/filter-operator.component';
import { FirstOperatorComponent } from '../first-operator/first-operator.component';
import { IgnoreElementsOperatorComponent } from '../ignore-elements-operator/ignore-elements-operator.component';
import { LastOperatorComponent } from '../last-operator/last-operator.component';
import { MapOperatorComponent } from '../map-operator/map-operator.component';
import { MapToOperatorComponent } from '../map-to-operator/map-to-operator.component';
import { MergeMapOperatorComponent } from '../merge-map-operator/merge-map-operator.component';
import { MergeMapToOperatorComponent } from '../merge-map-to-operator/merge-map-to-operator.component';
import { SampleOperatorComponent } from '../sample-operator/sample-operator.component';
import { ShareOperatorComponent } from '../share-operator/share-operator.component';
import { SingleOperatorComponent } from '../single-operator/single-operator.component';
import { SkipLastOperatorComponent } from '../skip-last-operator/skip-last-operator.component';
import { SkipOperatorComponent } from '../skip-operator/skip-operator.component';
import { SkipUntilOperatorComponent } from '../skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from '../skip-while-operator/skip-while-operator.component';
import { SwitchMapOperatorComponent } from '../switch-map-operator/switch-map-operator.component';
import { SwitchMapToOperatorComponent } from '../switch-map-to-operator/switch-map-to-operator.component';
import { TakeLastOperatorComponent } from '../take-last-operator/take-last-operator.component';
import { TakeOperatorComponent } from '../take-operator/take-operator.component';
import { TakeUntilOperatorComponent } from '../take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from '../take-while-operator/take-while-operator.component';
import { ThrottleOperatorComponent } from '../throttle-operator/throttle-operator.component';
import { OperatorsComponent } from './operators.component';

const routes: Routes = [
  {
    path: "",
    component: OperatorsComponent,
    children: [
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertime', component: BufferTimeOperatorComponent },
      { path: 'buffertoggle', component: BufferToggleOperatorComponent },
      { path: 'bufferwhen', component: BufferWhenOperatorComponent },
      { path: 'take', component: TakeOperatorComponent },
      { path: 'takelast', component: TakeLastOperatorComponent },
      { path: 'takeuntil', component: TakeUntilOperatorComponent },
      { path: 'takewhile', component: TakeWhileOperatorComponent },
      { path: 'skip', component: SkipOperatorComponent },
      { path: 'skiplast', component: SkipLastOperatorComponent },
      { path: 'skipuntil', component: SkipUntilOperatorComponent },
      { path: 'skipwhile', component: SkipWhileOperatorComponent },
      { path: 'distinct', component: DistinctOperatorComponent },
      { path: 'filter', component: FilterOperatorComponent },
      { path: 'sample', component: SampleOperatorComponent },
      { path: 'audit', component: AuditOperatorComponent },
      { path: 'throttle', component: ThrottleOperatorComponent },
      { path: 'first', component: FirstOperatorComponent },
      { path: 'last', component: LastOperatorComponent },
      { path: 'debounce', component: DebounceOperatorComponent },
      { path: 'elementat', component: ElementAtOperatorComponent },
      { path: 'ignoreelements', component: IgnoreElementsOperatorComponent },
      { path: 'single', component: SingleOperatorComponent },
      { path: 'map', component: MapOperatorComponent },
      { path: 'mapto', component: MapToOperatorComponent },
      { path: 'ajax', component: AjaxOperatorComponent },
      { path: 'mergemap', component: MergeMapOperatorComponent },
      { path: 'mergemapto', component: MergeMapToOperatorComponent },
      { path: 'concatmap', component: ConcatMapOperatorComponent },
      { path: 'concatmapto', component: ConcatMapToOperatorComponent },
      { path: 'exhaustmap', component: ExhaustMapOperatorComponent },
      { path: 'switchmap', component: SwitchMapOperatorComponent },
      { path: 'switchmapto', component: SwitchMapToOperatorComponent },
      { path: 'share', component: ShareOperatorComponent },
      {
        path: 'distinctuntilchanged',
        component: DistinctUntilChangedOperatorComponent,
      },
      {
        path: 'distinctuntilkeychanged',
        component: DistinctUntilKeyChangedComponent,
      },
    ],
  }
]

@NgModule({
  declarations: [
    OperatorsComponent,
    BufferOperatorComponent, BufferTimeOperatorComponent, BufferTimeOperatorComponent, BufferToggleOperatorComponent,
    BufferWhenOperatorComponent,
    TakeOperatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class OperatorsModule { }
