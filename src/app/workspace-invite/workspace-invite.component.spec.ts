import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceInviteComponent } from './workspace-invite.component';

describe('WorkspaceInviteComponent', () => {
  let component: WorkspaceInviteComponent;
  let fixture: ComponentFixture<WorkspaceInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
