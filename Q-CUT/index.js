import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import { log } from "console";

const app = express();
const port = 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Q-CUT",
  password: "123",
  port: 5432,
});
const saltround=10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
db.connect();

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.get("/login", (req, res) => {
  res.render("login.ejs")
});

app.get("/register",(req,res)=>{
  res.render("register.ejs");
});

app.get("/loginsuccesful",(req,res)=>{
  res.render("loginsuccesful.ejs",{
    msg:"Login",
    para:"details have been verified",
    link:"click here",
    to:"/homepage"
  })
});

app.get("/registersuccesful",(req,res)=>{
  res.render("loginsuccesful.ejs",{
    msg:"Register",
    para:"Account creater",
    link:"click here",
    to:"/login"
  })
});

app.get("/loginfail",(req,res)=>{
  res.render("loginfail.ejs",{
    msg:"Login Failed",
    para:"Password is inncorrect",
    link:"Try again?",
    to:"/login"
  })
})

app.get("/registerfail",(req,res)=>{
  res.render("loginfail.ejs",{
    msg:"Register Failed",
    para:"Password entered and re entered doesnot match",
    link:"Try again?",
    to:"/register"
  })
});

app.get("/viewmore",(req,res)=>{
  res.render("viewmore.ejs")
})

app.get("/homepage",(req,res)=>{
  res.render("homepage.ejs");
})

app.get("/dinein",(req,res)=>{
  res.render("dinein.ejs")
})
var name;
app.post("/login", async (req, res) => {
  try {
    const user = req.body["username"];
    const password = req.body["password"];
    const result = await db.query("SELECT * FROM login WHERE email=$1", [user]);
    
    if (result.rows.length > 0) {
      const data = result.rows[0];
      const loginpass = data.password;
      name = data.name;

      const comparePasswords = (password, loginpass) => {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, loginpass, (err, result) => {
            if (err) return reject(err);
            resolve(result);
          });
        });
      };

      const isPasswordValid = await comparePasswords(password, loginpass);
      
      if (isPasswordValid) {// Access the name variable here
        await db.query("insert into logined(id,name) values(1,$1)",[name])
        res.redirect("/loginsuccesful");
      } else {
        res.redirect("/loginfail");
      }
    } else {
      res.redirect("/loginfail");
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});
console.log(name)
app.post("/register",async(req,res)=>{
  const user=req.body["username"];
  const email=req.body["email"]
  const number=req.body["phonenumber"];
  const pass1=req.body["password1"];
  const pass2=req.body["password2"];
  if(pass1===pass2){
    bcrypt.hash(pass1,saltround,async(err,hash)=>{
      await db.query("insert into login(name,email,phonenumber,password) values ($1,$2,$3,$4)",[user,email,number,hash]);
    });
    await db.query(`create table IF NOT EXISTS ${user} (id serial primary key,order_id int,tastepref varchar(30),FOREIGN KEY (order_id) REFERENCES food_list (id))`)
    await db.query(`create table IF NOT EXISTS ${user}ordered (id serial primary key,order_id int,FOREIGN KEY (order_id) REFERENCES food_list (id))`)
    res.redirect("/registersuccesful")
  }else{
    res.redirect("/registerfail")
  }

});

app.post("/add", async (req, res) => {
  try {
    console.log("Form Data:", req.body); // Log the entire req.body to debug
    console.log("ID:", req.body["id"]); // Access the id from the form
    
    const order = await db.query("SELECT * FROM food_list");
    const name=await db.query("select * from logined");
    const data1=name.rows[1];
    const mainname=data1.name;
    const mainname1=mainname.replace( /\s/g, '')
    const data = order.rows;

    data.forEach(async food => {
      if (food.id == req.body["id"]) {
        console.log(food);
        await db.query(`INSERT INTO ${mainname1}(order_id) VALUES($1)`,[food.id])
      } 
    });
    const h=await db.query(`SELECT * FROM food_list INNER JOIN ${mainname1} ON ${mainname1}.order_id=food_list.id;`)
    console.log(h.rows)
    res.redirect("/homepage")

  } catch (error) {
    console.error('Error processing the form:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/cart",async(req,res)=>{
  const name=await db.query("select * from logined");
  const data1=name.rows[1];
  const mainname=data1.name;
  const mainname1=mainname.replace( /\s/g, '')
  console.log(mainname1)
  const h=await db.query(`SELECT * FROM food_list INNER JOIN ${mainname1} ON ${mainname1}.order_id=food_list.id;`)
  const data=h.rows;
  res.render("cart.ejs",{
    data:h.rows
  })
})

app.post("/remove",async(req,res)=>{
  console.log(req.body["id"]);
  const name=await db.query("select * from logined");
  const data1=name.rows[1];
  const mainname=data1.name;
  const mainname1=mainname.replace( /\s/g, '')
  await db.query(`delete from ${mainname1} where id=$1`,[req.body["id"]])
  res.redirect("/cart")
});
app.get("/logout",async(req,res)=>{
  await db.query("delete from logined where id=1");
  res.redirect("/");
})
app.get("/contact",async(req,res)=>{
  res.send("contact to this fancy number 6969696969")
})
app.get("/aboutus",async(req,res)=>{
  res.render("aboutus.ejs")
});

app.get("/ordersuccesful",async(req,res)=>{
  res.render("orderplaced.ejs")
  const name=await db.query("select * from logined");
  const data1=name.rows[1];
  const mainname=data1.name;
  const mainname1=mainname.replace( /\s/g, '')
  const result=await db.query(`select * from ${mainname1}`);
  const data=result.rows
  data.forEach(async(order)=>{
    console.log(order.order_id)
    await db.query(`insert into ${mainname1}ordered (order_id) values ($1)`,[order.order_id])
  })
  await db.query(`delete from ${mainname1} where id>0`)
});

app.get("/perviouslyordered",async(req,res)=>{
  const name=await db.query("select * from logined");
  const data1=name.rows[1];
  const mainname=data1.name;
  const mainname1=mainname.replace( /\s/g, '')
  const result=await db.query(`SELECT ${mainname1}ordered.order_id, food_list.name, food_list.image, food_list.price FROM ${mainname1}ordered INNER JOIN food_list ON ${mainname1}ordered.order_id = food_list.id GROUP BY ${mainname1}ordered.order_id, food_list.id;`);
  console.log(result.rows)
  res.render("porder.ejs",{
    data:result.rows
  })
})

app.post('/submit-review', async (req, res) => {
  const name=await db.query("select * from logined");
  const data1=name.rows[1];
  const mainname=data1.name;
  const mainname1=mainname.replace( /\s/g, '')
  const { order_id, rating, review } = req.body;
  console.log(`Order ID: ${order_id}, Rating: ${rating}, Review: ${review}`);
  await db.query(`create table IF NOT EXISTS review${order_id} (rating int,review varchar(1000))`)
  // Save the rating and review to the database if necessary
  await db.query(`INSERT INTO review${order_id} (rating, review) VALUES ($1, $2)`, [rating, review]);
  await db.query(`delete from ${mainname1}ordered where order_id=$1`,[order_id])

  res.redirect("/perviouslyordered")
});

for (var i = 1; i <= 32; i++) {
  (function(index) {
    app.get("/" + index, async (req, res) => {
      try {
        const result = await db.query(`SELECT * FROM review${index}`);
        const result1 = await db.query("SELECT * FROM food_list WHERE id = $1", [index]);
        
        console.log(result1.rows);
        console.log(result.rows);
        
        res.render("review.ejs", {
          data: result.rows,
          data1: result1.rows
        });
      } catch (error) {
        if (error.code === 'ER_NO_SUCH_TABLE') {
          console.error(`Table review${index} does not exist.`);
          // Handle the case where the table does not exist, maybe render an error page
          res.status(404).send("Table does not exist.");
        } else {
          console.error('Error querying database:', error);
          // Handle other database errors
          res.status(500).send("NO FOOD REVIEWS AVAILABLE BE THE FIRST ONE TO REVIEW IT");
        }
      }
    });
  })(i);
}



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
