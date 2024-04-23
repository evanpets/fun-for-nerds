import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  @Output() partialOddWord = new EventEmitter<string>();
  @Output() partialEvenWord = new EventEmitter<string>();
  @Output() submittedWord = new EventEmitter<string>();
  currentWord: string = ''

  onInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.currentWord = target.value
    if (this.currentWord.trim()) {
      if (this.currentWord.length % 2 === 0) {
        this.partialEvenWord.emit(this.currentWord)
      } else {
        this.partialOddWord.emit(this.currentWord)
      }
    }
  }

  onSubmit() {
    if (this.currentWord.trim()) {
      this.submittedWord.emit(this.currentWord);
      this.currentWord = ''
    }
  }

}
