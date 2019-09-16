var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype._getNome = function () {
            return this._nome;
        };
        Pessoa.prototype._setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype._getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype._setCpf = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
