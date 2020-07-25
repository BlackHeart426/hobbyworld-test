import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDescriptionComponent } from './container-description.component';

describe('ContainerDescriptionComponent', () => {
  let component: ContainerDescriptionComponent;
  let fixture: ComponentFixture<ContainerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
