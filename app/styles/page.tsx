import { buttonStyle } from './vanilla-extract.css';

export default function StylesPage() {
    return (
        <>
            <p>Vanilla Extract Test</p>
            <button className={buttonStyle}>Button with hover and focus style</button>
        </>
    );
};
