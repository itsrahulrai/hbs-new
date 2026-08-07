import { primaryNav, type MenuColumn, type MenuLink } from "@/data/navigation";

export type ResolvedSubPage = {
  link: MenuLink;
  column: MenuColumn;
  slug: string;
};

/** Finds every link across a category's columns, keyed by its final URL segment. */
export function getCategorySlugs(categoryLabel: string): string[] {
  const item = primaryNav.find((nav) => nav.label === categoryLabel);
  const links = (item?.columns ?? []).flatMap((column) => column.links);
  return links.map((link) => link.href.split("/").filter(Boolean).pop() as string);
}

export function resolveSubPage(
  categoryLabel: string,
  slug: string
): ResolvedSubPage | null {
  const item = primaryNav.find((nav) => nav.label === categoryLabel);
  for (const column of item?.columns ?? []) {
    for (const link of column.links) {
      const linkSlug = link.href.split("/").filter(Boolean).pop();
      if (linkSlug === slug) {
        return { link, column, slug };
      }
    }
  }
  return null;
}
