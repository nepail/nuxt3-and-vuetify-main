export const useCardData = (props) => {

    const route = useRoute()

    return { route, ...props }
}