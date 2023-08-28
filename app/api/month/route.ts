import { NextResponse } from "next/server";
import { delay } from "@/app/utils/utils";

import data from "@/app/data.json";

export async function GET(req: Request) {
    await delay(500);
    const month = data.periods[0].graph.month;

    return NextResponse.json(month);
}
