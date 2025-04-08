const { exec } = require('child_process');

function runCommand(command, name) {
  console.log(`Starting ${name}...`);
  
  const process = exec(command);
  
  process.stdout.on('data', (data) => {
    console.log(`${name} stdout: ${data}`);
  });
  
  process.stderr.on('data', (data) => {
    console.error(`${name} stderr: ${data}`);
  });
  
  process.on('close', (code) => {
    console.log(`${name} process exited with code ${code}`);
  });
  
  return process;
}

// Run the simplified Planet app
runCommand('node app.js', 'Planet App');