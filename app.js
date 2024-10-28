require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Use Render's port or fallback to 5000

app.use(cors());
app.use(express.json());

const connection = require('./database/db.config');

const usersRoutes = require('./routes/users.routes');
const questionsRoutes = require('./routes/question.routes');
const answerRoutes = require('./routes/answers.routes');
const auth = require('./middleware/auth.middleware');

app.use('/api/users', usersRoutes);
app.use('/api/questions', auth, questionsRoutes);
app.use('/api/answers', auth, answerRoutes);

(async () => {
  try {
    const result = await connection.execute("SELECT 'test'");
    console.log(result); // Uncomment this to see the result of the test query

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log('Database connection established :)');
  } catch (err) {
    console.error(err.message);
  }
})();
