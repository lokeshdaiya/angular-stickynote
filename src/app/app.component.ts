import { Component, ElementRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  implements OnInit {
  notes = [];
  constructor(private el:ElementRef) {
  }

  ngOnInit() {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [{ id: 0,content:'' }]
  }
  addNote () {
    this.notes.push({ id: this.notes.length + 1,content:'' });
    // sort the array
    this.notes= this.notes.sort((a,b)=>{ return b.id-a.id});
    localStorage.setItem('notes', JSON.stringify(this.notes));
  };
  
  saveNote(event){
    const id = event.srcElement.parentElement.parentElement.getAttribute('id');
    const content = event.target.value;
    // event.target.innerText = content;
    const json = {
      'id':id,
      'content':content
    }
    this.updateNote(json);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    console.log("********* updating note *********")
  }
  
  updateNote(newValue){
    this.notes.forEach((note, index)=>{
      if(note.id== newValue.id) {
        this.notes[index].content = newValue.content;
      }
    });
  }
  
  deleteNote(event){
     const id = event.srcElement.parentElement.parentElement.parentElement.getAttribute('id');
     this.notes.forEach((note, index)=>{
      if(note.id== id) {
        this.notes.splice(index,1);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        console.log("********* deleting note *********")
        return;
      }
    });
  }

}

