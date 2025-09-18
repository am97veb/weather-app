import { toCurrentWeather } from "../routes"
import { Logo } from "./Logo"
import { BarWrapper, NavigationItem, NavigationList, NavigationLink } from "./styled"

export const Navigation = () => (
    <BarWrapper>
        <Logo/>
        <NavigationList>
            <NavigationItem>
                <NavigationLink to={toCurrentWeather()}>
                    current weather
                </NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to={toCurrentWeather()}>
                    weather forecast
                </NavigationLink>
            </NavigationItem>
        </NavigationList>
    </BarWrapper>
)