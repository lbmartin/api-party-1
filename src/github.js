import React, { Component } from 'react'
import './github.css'

class Github extends Component {
    render() {
        return (
            <div className="github">
                <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="Github Logo" />
                <form>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <button type="submit">Look up github user</button>
                    </div>
                </form>
            </div>
        )
    }


}

export default Github