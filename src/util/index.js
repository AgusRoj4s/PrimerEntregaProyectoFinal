const fs = require('fs');

exports.writeFile = (route, content) => {
    try {
        fs.writeFileSync(route, content);
    } catch (error) {
        console.log(error)
    }
}