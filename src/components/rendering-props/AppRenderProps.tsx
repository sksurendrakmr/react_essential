import React from 'react'
import { User } from './user'

/**
 * Why??
 * To share the functionality between react component.
 */

export const AppRenderProps = () => {
    return (
        <div>
            AppRenderProps
            <User render={(isLoggedIn) => isLoggedIn ? "Suri" : "Guest"} />
        </div>
    )
}
