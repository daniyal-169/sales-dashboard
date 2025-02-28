// for Employee
export interface Employee {
    id: number
    name: string
    email: string
    role: string
    supervisor: string
    commission: string
    image: string
}

// for ComponentCardProps
export interface ComponentCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    desc?: string;
}

// for Hierarchy Members
export interface TeamMember {
    name: string;
    role: string;
    image: string;
}


// for All Sales Transaction Table
export interface SalesTransaction {
    id: number
    date: string
    amount: string
    salesRep: string
    commissionEarned: string
}

// for User profile Edit
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
    showCloseButton?: boolean; // New prop to control close button visibility
    isFullscreen?: boolean; // Default to false for backwards compatibility
}

// for Avatar
export interface AvatarProps {
    src: string; // URL of the avatar image
    alt?: string; // Alt text for the avatar
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"; // Avatar size
    status?: "online" | "offline" | "busy" | "none"; // Status indicator
}
