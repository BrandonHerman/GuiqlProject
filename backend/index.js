const express = require('express');
const bodyParser = require('body-parser');

//route handlers
const classRoutes = require('./routes/classRoutes');
const collegeRoutes = require('./routes/collegeRoutes');
const professorRoutes = require('./routes/professorRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teamRoutes = require('./routes/teamRoutes');
const userStoryRoutes = require('./routes/userStoryRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const progress_reportRoutes = require('./routes/progress_reportRoutes');

//middle ware
// const { createModelsMiddleware } = require('./middleware/model-middleware');
// const { authenticateJWT} = require('./middleware/auth.js');

//define express app instance
const app = express();
const port = 8000;
const cors = require('cors');
//start middleware chain
const { createModelsMiddleware } = require('./middleware/model-middleware');

app.use(createModelsMiddleware);
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

//health route
app.get('/health', (request, response, next) => {
    const responseBody = { status: 'up', port };
    response.json(responseBody);

    next();
});

app.use('/class', classRoutes);
app.use('/college', collegeRoutes);
app.use('/professor', professorRoutes);
app.use('/recruiter', recruiterRoutes);
app.use('/student', studentRoutes);
app.use('/team', teamRoutes);
app.use('/user_story', userStoryRoutes);
app.use('/assessment', assessmentRoutes);
app.use('/meeting', meetingRoutes);
app.use('/progress_report', progress_reportRoutes);



//listen for incoming requests
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});
