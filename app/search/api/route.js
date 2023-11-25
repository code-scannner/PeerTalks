import { urltoParams } from '@/lib/utils'
import executeQuery from '../../../lib/db'

export async function GET(req, res) {
    const {username,search} = urltoParams(req.url);
    const response = await executeQuery({
        query:`SELECT * FROM USERS WHERE USERNAME LIKE "%${search}%" AND USERNAME<>"${username}" AND USERNAME NOT IN (
            SELECT CONTACTNAME FROM CONTACT WHERE USERNAME = "${username}"
        )`
    })
    
    return Response.json({users : response});
}

export async function POST(req, res){
    
    const body = await req.json();
    const username = body.username;
    const contactuser = body.contactuser;
    const response = await executeQuery(
        {
            query : `INSERT INTO CONTACT VALUES("${username}", "${contactuser}", curdate())`
        }
    );

    return Response.json(response);

}