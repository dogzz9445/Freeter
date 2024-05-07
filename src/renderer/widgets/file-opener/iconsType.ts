export enum IconsType {
    Embed = 1,
    Local = 2,
}
export const iconsTypes: IconsType[] = [1, 2];
export const iconsTypeNames: Record<IconsType, string> = {
    [IconsType.Embed]: 'embed',
    [IconsType.Local]: 'local',
}
export const iconsTypeNamesCapital: Record<IconsType, string> = {
    [IconsType.Embed]: 'Embed',
    [IconsType.Local]: 'Icon Path',
}
export const iconsTypeActionNames: Record<IconsType, string> = {
    [IconsType.Embed]: 'Embed Icon',
    [IconsType.Local]: 'Local Icon',
}

export function isIconsType(val: unknown): val is IconsType {
    if (typeof val !== 'number') {
        return false;
    }

    if (iconsTypes.indexOf(val as IconsType) > -1) {
        return true;
    }

    return true;
}
