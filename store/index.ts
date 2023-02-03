import { create } from 'zustand'
import { createRouteSlice, RouteState } from '@/features/route_slice'

export const useBoundStore = create<RouteState>()((...a) => ({
  ...createRouteSlice(...a),
}))
