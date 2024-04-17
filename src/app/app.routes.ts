import { Routes } from '@angular/router';
import { InputFormComponent } from './components/input-form/input-form.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';

export const routes: Routes = [
{
    path: 'input-form',
    component: InputFormComponent
}, 
{
    path: 'even-length-words',
    component: EvenLengthWordsComponent
},
{
    path: 'odd-length-words',
    component: OddLengthWordsComponent
}
];
