
import {Container, Header, UserWrapper, UserData, LogoutButton, LogoutIcon} from "./styles";

export function Home() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserData></UserData>
                    <LogoutButton>
                        <LogoutIcon></LogoutIcon>
                    </LogoutButton>
                </UserWrapper>
            </Header>
        </Container>
    );
}


