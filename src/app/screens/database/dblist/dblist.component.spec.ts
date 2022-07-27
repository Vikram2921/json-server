import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DblistComponent } from './dblist.component';

describe('DblistComponent', () => {
  let component: DblistComponent;
  let fixture: ComponentFixture<DblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DblistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
