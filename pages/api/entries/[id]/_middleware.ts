import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { id } = req.page.params as { id: string };
  const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
  if (!checkMongoIDRegExp.test(id))
    return new Response(JSON.stringify({ message: "no valid id " + id }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  return NextResponse.next();
}
