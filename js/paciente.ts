///<reference path="pessoa.ts"/>
namespace hospital{
    export class Paciente extends Pessoa
    {
        private _codPaciente:number;

        public _getCodPaciente()
        {
            return this._codPaciente;
        }

        public _setCodPaciente(codigo:number)
        {
            this._codPaciente = codigo;
        }
    }    
}