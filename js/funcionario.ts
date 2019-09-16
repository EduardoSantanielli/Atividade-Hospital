///<reference path="pessoa.ts"/>
namespace hospital{
    export class Funcionario extends Pessoa
    {
        private _codFuncionario:number;
    
        public _getCodFuncionario()
        {
           return this._codFuncionario;
        }  

        public _setCodFuncionario(codigo:number)
        {
            this._codFuncionario = codigo;
        }
    }
}