import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReqService } from './req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'provaRodrigo2chamada';

  constructor(private service: ReqService, private fb: FormBuilder) { }

  type = "status"
  parametro = ""

  datas = []
  formulario = this.fb.group({
    content: [''],
    subject: [''],
    name: [''],
    status: [''],
  });
  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    console.log(this.type)
    console.log(this.parametro)
    this.service.getNotifications(this.type, this.parametro).subscribe((res: any) => {
      console.log(res)
      this.datas = res
    })
  }

  deleteNotifications(id) {
    this.service.deleteNotifications(id).subscribe((res: any) => {
    this.getNotifications();
    })
  }

  newNotifications() {
    console.log(this.formulario.value);
    this.service.newNotification(this.formulario.value).subscribe((res: any) => {
      console.log(res)
      this.formulario.reset()
    })
  }

}
