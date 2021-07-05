import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReqService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "https://calm-anchorage-20290.herokuapp.com/api/v1/"

  getNotifications(type, parametro) {
    let url = `${this.baseUrl}notifications?${type}=${parametro}`
    console.log(url)
    return this.http.get(url)
  }

  deleteNotifications(id) {
    return this.http.delete(`${this.baseUrl}notifications/${id}`)
  }

  newNotification(data) {
    return this.http.post(`${this.baseUrl}notifications`, data)
  }


}
