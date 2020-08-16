import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorformPage } from './visitorform.page';

describe('VisitorformPage', () => {
  let component: VisitorformPage;
  let fixture: ComponentFixture<VisitorformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
