///<reference path="funcionario.ts"/>
namespace hospital{
    export class Enfermeiro extends Funcionario
    {
        private _coren:number;

        public _getCoren()
        {
            return this._coren;
        }

        public _setCoren(coren:number)
        {
            this._coren = coren;
        }
    }
}