import { NextRequest, NextResponse } from "next/server";
import { middleware as nextPubMiddleware } from "nextpub";

export function middleware(req: NextRequest) {
  const res = nextPubMiddleware(req);
  if (res) return res;

  return NextResponse.next();
}
