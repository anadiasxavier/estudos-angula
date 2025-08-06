import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormulario); //é comum deixar privado
  name = "ana";
  idButton = "befdhsf";
  deveMostrarTitulo = true;
  listItens = ["três, dois , um"]

  @Input() minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  submit(){
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao")
  }
 
}
