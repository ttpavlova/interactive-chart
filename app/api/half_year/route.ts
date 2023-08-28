import { NextResponse } from "next/server";
import { delay } from "@/app/utils/utils";

import data from "@/app/data.json";

export async function GET(req: Request) {
    await delay(500);
    const half_year = data.periods[0].graph.half_year;

    return NextResponse.json(half_year);
}
