import isArray from 'utils/isArray';

export default function Attribute$updateCheckboxName () {
	var node, value;

	node = this.node;
	value = this.value;

	if ( !isArray( value ) ) {
		node.checked = ( value == node._ractive.value );
	} else {
		node.checked = ( value.indexOf( node._ractive.value ) !== -1 );
	}
}
