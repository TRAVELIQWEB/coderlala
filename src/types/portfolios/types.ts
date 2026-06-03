import type { ElementType } from "react";

export type CategoryId =
    | "all"
    | "wellness"
    | "healthcare"
    | "creative"
    | "beauty"
    | "ecommerce";

export interface Project {
    title: string;
    category: Exclude<CategoryId, "all">;
    desc: string;
    descFull?: string;
    tech: string[];
    icon: ElementType;
    color: string;
    stats: string;
    liveUrl?: string;
    features?: string[];
    challenge?: string;
    solution?: string;
    result?: string;
}

export interface Category {
    id: CategoryId;
    label: string;
    icon: ElementType;
}
