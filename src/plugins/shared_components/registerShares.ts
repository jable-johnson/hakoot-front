import BaseIcon from '@/components/shared/bases/BaseIcon.vue'

const sharedComponents = [
    BaseIcon
]

export const registerSharedComponents = (app: any) => {
    sharedComponents.forEach((c: any) => {
        return app.component(c.name, c)
    })
}