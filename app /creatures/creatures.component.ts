import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


export class AppModule {
}
@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})

export class AppCreaturesComponent implements OnInit {
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
      device: 'Excalibur',
      artifacts: [
        { name: 'artifact1', description: 'description1' },
        { name: 'artifact2', description: 'description2' }
      ]
    },
    {
      name: 'Egon Spengler',
      birth: '10-08-1960',
      device: 'Equipo de protones, Medidor PKE',
      artifacts: [{ name: 'artifact1', description: 'description1' }]
    }
  ];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onGetEventFill = new EventEmitter();

  addCreature() {
    // tslint:disable-next-line:max-line-length
    this.creatures.push({ name: this.newName, birth: this.newBirth, device: this.newDevice, artifacts: [{ name: 'artifact2', description: 'description2' }] });
  }

  delCreature(index) {
    this.creatures.splice(index, 1);
  }
  ngOnInit() {
    this.sendEventToParent();
  }
  sendEventToParent() {
    const array = [];
    this.onGetEventFill.emit(
      function a() {
        for (let index = 0; index < this.creatures.length; index++) {
          const element = this.creatures[index];
          // tslint:disable-next-line:no-unused-expression
          array.push('<option>' + element.name + '</option>');
        }

        return array ;
      }.call(this));
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


