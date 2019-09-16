///<reference path="pessoa.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="hospital.ts"/>
var hospital;
(function (hospital_1) {
    var hospital = new hospital_1.Hospital();
    hospital._setNome("Maria das Dores");
    ////////////////////////////////////
    var paciente = new hospital_1.Paciente();
    paciente._setNome("João");
    paciente._setCpf("000.000.000-00");
    paciente._setCodPaciente(1);
    var enfermeiro = new hospital_1.Enfermeiro();
    enfermeiro._setNome("Joana");
    enfermeiro._setCoren(101);
    enfermeiro._setCodFuncionario(120);
    var medico = new hospital_1.Medico();
    medico._setNome("Cesar");
    medico._setCrm(110);
    medico._setEspecialidade("Proctologista");
    medico._setCodFuncionario(121);
    /////////////////////////////////////////
    var paciente2 = new hospital_1.Paciente();
    paciente2._setNome("Mariana");
    paciente2._setCpf("111.111.111-11");
    paciente2._setCodPaciente(2);
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2._setNome("Jorge");
    enfermeiro2._setCoren(102);
    enfermeiro2._setCodFuncionario(122);
    var medico2 = new hospital_1.Medico();
    medico2._setNome("Camila");
    medico2._setCrm(111);
    medico2._setEspecialidade("Ginecologista");
    medico2._setCodFuncionario(123);
    //////////////////////////////////////////
    var paciente3 = new hospital_1.Paciente();
    paciente3._setNome("Pedro C.");
    paciente3._setCpf("124.246.218-69");
    paciente3._setCodPaciente(3);
    var enfermeiro3 = new hospital_1.Enfermeiro();
    enfermeiro3._setNome("Yuri");
    enfermeiro3._setCoren(103);
    enfermeiro3._setCodFuncionario(124);
    var medico3 = new hospital_1.Medico();
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
    document.getElementById("hospital").textContent = hospital._getNome();
    document.getElementById("nome").textContent = paciente2._getNome();
    document.getElementById("cpf").textContent = paciente2._getCpf();
    document.getElementById("codigo").textContent = paciente2._getCodPaciente().toString();
    document.getElementById("enfermeiro").textContent = enfermeiro2._getNome();
    document.getElementById("coren").textContent = enfermeiro2._getCoren().toString();
    document.getElementById("CDFen").textContent = enfermeiro2._getCodFuncionario().toString();
    document.getElementById("medico").textContent = medico2._getNome();
    document.getElementById("crm").textContent = medico2._getCrm().toString();
    document.getElementById("CDFmd").textContent = medico2._getCodFuncionario().toString();
    document.getElementById("especialidade").textContent = medico2._getEspecialidade();
    //////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("hospital").textContent = hospital._getNome();
    document.getElementById("nome").textContent = paciente3._getNome();
    document.getElementById("cpf").textContent = paciente3._getCpf();
    document.getElementById("codigo").textContent = paciente3._getCodPaciente().toString();
    document.getElementById("enfermeiro").textContent = enfermeiro3._getNome();
    document.getElementById("coren").textContent = enfermeiro3._getCoren().toString();
    document.getElementById("CDFen").textContent = enfermeiro3._getCodFuncionario().toString();
    document.getElementById("medico").textContent = medico3._getNome();
    document.getElementById("crm").textContent = medico3._getCrm().toString();
    document.getElementById("CDFmd").textContent = medico3._getCodFuncionario().toString();
    document.getElementById("especialidade").textContent = medico3._getEspecialidade();
    ////////////////////////////trecho inserido para exemplificar a implentação das tabelas////////////////////////////////////////
    var tabela = document.getElementById("tabela");
    var conteudo = " <tr> <th>Hospital</th> <th>Paciente</th> <th>Enfermeiro</th> <th>Medico</th> </tr>";
    hospital._getPacientes().forEach(function (element) {
        conteudo += "<tr> <td>" + element._getNome();
        conteudo += "<tr> <td>" + element._getNome();
        conteudo += "<tr> <td>" + element._getNome();
    });
    tabela.innerHTML = conteudo;
    hospital._getEnfermeiros().forEach(function (element) {
        conteudo += "<tr> <td>" + element._getNome();
        conteudo += "<tr> <td>" + element._getNome();
        conteudo += "<tr> <td>" + element._getNome();
    });
    hospital._getMedicos().forEach(function (element) {
        conteudo += "<tr> <td>" + element._getNome();
        conteudo += "<tr> <td>" + element._getNome();
        conteudo += "<tr> <td>" + element._getNome();
    });
})(hospital || (hospital = {}));
