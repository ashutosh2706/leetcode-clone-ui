export interface UserProfileData {
    userId?: number;
    username: string;
    email: string;
    avatarUrl: string;
    // optional fields
    displayName?: string;
    work?: string;
    location?: string;
    education?: string;
    url?: string;
    githubHandle?: string;
}