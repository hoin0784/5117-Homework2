
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import { app, Datastore } from 'codehooks-js'
import { crudlify } from 'codehooks-crudlify'
import { date, object, string, boolean } from 'yup';

// import jwtDecode from 'jwt-decode';

// TodoList model
const todoYup = object({
  userId: string().required(),
  text: string().required(),
});

const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      // NOTE this doesn't validate, but we don't need it to. codehooks is doing that for us.
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  }
}
app.use(userAuth)

// some extra logic for GET / and POST / requests.
app.use('/todo', (req, res, next) => {
  if (req.method === "POST") {
    req.body.userId = req.user_token.sub
  } else if (req.method === "GET") {
    req.query.userId = req.user_token.sub
  }

  console.log(req.body.userId);
  next();
})

crudlify(app, { todo: todoYup });

// bind to serverless runtime
export default app.init();
