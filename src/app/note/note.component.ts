import {Component, HostBinding, EventEmitter, Output, ElementRef, Input} from '@angular/core'
declare var SpeechRecognition:any;
@Component({
  selector:'app-note',
  templateUrl:'./note.component.html',
  styleUrls:['./note.component.css']
})

export class NoteComponent {
  recognition:any;
  @Input() 
  content: string;
  @Output() dismiss = new EventEmitter();
  @Output() focusout = new EventEmitter();
  constructor(private el:ElementRef) {
    this.recognition = new SpeechRecognition();
    this.recognition.onresult = (event)=> {
      this.el.nativeElement.querySelector(".content").value += ` ${event.results[0][0].transcript}`
      document.getElementById('toolbar').focus();
    };
  }
  
  onDismiss(event){
    this.dismiss.emit(event);
  }
  
  onFocusOut(event){
    this.focusout.emit(event)
  }

  record(event) {
    this.recognition.start();
  }

}

// export interface IWindow extends Window {
//   webkitSpeechRecognition: any;
// }