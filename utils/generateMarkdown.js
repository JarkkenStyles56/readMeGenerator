// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} https://img.shields.io/npm/l/inquirer?style=plastic
  -----------------------
  # Table of Contents
  [Description](#description)[Installation](#installation)
  [Usage](#usage)
  [Licenses](#licenses)
  [Contributors](#contributors)
  [Tests](#tests)
  [Questions](#questions)

  ##Description:
  ${response.description}
  -----------------------
  ##Installation:
  ${response.installation}
  -----------------------
   ##Usage:
  ${response.usage}
  -----------------------
   ##Licenses:
  ${response.licenses}
  -----------------------
   ##Contributors:
  ${response.contributors}
  -----------------------
   ##Tests:
  ${response.tests}
  -----------------------
   ##Questions:
   If you have any questions regarding this readMe generator don't be afraid to leave me a message on my gitHub via:
  https://github.com/${response.username}

  or Email me here:${response.email}

  -----------------------

`;
}

module.exports = generateMarkdown;
