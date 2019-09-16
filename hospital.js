var hospital;
(function (hospital_1) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype._getNome = function () {
            return this._nome;
        };
        Hospital.prototype._setNome = function (hospital) {
            this._nome = hospital;
        };
        Hospital.prototype._getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype._setEnfermeiros = function (enfermeiros) {
            this._enfermeiros.push(enfermeiros);
        };
        Hospital.prototype._getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype._setMedicos = function (medicos) {
            this._medicos.push(medicos);
        };
        Hospital.prototype._getPacientes = function () {
            return this._pacientes;
        };
        Hospital.prototype._setPacientes = function (paciente) {
            this._pacientes.push(paciente);
        };
        return Hospital;
    }());
    hospital_1.Hospital = Hospital;
})(hospital || (hospital = {}));
