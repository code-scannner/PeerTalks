import { authenticate, urltoParams } from '@/lib/utils';
import executeQuery from '../../../lib/db'

export async function GET(req, res) {
    const {user, pass} = urltoParams(req.url);
    if(!authenticate(user, pass)){
        return Response.json({success: false});
    }

    const users = await executeQuery({
        query: `SELECT FNAME FROM USERS WHERE USERNAME IN (SELECT CONTACTNAME FROM CONTACT WHERE USERNAME ="${user}"`
    });

    return Response.json({ users })
}