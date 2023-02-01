import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

import { About } from "../screens/About/About";
import { Project } from "../screens/Project/Project";

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 80,
                    backgroundColor: '#121214',
                    borderTopWidth: 2,
                }
            }}
        >
            <Screen 
                name='about'
                component={About}
                options={{
                    tabBarLabel: 'About',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons 
                            name='account-circle'
                            color={color}
                            size={50}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16,
                        marginBottom: 4,
                        fontWeight: "bold"
                    }
                }}
            />

            <Screen 
                name='project'
                component={Project}
                options={{
                    tabBarLabel: 'Project',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons 
                            name='info'
                            color={color}
                            size={50}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16,
                        marginBottom: 4,
                        fontWeight: "bold"
                    },
                    title: 'Skills',
                    headerStyle: {
                        backgroundColor: '#121214',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Navigator>
    )
}