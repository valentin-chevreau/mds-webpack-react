import axios from 'axios'
import React, { Component } from 'react'

import initialState from './initial-state'
import Results from './components/results'
import '../index.scss'

class Actus extends Component {
  constructor() {
    super()

    this.state = initialState
    this.getValue = this.searchResult.bind(this)
  }

  /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  getData(query) {
    const apiUrl = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&q=${query}`

    axios.get(apiUrl)
      .then((response) => {
        this.state.data = this.formatEvents(response.data.records)

        this.setState({
          data: this.formatEvents(response.data.records)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  searchResult(value) {
    this.getData(value)
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  render() {
    const { id, address } = this.props

    return (
      <div>
        <Results data={id, address} />
      </div>
    )
  }
}

export default Actus
