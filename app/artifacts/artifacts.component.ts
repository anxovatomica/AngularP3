import { Component, OnInit, Input } from '@angular/core';


export class AppModule {
}
@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})

export class AppArtifactsComponent implements OnInit {

  title = 'AngularP3';
  // products =  [new Artifact('name1', '1999-21-1', 'description1')];

  main = ['Name', 'Creation Date', 'Description', 'DELETE'];
  /*Artifacts:*/ newName = ''; newCreation = ''; newDescription = '';
  artifact = {
    name: String,
    creationDate: Date,
    description: String
  };
  artifacts = [
    {
      name: 'Excalibur',
      creationDate: '10-08-1960',
      description: 'Cuidado que corta lo suyo'
    },
    {
      name: 'Equipo de protones',
      creationDate: '05-10-1984 ',
      description: 'Perfecto para freír fantasmas'
    }
  ];
  delArtifact(index) {
    this.artifacts.splice(index, 1);
}

addArtifact() {
this.artifacts.push({ name: this.newName, creationDate: this.newCreation, description: this.newDescription});
}
  /*@Input () newArtifacts;
  artifactSelected;
*/
  ngOnInit() {
   /* this.artifactSelected = 0;

        this.products.push(new Artifact('name2', '1000-32-1', 'description2'));

        const product = new Artifact('name3', '1009-33-5', 'description3');
        this.products.push(product);
  */}
}
class Artifact {
  name: string;
  creationDate: Date;
  description: string;
  constructor(name, creationDate, description) {
    this.name = name;
    this.creationDate = creationDate;
    this.description = description;
  }
}


