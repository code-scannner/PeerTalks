import executeQuery from '../../../lib/db'
import { urltoParams } from '../../../lib/utils'

export async function GET(req, res) {

    const {username, password} = urltoParams(req.url)

    const response = await executeQuery({
        query: `SELECT * FROM USERS WHERE username = "${username}"`
    });
    
    if(response && response.length > 0){
    const userpass = response[0].password;
    const success = userpass == password;
    return Response.json({success})
    }
    else{
        return Response.json(false)
    }
}