import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorlogPage } from './visitorlog.page';

describe('VisitorlogPage', () => {
  let component: VisitorlogPage;
  let fixture: ComponentFixture<VisitorlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
