import { toCurrentWeather } from "../routes"
import { Logo } from "./Logo"
import { NavigationBar, NavigationItem, NavigationList, NavigationLink } from "./styled"

export const Navigation = () => (
    <NavigationBar>
        <Logo/>
        <NavigationList>
            <NavigationItem>
                <NavigationLink to={toCurrentWeather()}>
                    current weather
                </NavigationLink>
            </NavigationItem>
        </NavigationList>
    </NavigationBar>
)