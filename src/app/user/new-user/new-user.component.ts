import { Component, OnInit } from '@angular/core';
import { User } from './modelos/user-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  usuario = new User();
  constructor(public modalActive: NgbActiveModal,  private userService: UsuarioService) { }

  ngOnInit() {

  }

  setUser(tipo,usuario) {
    this.usuario = usuario;
  }  

  //Fucion agregar un nuevo usuario
  createtUsuario(tipo,user) {   
    this.userService.createUsuario(this.usuario).subscribe((res:any)=>{
      if(res.status == 200){
        console.log('Respuesta del Back',res.response);
        this.modalActive.close(1);
      }
    });
  }
 
  //Fucion editar usuario
  editUsuario(tipo,user) { 

  }

}