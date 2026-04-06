import express from 'express';
import { authrouter } from './module/auth/auth.route';
import dashboardRoute from './module/dashboard/dashboard.route';
import recordRoute from './module/record/record.route';
import userRouter from './module/user/user.route';

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authrouter);
app.use('/api/v1/dashboard', dashboardRoute);
app.use('/api/v1/record', recordRoute);

export default app;