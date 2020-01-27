import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LearningEnglishComponent } from './learning-english.component';

describe('LearningEnglishComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LearningEnglishComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LearningEnglishComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'learning-english'`, () => {
    const fixture = TestBed.createComponent(LearningEnglishComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('learning-english');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(LearningEnglishComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to learning-english!');
  });
});
