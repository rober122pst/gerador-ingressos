interface InputTextType extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

export function InputText({ id, label, ...props }: InputTextType) {
    return (
        <div>
            <label className="txt-body text-sm" htmlFor={id}>
                {label}
            </label>
            <input
                className="bg-input border-input-stroke placeholder:text-input-placeholder text-brand-light h-12 w-full rounded-lg border px-4"
                id={id}
                {...props}
            />
        </div>
    );
}
