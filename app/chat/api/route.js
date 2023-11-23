import executeQuery from '../../../lib/db'

export async function GET(req, res) {
    
    const users = await executeQuery({
        query: 'SELECT * FROM USERS'
    });

    return Response.json({ users })
}