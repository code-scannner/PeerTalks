import executeQuery from '../../../lib/db'
import { urltoParams } from '../../../lib/utils'

export async function GET(req, res) {

    const params = urltoParams(req.url)

    const response = await executeQuery({
        query: `SELECT * FROM USERS WHERE username = "${params.username}" LIMIT 1`
    });

    const userpass = response[0].password;
    
    const success = userpass == params.password;

    return Response.json({success})
}