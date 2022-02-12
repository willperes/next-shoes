import { useRef } from "react";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";

export function SizeSelection() {
    const { changeProductSize } = useCart();

    const XS = useRef<HTMLButtonElement>(null);
    const S = useRef<HTMLButtonElement>(null);
    const M = useRef<HTMLButtonElement>(null);
    const L = useRef<HTMLButtonElement>(null);
    const XL = useRef<HTMLButtonElement>(null);

    function handleClick(size: string, event: React.MouseEvent<HTMLButtonElement>) {
        changeProductSize(size);

        if (XS && XS.current) XS.current.className = "not-active";
        if (S && S.current) S.current.className = "not-active";
        if (M && M.current) M.current.className = "not-active";
        if (L && L.current) L.current.className = "not-active";
        if (XL && XL.current) XL.current.className = "not-active";

        event.currentTarget.className = "selected";
    }

    return (
        <Container>
            <button ref={XS} onClick={(e) => handleClick('XS', e)}>XS</button>
            <button ref={S} onClick={(e) => handleClick('S', e)}>S</button>
            <button ref={M} onClick={(e) => handleClick('M', e)}>M</button>
            <button ref={L} onClick={(e) => handleClick('L', e)}>L</button>
            <button ref={XL} onClick={(e) => handleClick('XL', e)}>XL</button>
        </Container>
    );
}