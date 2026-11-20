import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Personaje } from '../../models/personaje';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-create-personaje-component',
  standalone: false,
  styleUrl: './create-personaje-component.css',
  templateUrl: './create-personaje-component.html',
})
export class CreatePersonajeComponent implements OnInit {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaimagen") cajaimagen!: ElementRef
  @ViewChild("cajaidserie") cajaidserie!: ElementRef
  mensaje!: string
  arrayseries: Serie[] = [];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceSeries
  ){}

  async crearPersonaje(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value)
    let nombre = this.cajanombre.nativeElement.value
    let imagen = this.cajaimagen.nativeElement.value
    let idserie = parseInt(this.cajaidserie.nativeElement.value)
    let personaje = new Personaje(id, nombre, imagen, idserie)
    await this._service.insertarPersonaje(personaje)
    this.mensaje= "Personaje insertado"
    this._cdr.detectChanges()
  }


  async ngOnInit(): Promise<void> {
    this.arrayseries = await this._service.getSeriesAsync()
  this._cdr.detectChanges()
  }
}
