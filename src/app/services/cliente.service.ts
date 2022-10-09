import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes';
import { TipoCliente } from '../models/tipo_cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[];
  private tipos: TipoCliente[];

  constructor() {
    this.clientes = [];

    this.tipos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Activos'
      },
      {
        id: 2,
        descripcion: 'Inactivos'
      },
      {
        id: 3,
        descripcion: 'Deudores'
      }
    ];
   }

   //metodo que retorna todos los clientes
   getClientes(){
     return this.clientes;
   }

   //metodo que retorna los tipos de clientes
   getTipos(){
     return this.tipos;
   }

   //metodo que agrega un cliente al arreglo
   agregarCliente(cliente:Cliente){
     this.clientes.push(cliente);
   }

   //metodo que genera un objeto limpio tipo cliente
   nuevoCliente():Cliente{
     return{
      id:this.clientes.length+1,
      nombre: '',
      rfc: '',
      domicilio: '',
      tipo: 0
     };
   }
}
