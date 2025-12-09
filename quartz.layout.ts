import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Darkmode(),
    Component.Breadcrumbs(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/SibylYang55",
      LinkedIn: "https://www.linkedin.com/in/lily-yang-81ba9218b/",
      Twitter: "https://twitter.com/xiho_yang",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.Search(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.RecentNotes({
      title: "Recent Update",
      limit: 5
    })),
    Component.DesktopOnly(Component.Explorer({
      title: "Explore More",
    })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        linkDistance: 50,
      },
      globalGraph: {
        linkDistance: 50,
      },
    }),
    Component.Backlinks(),
    Component.TagList(),
    Component.MobileOnly(Component.RecentNotes({
      title: "Most Recent",
      limit: 5
    })),
    Component.MobileOnly(Component.Explorer({
      title: "Explore More",
      useSavedState: true,
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      },
    })),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.RecentNotes({
      title: "Recent Update",
      limit: 8
    })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        linkDistance: 50,
      },
      globalGraph: {
        linkDistance: 50,
      },
    }),
  ],
}

Component.Explorer({
  sortFn: (a, b) => {
    if ((!a.file && !b.file) || (a.file && b.file)) {
      return a.displayName.localeCompare(b.displayName)
    }
    if (a.file && !b.file) {
      return -1
    } else {
      return 1
    }
  },
})
