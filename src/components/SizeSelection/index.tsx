import { useRef } from "react";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";

export function SizeSelection() {
    const { changeProductSize } = useCart();

    const button38 = useRef<HTMLButtonElement>(null);
    const button39 = useRef<HTMLButtonElement>(null);
    const button40 = useRef<HTMLButtonElement>(null);
    const button41 = useRef<HTMLButtonElement>(null);
    const button42 = useRef<HTMLButtonElement>(null);

    function handleClick(id: number, event: React.MouseEvent<HTMLButtonElement>) {
        changeProductSize(id);

        if (button38 && button38.current) button38.current.className = "not-active";
        if (button39 && button39.current) button39.current.className = "not-active";
        if (button40 && button40.current) button40.current.className = "not-active";
        if (button41 && button41.current) button41.current.className = "not-active";
        if (button42 && button42.current) button42.current.className = "not-active";

        event.currentTarget.className = "selected";
    }

    return (
        <Container>
            <button className="test" type="button" ref={button38} onClick={(e) => handleClick(38, e)}>38</button>
            <button ref={button39} onClick={(e) => handleClick(39, e)}>39</button>
            <button ref={button40} onClick={(e) => handleClick(40, e)}>40</button>
            <button ref={button41} onClick={(e) => handleClick(41, e)}>41</button>
            <button ref={button42} onClick={(e) => handleClick(42, e)}>42</button>
        </Container>
    );
}