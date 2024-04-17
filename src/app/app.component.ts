import { Component } from '@angular/core';
import { InputFormComponent } from './components/input-form/input-form.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFormComponent, EvenLengthWordsComponent, OddLengthWordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-for-nerds';
  partialOddWord: string = '';
  partialEvenWord: string = '';
  // submittedWord: string = ''

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onWord(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
    } else {
      this.oddLengthWords.push(word);
    }
  }

  onPartialWord(word : string) {
    if (word.length % 2 === 0) {
      this.partialEvenWord = word;
      this.partialOddWord = ''
    } else {
      this.partialOddWord = word;
      this.partialEvenWord = ''
    }
  }
}
