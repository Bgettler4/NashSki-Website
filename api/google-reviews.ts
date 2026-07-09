type VercelRequest = {
  method?: string;
};

type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(body: unknown): void;
  end(body?: string): void;
};

interface GoogleReview {
  rating?: number;
  text?: { text?: string; languageCode?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
}

interface GooglePlaceResponse {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
}

function getRequiredEnv(name: string): string | null {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : null;
}

function getPlaceResourceName(placeId: string): string {
  const trimmed = placeId.trim();
  const rawId = trimmed.startsWith("places/")
    ? trimmed.slice("places/".length)
    : trimmed;

  return `places/${encodeURIComponent(rawId)}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = getRequiredEnv("GOOGLE_PLACES_API_KEY");
  const placeId = getRequiredEnv("GOOGLE_PLACE_ID");

  if (!apiKey || !placeId) {
    res.status(503).json({ error: "Google Reviews not configured" });
    return;
  }

  try {
    const googleResponse = await fetch(
      `https://places.googleapis.com/v1/${getPlaceResourceName(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
        },
      },
    );

    if (!googleResponse.ok) {
      const body = await googleResponse.text();
      console.error("Google Places API error", {
        status: googleResponse.status,
        body,
      });
      res.status(502).json({ error: "Failed to fetch from Google Places API" });
      return;
    }

    const data = (await googleResponse.json()) as GooglePlaceResponse;

    res.setHeader(
      "Cache-Control",
      "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
    );
    res.status(200).json({
      name: data.displayName?.text ?? "NashSki Rentals",
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? []).map((review) => ({
        authorName: review.authorAttribution?.displayName ?? "Google user",
        authorPhotoUrl: review.authorAttribution?.photoUri ?? null,
        authorProfileUrl: review.authorAttribution?.uri ?? null,
        rating: review.rating ?? 0,
        text: review.text?.text ?? "",
        relativeTime: review.relativePublishTimeDescription ?? "",
      })),
    });
  } catch (error) {
    console.error("Unexpected error fetching Google reviews", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
