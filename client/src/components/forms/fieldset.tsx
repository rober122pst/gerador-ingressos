export function Fieldset(props: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
    return <fieldset {...props}>{props.children}</fieldset>;
}

export function Legend({ legend, ...props }: React.HTMLAttributes<HTMLLegendElement> & { legend?: React.ReactNode }) {
    return (
        <legend className="flex items-center gap-3" {...props}>
            {props.children}
            {legend && <span className="txt-heading-sm">{legend}</span>}
        </legend>
    );
}
