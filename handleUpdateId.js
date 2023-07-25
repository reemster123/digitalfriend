const fs = require("fs");
const file = "nextUpdateId.txt";

const setUpdateId = (number) => {
    try {
        fs.writeFileSync(file, number.toString());
    } catch(err) {
        console.error("Something went wrong in setUpdateId", err);
    }
   
}

const getUpdateId = () => {
    try {
        const result = parseInt(fs.readFileSync(file, "utf8"));
        console.log(`retrieved message id ${result}`);
        return result;
    } catch(err) {
        console.error("Something went wrong in getUpdateId", err);
        return null;
    }
}

module.exports = {setUpdateId, getUpdateId}