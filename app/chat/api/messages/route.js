import { authenticate, urltoParams } from '@/lib/utils';
import executeQuery from '@/lib/db'

export async function GET(req, res) {

    return Response.json([
        {
            is_sender: false,
            message: "hello"
        }
    ])
}
export async function POST(req, res) {

    const body = await req.json();
    console.log(body.message);

    return Response.json(
        {
            is_sender: true,
            message: body.message
        }
    )
}