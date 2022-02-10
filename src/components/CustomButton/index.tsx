import { Button } from "./styles";

interface CustomButtonProps {
    children: React.ReactNode
}

export function CustomButton({ children }: CustomButtonProps) {
    return (
        <Button type="button">
            {children}
        </Button>
    );
}