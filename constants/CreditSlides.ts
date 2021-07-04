import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler"
import CardFlip from 'react-native-card-flip';
import { StyleSheet } from "react-native";

export type CreditSlideContent = {
    front: string,
    back: string,
    id: number
}

export const slides: CreditSlideContent[] = [
    {
        front: "Jobs",
        back: "Many employers check your credit as part of their screening process",
        id: 1
    },
    {
        front: "Stress",
        back: "The stress of strained finances affects health, wellness, and relationships",
        id: 2
    },
    {
        front: "Transportation",
        back: "Interest rates of 25% to obtain loans for older, sub standard models is typical. Auto insurance claims are higher for drivers with poor credit.",
        id: 3,
    },
    {
        front: "Rental Housing",
        back: "Desirable rentals, including those designated as 'affordable housing' units, require good credit. Safety, health, quality schools and neighborhood amenities are all linked to housing.",
        id: 4,
    },
    {
        front: "Retirement",
        back: "Retirement funds are often (if available) sacrificed.",
        id: 5,
    },
    {
        front: "Access to Credit",
        back: "Once the no savings/ poor credit cycle starts, consumers are either shut out of credit markets or charged exorbitant rates to perpetuate the cycle.",
        id: 6,
    },
    {
        front: "Home Ownership",
        back: "A good credit record and some savings are needed to access this key component of wealth building in the US.",
        id: 7,
    },
    {
        front: "Health",
        back: "Paycheck to paycheck workers can't afford to miss a day of work to go to the doctor/dentist. Even modest co-pays can be a burden.",
        id: 8
    }
]

