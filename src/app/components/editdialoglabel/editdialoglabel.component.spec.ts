import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdialoglabelComponent } from './editdialoglabel.component';

describe('EditdialoglabelComponent', () => {
  let component: EditdialoglabelComponent;
  let fixture: ComponentFixture<EditdialoglabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdialoglabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdialoglabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
