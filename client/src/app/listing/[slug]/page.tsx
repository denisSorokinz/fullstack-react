import { fetchListingDetails } from "@/lib";
import { default as Content } from "@/containers/SingleListing";

export default async function SingleListing({
  params,
}: {
  params: { slug?: string };
}) {
  if (!params.slug) return <h1>Please specify listing slug</h1>;

  const listing = await fetchListingDetails(params.slug);

  return <Content listing={listing!} />;
}
