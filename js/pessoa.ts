namespace hospital{
    export abstract class Pessoa{
        private _nome:string;
        private _cpf:string;

        public _getNome()
        {
            return this._nome;
        }

        public _setNome(nome:string)
        {
            this._nome = nome;
        }

        public _getCpf()
        {
            return this._cpf;
        }

        public _setCpf(cpf:string)
        {
            this._cpf = cpf
        }

    }
}