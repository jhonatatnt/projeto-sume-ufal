import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormularioService } from './formulario.service';
import { FrequencyData, FrequencyPeriod } from './component1';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild('textName') textName!: ElementRef<HTMLInputElement>;
  @ViewChild('container') container!: ElementRef<HTMLElement>;
  @ViewChild('form') form!: ElementRef<HTMLElement>;
  @ViewChild('table') table!: ElementRef<HTMLElement>;
  @ViewChild('btnBack') btnBack!: ElementRef<HTMLElement>;
  @ViewChild('title') title!: ElementRef<HTMLElement>;

  Dados: FrequencyData[] = [];
  totalFrequencia: number = 0;
  
  constructor(private service: FormularioService) {}
  
  ngOnInit() { }

  ngAfterViewInit(event: Event) {

    event.preventDefault();

    const nameValue = this.textName.nativeElement.value;

    if (nameValue.trim() !== '') {


      this.service.List(nameValue).subscribe((dados: FrequencyData[]) => {
          
        this.Dados = dados;
          
        // Calculando o somatório das frequências
        this.totalFrequencia = 0;

        this.Dados.forEach(dado => {
          dado.res.forEach(periodo => {
            this.totalFrequencia += periodo.frequencia;
          });
        });
      });


      console.log("Campo 'Name' contém dados:", nameValue);

      this.container.nativeElement.style.height = '60vh';
      this.container.nativeElement.style.margin = 'calc((100vh - 72.5vh)/2) auto';
      this.form.nativeElement.style.display = 'none'; 
      this.table.nativeElement.style.display = 'block';
      this.btnBack.nativeElement.style.display = 'block';
      this.title.nativeElement.innerHTML = "Frequência por: " + nameValue;
    } else {
      alert("Campo 'Nome' está vazio.");
    }
  }
}
