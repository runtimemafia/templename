import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const pages = await prisma.pages.findMany({
      include: {
        Pages_blocks: true,
      },
    });

    const enrichedPages = await Promise.all(
      pages.map(async (page) => {
        const blocks = await Promise.all(
          page.Pages_blocks.map(async (block) => {
            const collectionName = block.collection;

            if (collectionName && (prisma as any)[collectionName]) {
              try {
                const blockData = await (prisma as any)[
                  collectionName
                ].findUnique({
                  where: { id: block.item ? parseInt(block.item) : 0 },
                  include:
                    collectionName === "partner_blocks"
                      ? {
                          partner_blocks_text_field: {
                            include: {
                              text_field: true,
                            },
                          },
                          partner_blocks_cards: { include: { cards: true } },
                        }
                      : collectionName === "testimonials_blocks"
                      ? {
                          testimonials_blocks_testimonials_carousel: {
                            include: {
                              testimonials_carousel: true,
                            },
                          },
                        }
                      : collectionName === "blog_page"
                      ? {
                          blog_page_blogs: {
                            include: {
                              blogs: true,
                            },
                          },
                        }
                      : collectionName === "pricing_page"
                      ? {
                          pricing_page_pricing_cards: {
                            include: { pricing_cards: true },
                          },
                        }
                      : collectionName === "footer"
                      ? {
                          footer_upcoming_event: {
                            include: { upcoming_event: true },
                          },
                        }
                      : collectionName === "kuthiranmala_page"
                      ? {
                          kuthiranmala_page_kuthiranmala_card: {
                            include: { kuthiranmala_card: true },
                          },
                          kuthiranmala_events: true,
                          kuthiranmala_page_kuthiranmala_contact: {
                            include: { kuthiranmala_contact: true },
                          },
                          kuthiranmala_social: true,
                        }
                      : undefined,
                });

                return { ...block, data: blockData };
              } catch (err) {
                console.error(
                  `Error fetching data from ${collectionName}:`,
                  err
                );
                return {
                  ...block,
                  data: null,
                  error: `Failed to fetch from ${collectionName}`,
                };
              }
            }

            return { ...block, data: null, error: "Invalid collection name" };
          })
        );

        return { ...page, blocks };
      })
    );

    return NextResponse.json(enrichedPages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    );
  }
}
