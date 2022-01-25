const fs = require('fs/promises');

/**
 * Copies the .eslintrc.json file to the /lib/index.js file
 *
 * @returns {Promise<string>} message when done
 */
async function copy() {
    /** @type {string|Buffer} */
    let content = await fs.readFile('./.eslintrc.json');
    content = content.toString('utf-8');
    content = `/** ---===[Autogenerated file]===---\n * If you want to make changes, edit the root .eslintrc.json file and then run the command "npm run copy" */\nmodule.exports = ${content}`;
    await fs.writeFile('./lib/index.js', content);
    return 'done';
}
copy().then(console.log).catch(console.error);
