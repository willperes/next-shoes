import Link from "next/link";
import { Button } from "./styles";

interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function CustomButton({ children, onClick }: CustomButtonProps) {
    return (
        
            <Button onClick={onClick}>
                {children}
            </Button>
        
    );
}