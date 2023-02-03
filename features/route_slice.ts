import { StateCreator } from 'zustand'

export interface RouteState {
  actualRoute: string
  setActualRoute: (route: string) => void
}

export const createRouteSlice: StateCreator<RouteState, [], []> = (set) => ({
  actualRoute: '/',
  setActualRoute: (route: string) => set(() => ({ actualRoute: route })),
})
