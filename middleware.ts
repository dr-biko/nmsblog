import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const previewToken = request.cookies.get("io.prismic.preview")?.value

  // If no preview token, continue with normal request
  if (!previewToken) {
    return NextResponse.next()
  }

  // If there's a preview token, check if the URL has a token parameter
  const url = request.nextUrl.clone()
  const hasTokenParam = url.searchParams.has("token")

  // If already has token param, continue
  if (hasTokenParam) {
    return NextResponse.next()
  }

  // Otherwise, add the token to the URL
  url.searchParams.set("token", previewToken)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

