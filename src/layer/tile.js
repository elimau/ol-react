import React from 'react'
import ol from 'openlayers'
import OLContainer from '../ol-container'

export default class Tile extends OLContainer {
  constructor (props) {
    super(props)
    this.layer = new ol.layer.Tile({
      visible: this.props.visible
    })
  }

  getChildContext () {
    return {
      layer: this.layer
    }
  }

  componentDidMount () {
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps (newProps) {
    this.layer.setVisible(newProps.visible)
  }

  componentWillUnmount () {
    this.context.map.removeLayer(this.layer)
  }
}

Tile.propTypes = {
  visible: React.PropTypes.bool
}

Tile.defaultProps = {
  visible: true
}

Tile.contextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}

Tile.childContextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Tile)
}
