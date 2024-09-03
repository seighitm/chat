import {forwardRef} from "react";
import {PolymorphicForwardRefExoticComponent, PolymorphicPropsWithoutRef,} from "@/types/shared/reactPolymorphicTypes.ts";
import {cn} from "@/utils";
import {cva, type VariantProps} from "class-variance-authority";
import {LoaderIcon} from "@/assets/icons/Icons";

export const HeadingDefaultElement = "button";

export type HeadingOwnProps = {
    color?: string;
    isLoading?: boolean;
};

export type HeadingProps<
    T extends React.ElementType = typeof HeadingDefaultElement,
> = PolymorphicPropsWithoutRef<HeadingOwnProps, T>;

export const buttonVariants = cva(
    "border-border active:translate-y-[0.8px] transion-all duration-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends HeadingOwnProps, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const voidElements = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);

export const Button = forwardRef(
    <T extends React.ElementType = typeof HeadingDefaultElement>(
        {
            as,
            color,
            style,
            className,
            isLoading = false,
            children,
            variant,
            size,
            asChild = false,
            ...restProps
        }: HeadingProps<T> & ButtonProps,
        ref: React.ForwardedRef<Element>,
    ) => {
        const Element: React.ElementType = as || HeadingDefaultElement;
        const isVoidElement = voidElements.has(Element as string);

        const ch = !isVoidElement ? (
            <>
                {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin"/>}
                {children}
            </>
        ) : null;

        return (
            <Element
                ref={ref}
                style={{color, ...style}}
                {...restProps}
                className={cn(buttonVariants({variant, size}), className)}
            >
                {ch}
            </Element>
        );
    },
) as PolymorphicForwardRefExoticComponent<HeadingOwnProps & ButtonProps, typeof HeadingDefaultElement>;

export default Button;
