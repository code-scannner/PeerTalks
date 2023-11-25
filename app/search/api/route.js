import { urltoParams } from '@/lib/utils'
import executeQuery from '../../../lib/db'

export async function GET(req, res) {
    const {username,search} = urltoParams(req.url);
    const response = await executeQuery({
        query:`SELECT * FROM USERS WHERE USERNAME LIKE "%${search}%" AND USERNAME<>"${username}"`
    })
    
    return Response.json({users : response});
}