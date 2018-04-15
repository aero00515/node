if (process.env[process.argv[2]]) {
    console.log(process.env[process.argv[2]]);
} else {
    console.log('No this env var');
}