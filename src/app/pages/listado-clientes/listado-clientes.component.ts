import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
 
  clientes:Cliente[] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
