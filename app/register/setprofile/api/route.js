import executeQuery from '../../../lib/db'

export async function POST(req, res) {
//picture 
    const body = await req.json();
    const response = await executeQuery({
        query: `UPDATE TABLE USERS SET (FNAME,LNAME,GENDER,BIO)`
    });
    
    if(!response.error){
        response.username = body.username;
        response.password = body.password;
        return Response.json(response);
    }
    console.log(response);

    return Response.json(response)
}