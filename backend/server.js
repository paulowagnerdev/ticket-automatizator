const express = require('express');
const nodemailer = require("nodemailer");
require('dotenv').config();
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors());
app.use(express());
app.use(express.json());

//--------------------------SQL Connection---------------------------------//
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'db_email_automatizator',
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect(function (err) {
  if (err) {
    console.error("Erro ao inserir dados no Database");
  } else {
    console.log("Connection with mysql succeeded");
  }
});

//--------------------------SQL Connection---------------------------------//

//--------------------------Routes---------------------------------//


app.get('/access', (req, res) => {

  connection.query('SELECT * FROM access_types', function (err, access) {
    if (err) console.error(err);

    res.send(access);
  })

})

app.post('/access', (req, res) => {

  const access = req.body;

  if (access.name.length <= 40) {
    const queryInsertAccess = `INSERT INTO access_types (name,description) VALUES (?,?)`;
    connection.query(queryInsertAccess, [access.name, access.description], function (err, access) {
      if (err) {
        console.error(err);
        res.status(500).json({
          title: "Erro!",
          msg: "Não foi possível cadastrar o acesso.",
        });
      } else {
        res.status(201).json({
          title: "Sucesso!",
          msg: "Cadastro de Acesso"
        })
      }
    })
  } else {
    console.error("NÚMERO DE CARACTERES ACIMA DE 40!")
    console.error(access.name.length)
    res.status(500).json({
      title: "Erro!",
      msg: "Número de Caracteres excedido!.",
    });
  }


})

app.delete('/access/:id', (req, res) => {
  const accessId = req.params.id;

  const queryRemoveAccess = 'DELETE from access_types WHERE id = ?';
  connection.query(queryRemoveAccess, [accessId], function (err, deleteAccess) {
    if (err) {
      res.status(500).json({ title: "Erro!", msg: "Erro ao excluir usuário!" });
    } else {
      res.status(200).json({ title: "Sucesso!", msg: "Usuário Excluído" });
    }
  })

})

app.delete('/user', (req, res) => {

  const id = req.body
  console.log(id);

})

app.post('/profile', (req, res) => {

  const { name, access } = req.body;
  if (!name || name.trim().length < 3) {
    return res.status(400).json({ error: "ERRO! NOME INVÁLIDO!" , title: "ERRO 400", msg: "NOME INVÁLIDO!" });
  } else if (!Array.isArray(access) || access.length == 0) {
    return res.status(400).json({ error: "ERRO! ACESSOS INVÁLIDO!" , title: "ERRO 400", msg: "ACESSOS INVÁLIDO!" });
  }

  access.forEach(element => {
    console.log(element);
  });


  res.json({ msg: "chegou" });

})

app.get("/profile", (req, res) => {

  const dados = "DADOS";

  res.send({
    msg: 'teste'
  });


})


app.get('/cadastros', (req, res) => {

  /* connection.query('SELECT * FROM cadastro',  function(err,cadastros){
 
     if(err) throw err
 
     res.send(cadastros);
 })*/

})

app.post('/send-email', (req, res) => {

  const values = req.body;

  //makeEmailContent(values);

  try {

    async function sendEmail() {

      const info = await transporter.sendMail({
        from: '"Ticket Automatizator - Abertura de Tickets para o T.I!" <ti.transligue@gmail.com>',
        to: "ti.transligue@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: `Abrir um chamado para o ${values.name}`,
      });

      console.log("Message sent: %s", info.messageId);

      insertValuesInSql(values);

    }

    //sendEmail();


  } catch (err) {
    console.error(err);
  }



})

app.listen(port, () => {
  console.log(`Server Online on ${port}`);
})

//--------------------------Routes---------------------------------//

//--------------------------NodeMailer Configuration---------------------------------//

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "ti.transligue@gmail.com",
    pass: "atcb kaxy qubk xbql",
  },
});

//--------------------------NodeMailer Configuration---------------------------------//

function insertValuesInSql(values) {
  const sql = `INSERT INTO cadastro(
    personal_name,
    access_tmsxt,
    access_hcm,
    access_rms,
    access_qualyteam,
    access_buonny,
    access_trucks,
    access_ndd,
    access_crani,
    smartphone_term
    ) VALUES(
    '${values.name}',
    ${values.tmsxt},
    ${values.hcm},
    ${values.rms},
    ${values.qualyteam},
    ${values.buonny},
    ${values.trucks},
    ${values.ndd},
    ${values.crani},
    ${values.nameemail}
    )`

  connection.query(sql, function (err, fill) {

    if (err) throw err

    console.log(fill);
  })
}

function makeEmailContent(values) {

  let email = `<h4 style="font-size: 18px;">Olá Departamento de T.I</h4>
        <p>Solicito a criação dos seguintes acessos para o funcionário: <span style="font-size: 18px; font-weight: bold;">${values.name}</span></p>`


  console.log(email);


}
