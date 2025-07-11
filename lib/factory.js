/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var constantFunction = require( '@stdlib/utils-constant-function' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var log1p = require( '@stdlib/math-base-special-log1p' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Bradford distribution with shape parameter `c`.
*
* @param {PositiveNumber} c - shape parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 5.0 );
* var y = cdf( 0.5 );
* // returns ~0.699
*
* y = cdf( 1.0 );
* // returns 1.0
*/
function factory( c ) {
	if ( isnan( c ) || c <= 0.0 ) {
		return constantFunction( NaN );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Bradford distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 0.5 );
	* // returns <number>
	*/
	function cdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= 0.0 ) {
			return 0.0;
		}
		if ( x >= 1.0 ) {
			return 1.0;
		}
		return log1p( c * x ) / log1p( c );
	}
}


// EXPORTS //

module.exports = factory;
