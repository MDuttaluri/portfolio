export function isElementOnScreen(elementRef){
    if (!elementRef)
        return;
    let rect = elementRef.current.getBoundingClientRect();
    let y = rect.y;
    if (y >= 0)
        return true
    return false
}