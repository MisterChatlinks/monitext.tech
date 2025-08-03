import { useCallback } from "preact/hooks";

const PrefList = [
    "theme",
    "hasAccount",
] as const;

export type PrefKey = typeof PrefList[number];

export const PrefRecord: Record<PrefKey, PrefKey> = Object.fromEntries(
    PrefList.map(el => [el, el])
) as Record<PrefKey, PrefKey>;


type prefValues = string | boolean | number | object;

export function usePreference() {

    const set = useCallback((key: PrefKey, value: prefValues): void => {
        try {
            // Sérialisation des données
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage item for key "${key}":`, error);
        }
    }, []);

    const get = useCallback((key: PrefKey): prefValues | null => {
        try {
            const item = localStorage.getItem(key);
            if (!item) {
                return null;
            }
            // Tentative de désérialisation
            try {
                return JSON.parse(item);
            } catch (e) {
                // Si la désérialisation échoue, on retourne la valeur brute
                return item;
            }
        } catch (error) {
            console.error(`Error getting localStorage item for key "${key}":`, error);
            return null;
        }
    }, []);

    const del = useCallback((key: PrefKey): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error deleting localStorage item for key "${key}":`, error);
        }
    }, []);

    return { set, get, del };
}
