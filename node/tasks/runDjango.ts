
import { spawn } from 'child_process';

const runServer = () => {
    let cmd = spawn('python', ['../manage.py', 'runserver', 'localhost:8000'], {stdio: 'inherit'});
    cmd.on('close', function(code) {
        console.log('runServer exited with code ' + code);
    });
}

export default runServer;