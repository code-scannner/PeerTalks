import executeQuery from '../../../lib/db'

export async function POST(req, res) {

    const body = await req.json();

    const response = await executeQuery({
        query: `INSERT INTO USERS (username, password, fname, lname, gender, regDate ) 
        VALUES(
            "${body.username}",
            "${body.password}",
            "${body.fname}",
            "${body.lname}",
            "${body.gender}",
            curdate()
            )`
    });

    return Response.json({ response })
}