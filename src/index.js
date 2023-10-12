import app from './app';
import routes from './routes';
import { env, port } from './config';

app.use('/api', routes);

app.listen(port || 5000, () => {
	console.info(`server started on port ${port} (${env})`); // eslint-disable-line no-console
});

export default app;
