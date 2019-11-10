const mysqlConnection = require('../configurations/db');

const post = (req, res) => {
    var user_id = req.param('id') ;
    var pass = req.param('pass');
   if(user_id != undefined || pass != undefined)
   {
        mysqlConnection.query(`SELECT * FROM usuario WHERE email="${user_id}"`, (err, rows, fields) => {
          
            if (!err) {
               
                if(rows.length>0)
                {
                    if(rows[0].contrasenia == pass)
                    {
                       
                        res.json("OK");
                     
                    }
                    else {res.json("err");}
                } else {res.json("err");}                     
            } else {
                console.log(err);
                res.json("err");
            }
        });
      
    }else
    {
        res.json("err");
    }

    return mysqlConnection;
}

module.exports = {
    post: post,
}

