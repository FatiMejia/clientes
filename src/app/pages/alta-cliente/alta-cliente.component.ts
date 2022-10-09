import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { TipoCliente } from 'src/app/models/tipo_cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  //propiedades
  cliente!: Cliente;
  tipos: TipoCliente [] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.tipos = this.clienteService.getTipos();
  }

  //método par insertar un cliente desde el formulario
  insertarCliente():void{
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }

}
