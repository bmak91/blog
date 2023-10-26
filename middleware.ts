import { middleware as nextPubMiddleware } from "@bmak91/nextpub";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = nextPubMiddleware(req);
  if (res) return res;

  return NextResponse.next();
}
