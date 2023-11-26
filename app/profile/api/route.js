import executeQuery from '../../../lib/db'
import { urltoParams } from '../../../lib/utils'

export async function GET(req, res) {
    const {username} = urltoParams(req.url)
    const users = await executeQuery({
        query: `SELECT * FROM USERS WHERE USERNAME ="${username}"`
    });
    return Response.json(users)
}