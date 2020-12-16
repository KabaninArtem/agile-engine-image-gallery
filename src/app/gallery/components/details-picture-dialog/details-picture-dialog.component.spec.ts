import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPictureDialogComponent } from './details-picture-dialog.component';

describe('PhotoViewDialogComponent', () => {
  let component: DetailsPictureDialogComponent;
  let fixture: ComponentFixture<DetailsPictureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPictureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
