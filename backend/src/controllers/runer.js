import {listWebScraping} from "./puppee.js"

function miaaa (req, res){
try {
    listWebScraping()
    res.status(200);
}catch (error) {
    console.log(error);
}
}

export default miaaa