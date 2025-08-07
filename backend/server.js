const express = require('express');
const nodemailer = require("nodemailer");
require('dotenv').config();
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors());
app.use(express());
app.use(express.json());


const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'db_email_automatizator',
  ssl: {
    rejectUnauthorized: false
  }
});


app.get('/access', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT in,nome FROM access_types');
    res.json(rows);
  } catch (err) {
    console.error("ERROR!" + err)
    res.send({
      title: "ERROR!",
      msg: "ERRO AO CONECTAR COM O BD!"
    })
  }
})

app.post('/access', async (req, res) => {

  const { name, description } = req.body;

  if (!name || name.trim().length === 0) {
    return res.status(400).json({
      title: "Erro!",
      msg: "O campo 'name' é obrigatório."
    });
  }

  if (name.length > 40) {
    return res.status(400).json({
      title: "Erro!",
      msg: "Número de caracteres excedido! Máximo permitido: 40."
    });
  }

  if (name.length <= 40) {
    try {
      const [result] = await pool.query(`INSERT INTO access_types (name,description) VALUES (?,?)`, [name, description]);

      res.status(201).json({
        title: "Sucesso!",
        msg: "Cadastro de Acesso"
      })
    } catch (err) {
      console.error("ERRO AO INSERIR NO BANCO");
      res.status(500).json({
        title: "Erro!",
        msg: "Não foi possível cadastrar o acesso.",
      });
    }

  } else {
    console.error("NÚMERO DE CARACTERES ACIMA DE 40!");
    res.status(400).json({
      title: "Erro!",
      msg: "Número de Caracteres excedido!.",
    });
  }


});

app.delete('/access/:id', async (req, res) => {

  const accessId = req.params.id;

  console.log(accessId);
  if (isNaN(accessId)) {
    return res.status(400).json({
      error: "ERRO! ACESSOS INVÁLIDO!",
      title: "ERRO 400",
      msg: "Id Inválida!"
    })
  }

  try {
    const [result] = await pool.query("DELETE FROM access_types WHERE id = ?", [accessId])

    if (result.affectedRows === 0) {
      return res.status(404).json({
        title: "Erro!",
        msg: "Registro não encontrado."
      });
    }

    return res.status(200).json({
      title: "Sucesso!",
      msg: "Acesso excluído com sucesso."
    });

  } catch (error) {
    console.error("Erro ao excluir:", err);
    return res.status(500).json({
      title: "ERRO!",
      msg: "Erro ao deletar!"
    })
  }
})

app.post('/profile', async (req, res) => {

  const { name, access } = req.body;

  if (!name || name.trim().length < 3) {
    return res.status(400).send({ error: "ERRO!", title: 'ERRO!', msg: "Nome com caracteres inválidos" });
  }

  if (!Array.isArray(access) || access.length == 0) {
    return res.status(400).send({ error: "ERRO!", title: 'ERRO!', msg: "Insira ao menos UM acesso!" });
  }

  let connection;

  try {

    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [rowsProfile] = await connection.query('INSERT INTO profiles(nome) VALUES (?)', [name.trim()]);

    const idProfile = rowsProfile.insertId;

    if (rowsProfile.affectedRows == 0) {
      connection.rollback();
      return res.status(400).send({ error: "ERRO!", title: 'ERRO!', msg: "Erro de cadastro!" });
    } else {
      console.log(`SUCCESSFUL INSERTION ID: ${rowsProfile.insertId}`);
    }

    const ids = access.map(ids => ids.id);
    const [rowsAccess] = await connection.query(`SELECT * FROM access_types WHERE id IN(${ids.map(id => '?').join(',')})`, ids);

    if (rowsAccess.length !== ids.length) {
      connection.rollback();
      return res.status(400).send({ error: "ERRO!", title: 'ERRO!', msg: "Inconsistência dos Dados!" });
    } else {
      console.log(`SUCCESSFUL SELECTED ID:`);
      console.log(rowsAccess);
    }

    const insertProfileAccess = ids.map(ids => [idProfile, ids]);

    console.log(insertProfileAccess);

    const [rowsInsertAccess] = await connection.query('INSERT INTO profile_access(profile_id,access_id) VALUES ?', [insertProfileAccess]);
    if (rowsInsertAccess.affectedRows !== insertProfileAccess.length) {
      connection.rollback();
      return res.status(500).send({ error: "ERRO!", msg: "Falha ao inserir acessos" });
    }
    console.log(rowsInsertAccess.info);

    connection.commit();

    return res.status(201).json({
      success: true,
      title: "Sucesso!",
      msg: "Profile criado com sucesso!",
      profileId: idProfile,
      accessCount: ids.length
    });

  } catch (error) {
    if (connection) {
      await connection.rollback();
    }
    console.error(error);
    return res.status(500).json({
      success: false,
      title: "Erro!",
      msg: "Erro no cadastro!",
      profileId: idProfile,
      accessCount: ids.length
    });
  } finally {
    if (connection) connection.release();
  }


})

app.get("/profile", async (req, res) => {

  try {

    const [rowsProfile] = await pool.query(`SELECT * FROM profiles`);
    console.log(rowsProfile);
    res.json(rowsProfile);

  } catch (err) {
    return res.status(500).json({
      success: false,
      title: "Erro!",
      msg: "Erro no cadastro!",
      //profileId: idProfile,
      // accessCount: ids.length
    });
  }

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

  pool.query(sql, function (err, fill) {

    if (err) throw err

    console.log(fill);
  })
}

function makeEmailContent(values) {

  let email = `<h4 style="font-size: 18px;">Olá Departamento de T.I</h4>
        <p>Solicito a criação dos seguintes acessos para o funcionário: <span style="font-size: 18px; font-weight: bold;">${values.name}</span></p>`


  console.log(email);


}
