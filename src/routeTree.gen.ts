/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IntroductionListLazyImport = createFileRoute('/introduction-list')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IntroductionListLazyRoute = IntroductionListLazyImport.update({
  path: '/introduction-list',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/introduction-list.lazy').then((d) => d.Route),
)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/introduction-list': {
      id: '/introduction-list'
      path: '/introduction-list'
      fullPath: '/introduction-list'
      preLoaderRoute: typeof IntroductionListLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/introduction-list': typeof IntroductionListLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/introduction-list': typeof IntroductionListLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/introduction-list': typeof IntroductionListLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/introduction-list'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/introduction-list'
  id: '__root__' | '/' | '/introduction-list'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  IntroductionListLazyRoute: typeof IntroductionListLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  IntroductionListLazyRoute: IntroductionListLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/introduction-list"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/introduction-list": {
      "filePath": "introduction-list.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
