import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private api: string = `${environment.api}`;
  constructor(private http: HttpClient) { }

  createUsuario(user){ 
    return this.http.post(this.api + "/add_user",user);
  }


  getUserb(id,nameUser): Observable<any> {
    let params = new HttpParams(); 
    //Lista de parametros de consulta
    params = params.append("id", id);
    params = params.append("name", nameUser);
    return this.http.get(this.api + "/show_user",{params});
  }
  

}
