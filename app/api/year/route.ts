import { NextResponse } from "next/server";
import { delay } from "@/app/utils/utils";

import data from "@/app/data.json";

export async function GET(req: Request) {
    await delay(500);
    const year = data.periods[0].graph.year;

    return NextResponse.json(year);
}
