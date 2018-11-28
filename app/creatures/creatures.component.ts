import { Component, OnInit, Input } from '@angular/core';


export class AppModule {
}
@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})

export class AppCreaturesComponent {
  title = 'AngularP3';
  main = ['Name', 'Birth', 'Device', 'DELETE'];
  /*Creatures:*/ newName = ''; newBirth = ''; newDevice = '';

  creature = {
    name: String,
    birth: Date,
    device: String
  };
  creatures = [
    {
      name: 'Rei Arturo',
      birth: '11-08-850',
      device: 'Excalibur'
    },
    {
      name: 'Egon Spengler',
      birth: '10-08-1960',
      device: 'Equipo de protones, Medidor PKE'
    }
  ];

  addCreature() {
    this.creatures.push({ name: this.newName, birth: this.newBirth, device: this.newDevice });
  }

  delCreature(index) {
    this.creatures.splice(index, 1);
  }


}
/*
class Creature {
  name: string;
  birth: Date;
  device: string;
  constructor(name, birth, device) {
    this.name = name;
    this.birth = birth;
    this.device = device;
  }
}*/


