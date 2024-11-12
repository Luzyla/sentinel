import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/authOptions";
import { getServerSession } from "next-auth";

export async function GET() {
    const session = await getServerSession(authOptions);

    if(!session) {
        return NextResponse.json({error: "Not autorized"}, {status: 400})
    }

    return NextResponse.json({success: session}, {status: 200})
};