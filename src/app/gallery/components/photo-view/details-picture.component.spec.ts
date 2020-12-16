import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPictureComponent } from './details-picture.component';

describe('PhotoViewComponent', () => {
  let component: DetailsPictureComponent;
  let fixture: ComponentFixture<DetailsPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
