import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Serie } from "../models/serie";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Personaje } from "../models/personaje";

@Injectable()
export class ServiceSeries {
  getPersonajesSerie(idSerie: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private _http: HttpClient,
  ) {}

  async getSeriesAsync(): Promise<Serie[]> {
      let request = "api/series"
      let url = environment.apiejemplos + request;
      return firstValueFrom(
        this._http.get<Serie[]>(url)
      )  
  }


  async getPeronajesAsync(idserie: number): Promise<Personaje[]>{
    let request = "api/series/personajesserie/" + idserie
    let url = environment.apiejemplos + request;
    return firstValueFrom(
        this._http.get<Personaje[]>(url)
    )


  }

  async findSeriesAsync(idserie: number): Promise<Serie> {
    let request = "api/series/" + idserie
    let url = environment.apiejemplos + request
    return firstValueFrom(
        this._http.get<Serie>(url)
    )

  }

}