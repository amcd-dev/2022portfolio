import BagelNavBar from "./bagelNavBar";

export default function Layout({ children }) {
    return (
        <>
            <BagelNavBar />
            <main>{children}</main>
        </>
    )
}