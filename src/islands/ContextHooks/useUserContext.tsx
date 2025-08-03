import { createGenericContext } from "#utils/createGenericContext.tsx";

export const {
    Provider: UserAuthStateProvider,
    useValue: useUserAuthStateValue,
    useSetValue: useSetUserAuthStateValue,
    useAsState: useUserCtxtAsState,
} = createGenericContext(false);

export const {
    Provider: UserProfileProvider,
    useValue: useUserProfileValue,
    useSetValue: useSetUserProfileValue,
    useAsState: useUserProfileCtxAsState,
} = createGenericContext({
    id: "",
    email: "",
    username: "",
    avatar_url: "",
});