import Link from "next/link";
import { Button } from "./styles";

interface CustomButtonProps {
    children: React.ReactNode;
    linkTo?: string;
    onClick?: () => void;
}

export function CustomButton({ children, linkTo, onClick }: CustomButtonProps) {
    return (
        <Link href={`${linkTo}`}>
            <Button type="button" onClick={onClick}>
                {children}
            </Button>
        </Link>
    );
}