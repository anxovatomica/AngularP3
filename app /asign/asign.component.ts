import { Component } from '@angular/core';


export class AppModule {
}
@Component({
  selector: 'app-asign',
  templateUrl: './asign.component.html',
  styleUrls: ['./asign.component.css']
})

export class AppAsignComponent {

  title = 'AngularP3';
  array = [];

  getEventFill(parametresJSON) {
    for (let index = 0; index < parametresJSON.length; index++) {
      const element = parametresJSON[index];
      this.array.push(element);
    }
   // const af = document.getElementById('div').innerHTML = JSON.stringify(this.array);
  const aj1 =  document.getElementById('div').innerHTML = JSON.stringify('<h3>SELECCIONA UN SUSHI DELS DISPONIBLES</h3>' +
  '<select>' +
  parametresJSON[0] +
  parametresJSON[1] +
  '</select>');
  }
}
