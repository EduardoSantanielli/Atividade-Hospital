namespace hospital
{
    export class Hospital
    {
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];

        public _getNome()
        {
            return this._nome;
        }

        public _setNome(hospital:string)
        {
            this._nome = hospital;
        }

        public _getEnfermeiros()
        {
            return this._enfermeiros;
        }

        public _setEnfermeiros(enfermeiros:Enfermeiro)
        {
            this._enfermeiros.push(enfermeiros);
        }

        public _getMedicos()
        {
            return this._medicos;
        }

        public _setMedicos(medicos:Medico)
        {
            this._medicos.push(medicos);
        }

        public _getPacientes()
        {
            return this._pacientes;
        }

        public _setPacientes(paciente:Paciente)
        {
            this._pacientes.push(paciente);
        }

    }
}