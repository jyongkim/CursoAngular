import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/shared/navbar/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/shared/navbar/dragonball/character-list/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})

export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);
}
