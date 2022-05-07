import React from 'react'

type PersonProps = {
    person: {
        firstName: string;
        lastName: string;
    }
}

export const Person = ({ person }: PersonProps) => {
    return (
        <h1>Hello {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}</h1>
    )
}
