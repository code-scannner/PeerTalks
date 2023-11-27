import { urltoParams } from '@/lib/utils';
import executeQuery from '../../../lib/db'

export async function GET(req, res) {
    const { username } = urltoParams(req.url);
    const users = await executeQuery({
        query: `SELECT * FROM USERS WHERE USERNAME IN (
            SELECT SENDER FROM FRIENDREQUEST WHERE RECEIVER = "${username}"
        )`
    });

    return Response.json(users);
}
export async function POST(req, res) {
    const body = await req.json();

    const sender = body.sender;
    const receiver = body.receiver;
    const accepted = body.accepted;
    
    const users = await executeQuery({
        query: `DELETE FROM FRIENDREQUEST WHERE
        (SENDER = "${sender}" AND RECEIVER = "${receiver}") OR
        (SENDER = "${receiver}" AND RECEIVER = "${sender}")
        `
    });

    if(users.error){
        console.log(error);
        return Response.json(users);
    }
    
    let msg = "";
    if (!accepted) {
        msg = "Declined Your Friend Request"
    }
    else {
        msg = "Accepted Your Friend Request"
    }

    const noti = await executeQuery({
        query: `INSERT INTO NOTIFICATIONS VALUES("${receiver}", "${sender}", "${msg}", now())`
    });
    
    return Response.json(noti);
}