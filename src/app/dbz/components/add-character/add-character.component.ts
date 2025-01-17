import { Character } from './../../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0,
  };
}
