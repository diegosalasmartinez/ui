import { create } from 'zustand'
import { createRouteSlice, RouteState } from '@/features/route_slice'
import { createThemeSlice, ThemeState } from '@/features/theme_slice'

export const useBoundStore = create<RouteState & ThemeState>()((...a) => ({
  ...createRouteSlice(...a),
  ...createThemeSlice(...a),
}))
