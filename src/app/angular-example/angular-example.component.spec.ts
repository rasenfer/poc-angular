import { TestBed } from '@angular/core/testing';
import { AngularExampleComponent } from './angular-example.component';

describe('AngularExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AngularExampleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularExampleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'poc-angular'`, () => {
    const fixture = TestBed.createComponent(AngularExampleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('poc-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularExampleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('poc-angular app is running!');
  });
});
