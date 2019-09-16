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
        Funcionario.prototype._setCodFuncionario = function (codigo) {
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
        Enfermeiro.prototype._getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype._setCoren = function (coren) {
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
        Paciente.prototype._getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype._setCodPaciente = function (codigo) {
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
var hospital;
(function (hospital_2) {
    var hospital = new hospital_2.Hospital();
    hospital._setNome("Maria das Dores");
    ////////////////////////////////////
    var paciente = new hospital_2.Paciente();
    paciente._setNome("João");
    paciente._setCpf("000.000.000-00");
    paciente._setCodPaciente(1);
    var enfermeiro = new hospital_2.Enfermeiro();
    enfermeiro._setNome("Joana");
    enfermeiro._setCoren(101);
    enfermeiro._setCodFuncionario(120);
    var medico = new hospital_2.Medico();
    medico._setNome("Cesar");
    medico._setCrm(110);
    medico._setEspecialidade("Proctologista");
    medico._setCodFuncionario(121);
    /////////////////////////////////////////
    var hospital2 = new hospital_2.Hospital();
    hospital2._setNome("Maria das Dores");
    var paciente2 = new hospital_2.Paciente();
    paciente2._setNome("Mariana");
    paciente2._setCpf("111.111.111-11");
    paciente2._setCodPaciente(2);
    var enfermeiro2 = new hospital_2.Enfermeiro();
    enfermeiro2._setNome("Jorge");
    enfermeiro2._setCoren(102);
    enfermeiro2._setCodFuncionario(122);
    var medico2 = new hospital_2.Medico();
    medico2._setNome("Camila");
    medico2._setCrm(111);
    medico2._setEspecialidade("Ginecologista");
    medico2._setCodFuncionario(123);
    //////////////////////////////////////////
    var hospital3 = new hospital_2.Hospital();
    hospital3._setNome("Maria das Dores");
    var paciente3 = new hospital_2.Paciente();
    paciente3._setNome("Pedro C.");
    paciente3._setCpf("124.246.218-69");
    paciente3._setCodPaciente(3);
    var enfermeiro3 = new hospital_2.Enfermeiro();
    enfermeiro3._setNome("Yuri");
    enfermeiro3._setCoren(103);
    enfermeiro3._setCodFuncionario(124);
    var medico3 = new hospital_2.Medico();
    medico3._setNome("Cesar");
    medico3._setCrm(112);
    medico3._setEspecialidade("Radiologista");
    medico3._setCodFuncionario(125);
    /////////////////////////////////////////
    document.getElementById("hospital").textContent = hospital._getNome();
    document.getElementById("nome").textContent = paciente._getNome();
    document.getElementById("cpf").textContent = paciente._getCpf();
    document.getElementById("codigo").textContent = paciente._getCodPaciente().toString();
    document.getElementById("enfermeiro").textContent = enfermeiro._getNome();
    document.getElementById("coren").textContent = enfermeiro._getCoren().toString();
    document.getElementById("CDFen").textContent = enfermeiro._getCodFuncionario().toString();
    document.getElementById("medico").textContent = medico2._getNome();
    document.getElementById("crm").textContent = medico._getCrm().toString();
    document.getElementById("CDFmd").textContent = medico._getCodFuncionario().toString();
    document.getElementById("especialidade").textContent = medico._getEspecialidade();
    //////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("hospital2").textContent = hospital._getNome();
    document.getElementById("nome2").textContent = paciente2._getNome();
    document.getElementById("cpf2").textContent = paciente2._getCpf();
    document.getElementById("codigo2").textContent = paciente2._getCodPaciente().toString();
    document.getElementById("enfermeiro2").textContent = enfermeiro2._getNome();
    document.getElementById("coren2").textContent = enfermeiro2._getCoren().toString();
    document.getElementById("CDFen2").textContent = enfermeiro2._getCodFuncionario().toString();
    document.getElementById("medico2").textContent = medico2._getNome();
    document.getElementById("crm2").textContent = medico2._getCrm().toString();
    document.getElementById("CDFmd2").textContent = medico2._getCodFuncionario().toString();
    document.getElementById("especialidade2").textContent = medico2._getEspecialidade();
    //////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("hospital3").textContent = hospital._getNome();
    document.getElementById("nome3").textContent = paciente3._getNome();
    document.getElementById("cpf3").textContent = paciente3._getCpf();
    document.getElementById("codigo3").textContent = paciente3._getCodPaciente().toString();
    document.getElementById("enfermeiro3").textContent = enfermeiro3._getNome();
    document.getElementById("coren3").textContent = enfermeiro3._getCoren().toString();
    document.getElementById("CDFen3").textContent = enfermeiro3._getCodFuncionario().toString();
    document.getElementById("medico3").textContent = medico3._getNome();
    document.getElementById("crm3").textContent = medico3._getCrm().toString();
    document.getElementById("CDFmd3").textContent = medico3._getCodFuncionario().toString();
    document.getElementById("especialidade3").textContent = medico3._getEspecialidade();
    ////////////////////////////trecho inserido para exemplificar a implentação das tabelas////////////////////////////////////////
    var tabela = document.getElementById("tabela");
    var Pc = " <tr> <th>Paciente</th> </tr>";
    hospital._getPacientes().forEach(function (element) {
        Pc += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Pc += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Pc += "<tr> <td>" + element._getNome() + "</td> </tr>";
    });
    var Ef = " <tr> <th>Enfermeiros</th> </tr>";
    hospital._getEnfermeiros().forEach(function (element) {
        Ef += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Ef += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Ef += "<tr> <td>" + element._getNome() + "</td> </tr>";
    });
    var Md = " <tr> <th>Medicos</th> </tr>";
    hospital._getMedicos().forEach(function (element) {
        Md += "</td> <td>" + element._getNome() + "</td></tr>";
        Md += "</td> <td>" + element._getNome() + "</td></tr>";
        Md += "</td> <td>" + element._getNome() + "</td></tr>";
    });
    tabela.innerHTML = Pc;
    tabela.innerHTML = Ef;
    tabela.innerHTML = Md;
    var tabela2 = document.getElementById("tabela");
    var Pc2 = " <tr> <th>Paciente</th> </tr>";
    hospital._getPacientes().forEach(function (element) {
        Pc2 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Pc2 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Pc2 += "<tr> <td>" + element._getNome() + "</td> </tr>";
    });
    var Ef2 = " <tr> <th>Enfermeiros</th> </tr>";
    hospital._getEnfermeiros().forEach(function (element) {
        Ef2 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Ef2 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Ef2 += "<tr> <td>" + element._getNome() + "</td> </tr>";
    });
    var Md2 = " <tr> <th>Medicos</th> </tr>";
    hospital._getMedicos().forEach(function (element) {
        Md2 += "</td> <td>" + element._getNome() + "</td></tr>";
        Md2 += "</td> <td>" + element._getNome() + "</td></tr>";
        Md2 += "</td> <td>" + element._getNome() + "</td></tr>";
    });
    var tabela3 = document.getElementById("tabela");
    var Pc3 = " <tr> <th>Paciente</th> </tr>";
    hospital._getPacientes().forEach(function (element) {
        Pc3 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Pc3 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Pc3 += "<tr> <td>" + element._getNome() + "</td> </tr>";
    });
    var Ef3 = " <tr> <th>Enfermeiros</th> </tr>";
    hospital._getEnfermeiros().forEach(function (element) {
        Ef3 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Ef3 += "<tr> <td>" + element._getNome() + "</td> </tr>";
        Ef3 += "<tr> <td>" + element._getNome() + "</td> </tr>";
    });
    var Md3 = " <tr> <th>Medicos</th> </tr>";
    hospital._getMedicos().forEach(function (element) {
        Md3 += "</td> <td>" + element._getNome() + "</td></tr>";
        Md3 += "</td> <td>" + element._getNome() + "</td></tr>";
        Md3 += "</td> <td>" + element._getNome() + "</td></tr>";
    });
})(hospital || (hospital = {}));
