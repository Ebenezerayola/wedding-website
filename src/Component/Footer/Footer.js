import { ColorCode, FooterStyle, PoweredBy, RsvP } from "../Style"


const Footer = () => {
    return(
        <>
            <FooterStyle>
                <ColorCode>
                <p>Colour of the day: White, Gold & Whine</p></ColorCode>
                <RsvP>
                    <p>RSVP</p>
                    <p>Adebare 08034124062</p>
                    <p>Ogooluwa 09022033126</p>
                </RsvP>
                <PoweredBy>
                    <p>Powered by</p>
                </PoweredBy>
            </FooterStyle>
        </>
    )
}

export default Footer