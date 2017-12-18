export type Ware = (ctx: any, next: () => any) => any

export function compose(wares: Ware[]) {
    if (wares.length === 1) {
        return ctx => wares[0](ctx, () => ctx)
    }
    return ctx => wares[0](ctx, () => compose(wares.slice(1))(ctx))
}
