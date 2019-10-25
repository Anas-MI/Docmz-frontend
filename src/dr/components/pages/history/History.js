import React, { Component } from 'react'
import HistoryCard from '../../objects/card/HistoryCard'

export default class History extends Component {
  render() {
    return (
      <div className={componentClass}>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    )
  }
}

const componentClass = "p-history"