import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.pages.findMany();
    // console.log(data, "asdfa");
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
// import { NextResponse } from "next/server";
// import prisma from "../../../lib/prisma";
// import type { NextApiRequest, NextApiResponse } from "next";

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     try {
//       const journal = await prisma.user.findMany();

//       return Response.json(journal);
//     } catch (error) {
//       console.error(error);
//       return new NextResponse("Internal Server Error", { status: 500 });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     return new NextResponse("Method Not Allowed", { status: 405 });
//   }

//   await prisma.$disconnect();
// }

// export { handler as GET };
