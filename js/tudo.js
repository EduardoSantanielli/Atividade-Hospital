var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setnome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts"/>
var hospital;
(function (hospital) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype._getCodFuncionario = function () {
            return this._codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (codigo) {
            this._codFuncionario = codigo;
        };
        return Funcionario;
    }(hospital.Pessoa));
    hospital.Funcionario = Funcionario;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts"/>
var hospital;
(function (hospital) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        return Enfermeiro;
    }(hospital.Funcionario));
    hospital.Enfermeiro = Enfermeiro;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts"/>
var hospital;
(function (hospital) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype._getCodpaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype._setcodPaciente = function (codigo) {
            this._codPaciente = codigo;
        };
        return Paciente;
    }(hospital.Pessoa));
    hospital.Paciente = Paciente;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts"/>
var hospital;
(function (hospital) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype._getCrm = function () {
            return this._crm;
        };
        Medico.prototype._setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype._getEspecialidade = function () {
            return this._especialidade;
        };
        Medico.prototype._setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        return Medico;
    }(hospital.Funcionario));
    hospital.Medico = Medico;
})(hospital || (hospital = {}));
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
///<reference path="pessoa.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="hospital.ts"/>
var empresa;
(function (empresa) {
    var hospital = new Hospital();
    hospital.setNome("Maria das Dores");
    ////////////////////////////////////
    var paciente = new Paciente();
    paciente.setNome("João");
    paciente.setCpf("000.000.000-00");
    paciente.setCodPaciente(1);
    var enfermeiro = new Enfermeiro();
    enfermeiro.setnome("Joana");
    enfermeiro.setCoren(101);
    enfermeiro.setCodFuncionario(120);
    var medico = new Medico();
    medico.setNome("Cesar");
    medico.setCrm(110);
    medico.setEspecialidade("Proctologista");
    medico.setCodFuncionario(121);
    /////////////////////////////////////////
    var paciente2 = new Paciente();
    paciente2.setNome("Mariana");
    paciente2.setCpf("111.111.111-11");
    paciente2.setCodPaciente(2);
    var enfermeiro2 = new Enfermeiro();
    enfermeiro2.setnome("Jorge");
    enfermeiro2.setCoren(102);
    enfermeiro2.setCodFuncionario(122);
    var medico2 = new Medico();
    medico2.setNome("Camila");
    medico2.setCrm(111);
    medico2.setEspecialidade("Ginecologista");
    medico2.setCodFuncionario(123);
    //////////////////////////////////////////
    var paciente3 = new Paciente();
    paciente3.setNome("Pedro C.");
    paciente3.setCpf("124.246.218-69");
    paciente3.setCodPaciente(3);
    var enfermeiro3 = new Enfermeiro();
    enfermeiro3.setnome("Yuri");
    enfermeiro3.setCoren(103);
    enfermeiro3.setCodFuncionario(124);
    var medico3 = new Medico();
    medico3.setNome("Cesar");
    medico3.setCrm(112);
    medico3.setEspecialidade("Radiologista");
    medico3.setCodFuncionario(125);
    /////////////////////////////////////////
    document.getElementById("hospital").textContent = hospital.getNome();
    document.getElementById("nome").textContent = paciente2.getNome();
    document.getElementById("cpf").textContent = paciente2.getCpf();
    document.getElementById("codigo").textContent = paciente2.getCodPaciente().toString();
    document.getElementById("enfermeiro").textContent = enfermeiro2.getNome();
    document.getElementById("coren").textContent = enfermeiro2.getCoren();
    document.getElementById("CDFen").textContent = enfermeiro2.getCodFuncionario();
    document.getElementById("medico").textContent = medico2.getNome();
    document.getElementById("crm").textContent = medico2.getCrm();
    document.getElementById("CDFmd").textContent = medico2.getCodFuncionario();
    document.getElementById("especialidade").textContent = medico2.getEspecialidade();
    //////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("hospital").textContent = hospital.getNome();
    document.getElementById("nome").textContent = paciente3.getNome();
    document.getElementById("cpf").textContent = paciente3.getCpf();
    document.getElementById("codigo").textContent = paciente3.getCodPaciente().toString();
    document.getElementById("enfermeiro").textContent = enfermeiro.getNome();
    document.getElementById("coren").textContent = enfermeiro3.getCoren();
    document.getElementById("CDFen").textContent = enfermeiro3.getCodFuncionario();
    document.getElementById("medico").textContent = medico3.getNome();
    document.getElementById("crm").textContent = medico3.getCrm();
    document.getElementById("CDFmd").textContent = medico3.getCodFuncionario();
    document.getElementById("especialidade").textContent = medico3.getEspecialidade();
    ////////////////////////////trecho inserido para exemplificar a implentação das tabelas////////////////////////////////////////
    var tabela = document.getElementById("tabela");
    var conteudo = " <tr> <th>Hospital</th> <th>Paciente</th> <th>Enfermeiro</th> <th>Medico</th> </tr>";
    hospital.getPacientes().forEach(function (element) {
        conteudo += "<tr> <td>" + element.getNome() + "</td><td>" + element.getEnfermeiros().getNome() + "</td> <td>" + element.getMedicos().getNome() + "</td></tr>";
        conteudo += "<tr> <td>" + element.getNome() + "</td><td>" + element.getEnfermeiros().getNome() + "</td> <td>" + element.getMedicos().getNome() + "</td></tr>";
        conteudo += "<tr> <td>" + element.getNome() + "</td><td>" + element.getEnfermeiros().getNome() + "</td> <td>" + element.getMedicos().getNome() + "</td></tr>";
    });
    tabela.innerHTML = conteudo;
})(empresa || (empresa = {}));
