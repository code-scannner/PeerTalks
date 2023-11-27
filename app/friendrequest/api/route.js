import { urltoParams } from '@/lib/utils';
import executeQuery from '../../../lib/db'

export async function GET(req, res) {
    const {username} = urltoParams(req.url);
    const users = await executeQuery({
        query: `SELECT * FROM USERS WHERE USERNAME IN (
            SELECT SENDER FROM FRIENDREQUEST WHERE RECEIVER = "${username}"
        )`
    });

    return Response.json(users);
}