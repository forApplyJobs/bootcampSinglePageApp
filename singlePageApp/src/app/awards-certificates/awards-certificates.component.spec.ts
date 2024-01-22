import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCertificatesComponent } from './awards-certificates.component';

describe('AwardsCertificatesComponent', () => {
  let component: AwardsCertificatesComponent;
  let fixture: ComponentFixture<AwardsCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsCertificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
