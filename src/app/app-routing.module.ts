import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './pages/subject/subject.component';
import { ColdObservableComponent } from './pages/cold-observable/cold-observable.component';
import { BehaviorSubjectComponent } from './pages/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './pages/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './pages/async-subject/async-subject.component';
import { VoidSubjectComponent } from './pages/void-subject/void-subject.component';

const routes: Routes = [
  {
    path: 'operators',
    loadChildren: () => import("./pages/operators/operators.module").then(m => m.OperatorsModule)
  },
  { path: 'subject', component: SubjectComponent },
  { path: 'coldobservable', component: ColdObservableComponent },
  { path: 'behaviorsubject', component: BehaviorSubjectComponent },
  { path: 'replaysubject', component: ReplaySubjectComponent },
  { path: 'asyncsubject', component: AsyncSubjectComponent },
  { path: 'voidsubject', component: VoidSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
