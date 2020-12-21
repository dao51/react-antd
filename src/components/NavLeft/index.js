import React from 'react'  // 导入react

export default class NavLeft extends React.Component {
    render() {
        // var redWord = {
        //     color: 'red'
        // }
        // 还可在行内设置<div style={redWord}>
        return (
            <div style={{ color: 'red' }}>
                NavLeft
            </div>
        );
    }
}