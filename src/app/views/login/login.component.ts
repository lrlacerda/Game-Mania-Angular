import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User();

  mensagem = "";

  usuarioLogado = localStorage.getItem("nomeUsuario")

  receberDados() {

    console.log(this.userModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if(this.userModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos"

        return;
      }
    });

    this.LoginService.login(this.userModel).subscribe((Response) => {
      console.log("Deu Certo")
      localStorage.setItem("nomeUsuario", Response.body.user.nome)
      this.router.navigateByUrl("/")
    }, (respostaErro) => {
      console.log("Deu Erro")
      this.mensagem = respostaErro.error

    })

  }

}
