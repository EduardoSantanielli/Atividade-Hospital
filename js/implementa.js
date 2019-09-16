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
