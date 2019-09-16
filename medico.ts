///<reference path="funcionario.ts"/>
namespace hospital{
    export class Medico extends Funcionario
    {
        private _crm:number;
        private _especialidade:string;
        
        public _getCrm()
        {
            return this._crm;
        }

        public _setCrm(crm:number)
        {
            this._crm = crm;
        }

        public _getEspecialidade()
        {
            return this._especialidade;
        }

        public _setEspecialidade(especialidade:string)
        {
            this._especialidade = especialidade;
        }
    }
}