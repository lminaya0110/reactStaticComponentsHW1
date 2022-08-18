// class Header extends React.Component {
//     render() {
//         return (
//             <h1> Commence Dashboard Creation! </h1>
//         )
//     }
// }

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h3>Dashboard</h3>
                <ul>

                    <li>Widget</li>
                    <li>Reviews</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}

class Reviews extends React.Component {
    render() {
        return (
            <div>
                <h3>Reviews</h3>
                <p>1,281</p>
            </div>
        )
    }
}

class AvgRating extends React.Component {
    render() {
        return (
            <div>
                <h3>Average Rating</h3>
                <p>4.6</p>
            </div>
        )
    }
}

class SentAn extends React.Component {
    render() {
        return (
            <div>
                <h3>Sentiment Analysis</h3>
                <ul>
                    <li>960</li>
                    <li>122</li>
                    <li>321</li>
                </ul>
            </div>
        )
    }
}

class WebVisitors extends React.Component {
    render() {
        return (
            <div className="webVisitors">
                <h3>Website Visitors</h3>
                <p>821</p>
                <div className="webVisDiv"></div>
            </div>
        )
    }
}

class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <Reviews />
                <AvgRating />
                <SentAn />
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Stats />
                <WebVisitors />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
)