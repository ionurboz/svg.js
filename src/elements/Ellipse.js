import {
  extend,
  nodeOrNew,
  register,
  wrapWithAttrCheck
} from '../utils/adopter.js'
import { proportionalSize } from '../utils/utils.js'
import { registerMethods } from '../utils/methods.js'
import SVGNumber from '../types/SVGNumber.js'
import Shape from './Shape.js'
import * as circled from '../modules/core/circled.js'

export default class Ellipse extends Shape {

  constructor ( node ) {

    super( nodeOrNew( 'ellipse', node ), node )

  }

  size ( width, height ) {

    var p = proportionalSize( this, width, height )

    return this
      .rx( new SVGNumber( p.width ).divide( 2 ) )
      .ry( new SVGNumber( p.height ).divide( 2 ) )

  }

}

extend( Ellipse, circled )

registerMethods( 'Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck( function ( width, height ) {

    return this.put( new Ellipse() ).size( width, height ).move( 0, 0 )

  } )
} )

register( Ellipse )
