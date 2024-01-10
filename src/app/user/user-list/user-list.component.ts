import { ChangeDetectorRef, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NewUserComponent } from '../new-user/new-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../new-user/modelos/user-model';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';  
import { UsuarioService } from '../new-user/servicios/usuario.service';
declare var $;


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
  @ViewChild('userT', { static: true }) userT;
  dtOptions: DataTables.Settings = {};
  user = new User();
  userList: User[] = []; 
  dataT: any; 
  buscarUsuario= '';


  constructor(private modalService: NgbModal,private chRef: ChangeDetectorRef, private userService: UsuarioService) { }


  ngOnInit() { 
    this.dtOptions = {
      pagingType: 'full_numbers'
    }; 
    this.getUser();
  }


  getUser(){ 
    this.destruyeT();
    this.userService.getUserb('',this.buscarUsuario).subscribe((res:any)=>{ 
      if(res.status==200){
        this.userList = res.response;
        console.log('respuesta del backend',res.response)
        // this.creaT();
      }

    })
  }

  creaT() {
    this.chRef.detectChanges();
    this.dataT = $(this.userT.nativeElement);
    this.dataT.dataTable(this.dtOptions);
  }

  destruyeT() {
    // Si la tabla existe, la destruye y  la crea de nuevo
    if ($.fn.dataTable.isDataTable(this.userT.nativeElement)) {
      $(this.userT.nativeElement).dataTable().fnDestroy();
    }
  } 
  
  //metodo para llamar al componente
  verUsuario(tipo,user){
    this.user = user;
    //nombre del componente donde lo queremos llamar
    const modalRef = this.modalService.open(NewUserComponent, {
      backdrop: 'static',
      //keyboard: false,
      // centered: true,
      size: <any>'xl',
      // backdrop: false,
      windowClass: 'custom-modal'
    });
    modalRef.componentInstance.setUser(tipo,user);
    modalRef.result.then(result => {
      if (result) {
        this.getUser();
       
      }
    }).catch(error => {
    });
  }
 

}
