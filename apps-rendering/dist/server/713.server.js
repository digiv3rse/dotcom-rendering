"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 51713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toFormData": () => (/* binding */ toFormData)
/* harmony export */ });
/* harmony import */ var fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40749);
/* harmony import */ var formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39951);



let s = 0;
const S = {
	START_BOUNDARY: s++,
	HEADER_FIELD_START: s++,
	HEADER_FIELD: s++,
	HEADER_VALUE_START: s++,
	HEADER_VALUE: s++,
	HEADER_VALUE_ALMOST_DONE: s++,
	HEADERS_ALMOST_DONE: s++,
	PART_DATA_START: s++,
	PART_DATA: s++,
	END: s++
};

let f = 1;
const F = {
	PART_BOUNDARY: f,
	LAST_BOUNDARY: f *= 2
};

const LF = 10;
const CR = 13;
const SPACE = 32;
const HYPHEN = 45;
const COLON = 58;
const A = 97;
const Z = 122;

const lower = c => c | 0x20;

const noop = () => {};

class MultipartParser {
	/**
	 * @param {string} boundary
	 */
	constructor(boundary) {
		this.index = 0;
		this.flags = 0;

		this.onHeaderEnd = noop;
		this.onHeaderField = noop;
		this.onHeadersEnd = noop;
		this.onHeaderValue = noop;
		this.onPartBegin = noop;
		this.onPartData = noop;
		this.onPartEnd = noop;

		this.boundaryChars = {};

		boundary = '\r\n--' + boundary;
		const ui8a = new Uint8Array(boundary.length);
		for (let i = 0; i < boundary.length; i++) {
			ui8a[i] = boundary.charCodeAt(i);
			this.boundaryChars[ui8a[i]] = true;
		}

		this.boundary = ui8a;
		this.lookbehind = new Uint8Array(this.boundary.length + 8);
		this.state = S.START_BOUNDARY;
	}

	/**
	 * @param {Uint8Array} data
	 */
	write(data) {
		let i = 0;
		const length_ = data.length;
		let previousIndex = this.index;
		let {lookbehind, boundary, boundaryChars, index, state, flags} = this;
		const boundaryLength = this.boundary.length;
		const boundaryEnd = boundaryLength - 1;
		const bufferLength = data.length;
		let c;
		let cl;

		const mark = name => {
			this[name + 'Mark'] = i;
		};

		const clear = name => {
			delete this[name + 'Mark'];
		};

		const callback = (callbackSymbol, start, end, ui8a) => {
			if (start === undefined || start !== end) {
				this[callbackSymbol](ui8a && ui8a.subarray(start, end));
			}
		};

		const dataCallback = (name, clear) => {
			const markSymbol = name + 'Mark';
			if (!(markSymbol in this)) {
				return;
			}

			if (clear) {
				callback(name, this[markSymbol], i, data);
				delete this[markSymbol];
			} else {
				callback(name, this[markSymbol], data.length, data);
				this[markSymbol] = 0;
			}
		};

		for (i = 0; i < length_; i++) {
			c = data[i];

			switch (state) {
				case S.START_BOUNDARY:
					if (index === boundary.length - 2) {
						if (c === HYPHEN) {
							flags |= F.LAST_BOUNDARY;
						} else if (c !== CR) {
							return;
						}

						index++;
						break;
					} else if (index - 1 === boundary.length - 2) {
						if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
							state = S.END;
							flags = 0;
						} else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
							index = 0;
							callback('onPartBegin');
							state = S.HEADER_FIELD_START;
						} else {
							return;
						}

						break;
					}

					if (c !== boundary[index + 2]) {
						index = -2;
					}

					if (c === boundary[index + 2]) {
						index++;
					}

					break;
				case S.HEADER_FIELD_START:
					state = S.HEADER_FIELD;
					mark('onHeaderField');
					index = 0;
					// falls through
				case S.HEADER_FIELD:
					if (c === CR) {
						clear('onHeaderField');
						state = S.HEADERS_ALMOST_DONE;
						break;
					}

					index++;
					if (c === HYPHEN) {
						break;
					}

					if (c === COLON) {
						if (index === 1) {
							// empty header field
							return;
						}

						dataCallback('onHeaderField', true);
						state = S.HEADER_VALUE_START;
						break;
					}

					cl = lower(c);
					if (cl < A || cl > Z) {
						return;
					}

					break;
				case S.HEADER_VALUE_START:
					if (c === SPACE) {
						break;
					}

					mark('onHeaderValue');
					state = S.HEADER_VALUE;
					// falls through
				case S.HEADER_VALUE:
					if (c === CR) {
						dataCallback('onHeaderValue', true);
						callback('onHeaderEnd');
						state = S.HEADER_VALUE_ALMOST_DONE;
					}

					break;
				case S.HEADER_VALUE_ALMOST_DONE:
					if (c !== LF) {
						return;
					}

					state = S.HEADER_FIELD_START;
					break;
				case S.HEADERS_ALMOST_DONE:
					if (c !== LF) {
						return;
					}

					callback('onHeadersEnd');
					state = S.PART_DATA_START;
					break;
				case S.PART_DATA_START:
					state = S.PART_DATA;
					mark('onPartData');
					// falls through
				case S.PART_DATA:
					previousIndex = index;

					if (index === 0) {
						// boyer-moore derrived algorithm to safely skip non-boundary data
						i += boundaryEnd;
						while (i < bufferLength && !(data[i] in boundaryChars)) {
							i += boundaryLength;
						}

						i -= boundaryEnd;
						c = data[i];
					}

					if (index < boundary.length) {
						if (boundary[index] === c) {
							if (index === 0) {
								dataCallback('onPartData', true);
							}

							index++;
						} else {
							index = 0;
						}
					} else if (index === boundary.length) {
						index++;
						if (c === CR) {
							// CR = part boundary
							flags |= F.PART_BOUNDARY;
						} else if (c === HYPHEN) {
							// HYPHEN = end boundary
							flags |= F.LAST_BOUNDARY;
						} else {
							index = 0;
						}
					} else if (index - 1 === boundary.length) {
						if (flags & F.PART_BOUNDARY) {
							index = 0;
							if (c === LF) {
								// unset the PART_BOUNDARY flag
								flags &= ~F.PART_BOUNDARY;
								callback('onPartEnd');
								callback('onPartBegin');
								state = S.HEADER_FIELD_START;
								break;
							}
						} else if (flags & F.LAST_BOUNDARY) {
							if (c === HYPHEN) {
								callback('onPartEnd');
								state = S.END;
								flags = 0;
							} else {
								index = 0;
							}
						} else {
							index = 0;
						}
					}

					if (index > 0) {
						// when matching a possible boundary, keep a lookbehind reference
						// in case it turns out to be a false lead
						lookbehind[index - 1] = c;
					} else if (previousIndex > 0) {
						// if our boundary turned out to be rubbish, the captured lookbehind
						// belongs to partData
						const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
						callback('onPartData', 0, previousIndex, _lookbehind);
						previousIndex = 0;
						mark('onPartData');

						// reconsider the current character even so it interrupted the sequence
						// it could be the beginning of a new sequence
						i--;
					}

					break;
				case S.END:
					break;
				default:
					throw new Error(`Unexpected state entered: ${state}`);
			}
		}

		dataCallback('onHeaderField');
		dataCallback('onHeaderValue');
		dataCallback('onPartData');

		// Update properties for the next call
		this.index = index;
		this.state = state;
		this.flags = flags;
	}

	end() {
		if ((this.state === S.HEADER_FIELD_START && this.index === 0) ||
			(this.state === S.PART_DATA && this.index === this.boundary.length)) {
			this.onPartEnd();
		} else if (this.state !== S.END) {
			throw new Error('MultipartParser.end(): stream ended unexpectedly');
		}
	}
}

function _fileName(headerValue) {
	// matches either a quoted-string or a token (RFC 2616 section 19.5.1)
	const m = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
	if (!m) {
		return;
	}

	const match = m[2] || m[3] || '';
	let filename = match.slice(match.lastIndexOf('\\') + 1);
	filename = filename.replace(/%22/g, '"');
	filename = filename.replace(/&#(\d{4});/g, (m, code) => {
		return String.fromCharCode(code);
	});
	return filename;
}

async function toFormData(Body, ct) {
	if (!/multipart/i.test(ct)) {
		throw new TypeError('Failed to fetch');
	}

	const m = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);

	if (!m) {
		throw new TypeError('no or bad content-type header, no multipart boundary');
	}

	const parser = new MultipartParser(m[1] || m[2]);

	let headerField;
	let headerValue;
	let entryValue;
	let entryName;
	let contentType;
	let filename;
	const entryChunks = [];
	const formData = new formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_1__/* .FormData */ .Ct();

	const onPartData = ui8a => {
		entryValue += decoder.decode(ui8a, {stream: true});
	};

	const appendToFile = ui8a => {
		entryChunks.push(ui8a);
	};

	const appendFileToFormData = () => {
		const file = new fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_0__/* .File */ .$B(entryChunks, filename, {type: contentType});
		formData.append(entryName, file);
	};

	const appendEntryToFormData = () => {
		formData.append(entryName, entryValue);
	};

	const decoder = new TextDecoder('utf-8');
	decoder.decode();

	parser.onPartBegin = function () {
		parser.onPartData = onPartData;
		parser.onPartEnd = appendEntryToFormData;

		headerField = '';
		headerValue = '';
		entryValue = '';
		entryName = '';
		contentType = '';
		filename = null;
		entryChunks.length = 0;
	};

	parser.onHeaderField = function (ui8a) {
		headerField += decoder.decode(ui8a, {stream: true});
	};

	parser.onHeaderValue = function (ui8a) {
		headerValue += decoder.decode(ui8a, {stream: true});
	};

	parser.onHeaderEnd = function () {
		headerValue += decoder.decode();
		headerField = headerField.toLowerCase();

		if (headerField === 'content-disposition') {
			// matches either a quoted-string or a token (RFC 2616 section 19.5.1)
			const m = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);

			if (m) {
				entryName = m[2] || m[3] || '';
			}

			filename = _fileName(headerValue);

			if (filename) {
				parser.onPartData = appendToFile;
				parser.onPartEnd = appendFileToFormData;
			}
		} else if (headerField === 'content-type') {
			contentType = headerValue;
		}

		headerValue = '';
		headerField = '';
	};

	for await (const chunk of Body) {
		parser.write(chunk);
	}

	parser.end();

	return formData;
}


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLzcxMy5zZXJ2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBzLXJlbmRlcmluZy8uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy91dGlscy9tdWx0aXBhcnQtcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZX0gZnJvbSAnZmV0Y2gtYmxvYi9mcm9tLmpzJztcbmltcG9ydCB7Rm9ybURhdGF9IGZyb20gJ2Zvcm1kYXRhLXBvbHlmaWxsL2VzbS5taW4uanMnO1xuXG5sZXQgcyA9IDA7XG5jb25zdCBTID0ge1xuXHRTVEFSVF9CT1VOREFSWTogcysrLFxuXHRIRUFERVJfRklFTERfU1RBUlQ6IHMrKyxcblx0SEVBREVSX0ZJRUxEOiBzKyssXG5cdEhFQURFUl9WQUxVRV9TVEFSVDogcysrLFxuXHRIRUFERVJfVkFMVUU6IHMrKyxcblx0SEVBREVSX1ZBTFVFX0FMTU9TVF9ET05FOiBzKyssXG5cdEhFQURFUlNfQUxNT1NUX0RPTkU6IHMrKyxcblx0UEFSVF9EQVRBX1NUQVJUOiBzKyssXG5cdFBBUlRfREFUQTogcysrLFxuXHRFTkQ6IHMrK1xufTtcblxubGV0IGYgPSAxO1xuY29uc3QgRiA9IHtcblx0UEFSVF9CT1VOREFSWTogZixcblx0TEFTVF9CT1VOREFSWTogZiAqPSAyXG59O1xuXG5jb25zdCBMRiA9IDEwO1xuY29uc3QgQ1IgPSAxMztcbmNvbnN0IFNQQUNFID0gMzI7XG5jb25zdCBIWVBIRU4gPSA0NTtcbmNvbnN0IENPTE9OID0gNTg7XG5jb25zdCBBID0gOTc7XG5jb25zdCBaID0gMTIyO1xuXG5jb25zdCBsb3dlciA9IGMgPT4gYyB8IDB4MjA7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY2xhc3MgTXVsdGlwYXJ0UGFyc2VyIHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGFyeVxuXHQgKi9cblx0Y29uc3RydWN0b3IoYm91bmRhcnkpIHtcblx0XHR0aGlzLmluZGV4ID0gMDtcblx0XHR0aGlzLmZsYWdzID0gMDtcblxuXHRcdHRoaXMub25IZWFkZXJFbmQgPSBub29wO1xuXHRcdHRoaXMub25IZWFkZXJGaWVsZCA9IG5vb3A7XG5cdFx0dGhpcy5vbkhlYWRlcnNFbmQgPSBub29wO1xuXHRcdHRoaXMub25IZWFkZXJWYWx1ZSA9IG5vb3A7XG5cdFx0dGhpcy5vblBhcnRCZWdpbiA9IG5vb3A7XG5cdFx0dGhpcy5vblBhcnREYXRhID0gbm9vcDtcblx0XHR0aGlzLm9uUGFydEVuZCA9IG5vb3A7XG5cblx0XHR0aGlzLmJvdW5kYXJ5Q2hhcnMgPSB7fTtcblxuXHRcdGJvdW5kYXJ5ID0gJ1xcclxcbi0tJyArIGJvdW5kYXJ5O1xuXHRcdGNvbnN0IHVpOGEgPSBuZXcgVWludDhBcnJheShib3VuZGFyeS5sZW5ndGgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdHVpOGFbaV0gPSBib3VuZGFyeS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0dGhpcy5ib3VuZGFyeUNoYXJzW3VpOGFbaV1dID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmJvdW5kYXJ5ID0gdWk4YTtcblx0XHR0aGlzLmxvb2tiZWhpbmQgPSBuZXcgVWludDhBcnJheSh0aGlzLmJvdW5kYXJ5Lmxlbmd0aCArIDgpO1xuXHRcdHRoaXMuc3RhdGUgPSBTLlNUQVJUX0JPVU5EQVJZO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7VWludDhBcnJheX0gZGF0YVxuXHQgKi9cblx0d3JpdGUoZGF0YSkge1xuXHRcdGxldCBpID0gMDtcblx0XHRjb25zdCBsZW5ndGhfID0gZGF0YS5sZW5ndGg7XG5cdFx0bGV0IHByZXZpb3VzSW5kZXggPSB0aGlzLmluZGV4O1xuXHRcdGxldCB7bG9va2JlaGluZCwgYm91bmRhcnksIGJvdW5kYXJ5Q2hhcnMsIGluZGV4LCBzdGF0ZSwgZmxhZ3N9ID0gdGhpcztcblx0XHRjb25zdCBib3VuZGFyeUxlbmd0aCA9IHRoaXMuYm91bmRhcnkubGVuZ3RoO1xuXHRcdGNvbnN0IGJvdW5kYXJ5RW5kID0gYm91bmRhcnlMZW5ndGggLSAxO1xuXHRcdGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXHRcdGxldCBjO1xuXHRcdGxldCBjbDtcblxuXHRcdGNvbnN0IG1hcmsgPSBuYW1lID0+IHtcblx0XHRcdHRoaXNbbmFtZSArICdNYXJrJ10gPSBpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGVhciA9IG5hbWUgPT4ge1xuXHRcdFx0ZGVsZXRlIHRoaXNbbmFtZSArICdNYXJrJ107XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGNhbGxiYWNrU3ltYm9sLCBzdGFydCwgZW5kLCB1aThhKSA9PiB7XG5cdFx0XHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCAhPT0gZW5kKSB7XG5cdFx0XHRcdHRoaXNbY2FsbGJhY2tTeW1ib2xdKHVpOGEgJiYgdWk4YS5zdWJhcnJheShzdGFydCwgZW5kKSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGFDYWxsYmFjayA9IChuYW1lLCBjbGVhcikgPT4ge1xuXHRcdFx0Y29uc3QgbWFya1N5bWJvbCA9IG5hbWUgKyAnTWFyayc7XG5cdFx0XHRpZiAoIShtYXJrU3ltYm9sIGluIHRoaXMpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyKSB7XG5cdFx0XHRcdGNhbGxiYWNrKG5hbWUsIHRoaXNbbWFya1N5bWJvbF0sIGksIGRhdGEpO1xuXHRcdFx0XHRkZWxldGUgdGhpc1ttYXJrU3ltYm9sXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKG5hbWUsIHRoaXNbbWFya1N5bWJvbF0sIGRhdGEubGVuZ3RoLCBkYXRhKTtcblx0XHRcdFx0dGhpc1ttYXJrU3ltYm9sXSA9IDA7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGhfOyBpKyspIHtcblx0XHRcdGMgPSBkYXRhW2ldO1xuXG5cdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XG5cdFx0XHRcdGNhc2UgUy5TVEFSVF9CT1VOREFSWTpcblx0XHRcdFx0XHRpZiAoaW5kZXggPT09IGJvdW5kYXJ5Lmxlbmd0aCAtIDIpIHtcblx0XHRcdFx0XHRcdGlmIChjID09PSBIWVBIRU4pIHtcblx0XHRcdFx0XHRcdFx0ZmxhZ3MgfD0gRi5MQVNUX0JPVU5EQVJZO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjICE9PSBDUikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4IC0gMSA9PT0gYm91bmRhcnkubGVuZ3RoIC0gMikge1xuXHRcdFx0XHRcdFx0aWYgKGZsYWdzICYgRi5MQVNUX0JPVU5EQVJZICYmIGMgPT09IEhZUEhFTikge1xuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFMuRU5EO1xuXHRcdFx0XHRcdFx0XHRmbGFncyA9IDA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCEoZmxhZ3MgJiBGLkxBU1RfQk9VTkRBUlkpICYmIGMgPT09IExGKSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soJ29uUGFydEJlZ2luJyk7XG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gUy5IRUFERVJfRklFTERfU1RBUlQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjICE9PSBib3VuZGFyeVtpbmRleCArIDJdKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IC0yO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjID09PSBib3VuZGFyeVtpbmRleCArIDJdKSB7XG5cdFx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFMuSEVBREVSX0ZJRUxEX1NUQVJUOlxuXHRcdFx0XHRcdHN0YXRlID0gUy5IRUFERVJfRklFTEQ7XG5cdFx0XHRcdFx0bWFyaygnb25IZWFkZXJGaWVsZCcpO1xuXHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHQvLyBmYWxscyB0aHJvdWdoXG5cdFx0XHRcdGNhc2UgUy5IRUFERVJfRklFTEQ6XG5cdFx0XHRcdFx0aWYgKGMgPT09IENSKSB7XG5cdFx0XHRcdFx0XHRjbGVhcignb25IZWFkZXJGaWVsZCcpO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBTLkhFQURFUlNfQUxNT1NUX0RPTkU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdGlmIChjID09PSBIWVBIRU4pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjID09PSBDT0xPTikge1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGVtcHR5IGhlYWRlciBmaWVsZFxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRhdGFDYWxsYmFjaygnb25IZWFkZXJGaWVsZCcsIHRydWUpO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBTLkhFQURFUl9WQUxVRV9TVEFSVDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsID0gbG93ZXIoYyk7XG5cdFx0XHRcdFx0aWYgKGNsIDwgQSB8fCBjbCA+IFopIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTLkhFQURFUl9WQUxVRV9TVEFSVDpcblx0XHRcdFx0XHRpZiAoYyA9PT0gU1BBQ0UpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1hcmsoJ29uSGVhZGVyVmFsdWUnKTtcblx0XHRcdFx0XHRzdGF0ZSA9IFMuSEVBREVSX1ZBTFVFO1xuXHRcdFx0XHRcdC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSBTLkhFQURFUl9WQUxVRTpcblx0XHRcdFx0XHRpZiAoYyA9PT0gQ1IpIHtcblx0XHRcdFx0XHRcdGRhdGFDYWxsYmFjaygnb25IZWFkZXJWYWx1ZScsIHRydWUpO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soJ29uSGVhZGVyRW5kJyk7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFMuSEVBREVSX1ZBTFVFX0FMTU9TVF9ET05FO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFMuSEVBREVSX1ZBTFVFX0FMTU9TVF9ET05FOlxuXHRcdFx0XHRcdGlmIChjICE9PSBMRikge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN0YXRlID0gUy5IRUFERVJfRklFTERfU1RBUlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUy5IRUFERVJTX0FMTU9TVF9ET05FOlxuXHRcdFx0XHRcdGlmIChjICE9PSBMRikge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNhbGxiYWNrKCdvbkhlYWRlcnNFbmQnKTtcblx0XHRcdFx0XHRzdGF0ZSA9IFMuUEFSVF9EQVRBX1NUQVJUO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFMuUEFSVF9EQVRBX1NUQVJUOlxuXHRcdFx0XHRcdHN0YXRlID0gUy5QQVJUX0RBVEE7XG5cdFx0XHRcdFx0bWFyaygnb25QYXJ0RGF0YScpO1xuXHRcdFx0XHRcdC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSBTLlBBUlRfREFUQTpcblx0XHRcdFx0XHRwcmV2aW91c0luZGV4ID0gaW5kZXg7XG5cblx0XHRcdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0XHRcdC8vIGJveWVyLW1vb3JlIGRlcnJpdmVkIGFsZ29yaXRobSB0byBzYWZlbHkgc2tpcCBub24tYm91bmRhcnkgZGF0YVxuXHRcdFx0XHRcdFx0aSArPSBib3VuZGFyeUVuZDtcblx0XHRcdFx0XHRcdHdoaWxlIChpIDwgYnVmZmVyTGVuZ3RoICYmICEoZGF0YVtpXSBpbiBib3VuZGFyeUNoYXJzKSkge1xuXHRcdFx0XHRcdFx0XHRpICs9IGJvdW5kYXJ5TGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpIC09IGJvdW5kYXJ5RW5kO1xuXHRcdFx0XHRcdFx0YyA9IGRhdGFbaV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGluZGV4IDwgYm91bmRhcnkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYm91bmRhcnlbaW5kZXhdID09PSBjKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGFDYWxsYmFjaygnb25QYXJ0RGF0YScsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSBib3VuZGFyeS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0XHRpZiAoYyA9PT0gQ1IpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ1IgPSBwYXJ0IGJvdW5kYXJ5XG5cdFx0XHRcdFx0XHRcdGZsYWdzIHw9IEYuUEFSVF9CT1VOREFSWTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gSFlQSEVOKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEhZUEhFTiA9IGVuZCBib3VuZGFyeVxuXHRcdFx0XHRcdFx0XHRmbGFncyB8PSBGLkxBU1RfQk9VTkRBUlk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpbmRleCA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCAtIDEgPT09IGJvdW5kYXJ5Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKGZsYWdzICYgRi5QQVJUX0JPVU5EQVJZKSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRcdFx0aWYgKGMgPT09IExGKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdW5zZXQgdGhlIFBBUlRfQk9VTkRBUlkgZmxhZ1xuXHRcdFx0XHRcdFx0XHRcdGZsYWdzICY9IH5GLlBBUlRfQk9VTkRBUlk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soJ29uUGFydEVuZCcpO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrKCdvblBhcnRCZWdpbicpO1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlID0gUy5IRUFERVJfRklFTERfU1RBUlQ7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZmxhZ3MgJiBGLkxBU1RfQk9VTkRBUlkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGMgPT09IEhZUEhFTikge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrKCdvblBhcnRFbmQnKTtcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFMuRU5EO1xuXHRcdFx0XHRcdFx0XHRcdGZsYWdzID0gMDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRpbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyB3aGVuIG1hdGNoaW5nIGEgcG9zc2libGUgYm91bmRhcnksIGtlZXAgYSBsb29rYmVoaW5kIHJlZmVyZW5jZVxuXHRcdFx0XHRcdFx0Ly8gaW4gY2FzZSBpdCB0dXJucyBvdXQgdG8gYmUgYSBmYWxzZSBsZWFkXG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kW2luZGV4IC0gMV0gPSBjO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlvdXNJbmRleCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIGlmIG91ciBib3VuZGFyeSB0dXJuZWQgb3V0IHRvIGJlIHJ1YmJpc2gsIHRoZSBjYXB0dXJlZCBsb29rYmVoaW5kXG5cdFx0XHRcdFx0XHQvLyBiZWxvbmdzIHRvIHBhcnREYXRhXG5cdFx0XHRcdFx0XHRjb25zdCBfbG9va2JlaGluZCA9IG5ldyBVaW50OEFycmF5KGxvb2tiZWhpbmQuYnVmZmVyLCBsb29rYmVoaW5kLmJ5dGVPZmZzZXQsIGxvb2tiZWhpbmQuYnl0ZUxlbmd0aCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjaygnb25QYXJ0RGF0YScsIDAsIHByZXZpb3VzSW5kZXgsIF9sb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdHByZXZpb3VzSW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0bWFyaygnb25QYXJ0RGF0YScpO1xuXG5cdFx0XHRcdFx0XHQvLyByZWNvbnNpZGVyIHRoZSBjdXJyZW50IGNoYXJhY3RlciBldmVuIHNvIGl0IGludGVycnVwdGVkIHRoZSBzZXF1ZW5jZVxuXHRcdFx0XHRcdFx0Ly8gaXQgY291bGQgYmUgdGhlIGJlZ2lubmluZyBvZiBhIG5ldyBzZXF1ZW5jZVxuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFMuRU5EOlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBzdGF0ZSBlbnRlcmVkOiAke3N0YXRlfWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRhdGFDYWxsYmFjaygnb25IZWFkZXJGaWVsZCcpO1xuXHRcdGRhdGFDYWxsYmFjaygnb25IZWFkZXJWYWx1ZScpO1xuXHRcdGRhdGFDYWxsYmFjaygnb25QYXJ0RGF0YScpO1xuXG5cdFx0Ly8gVXBkYXRlIHByb3BlcnRpZXMgZm9yIHRoZSBuZXh0IGNhbGxcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHRcdHRoaXMuZmxhZ3MgPSBmbGFncztcblx0fVxuXG5cdGVuZCgpIHtcblx0XHRpZiAoKHRoaXMuc3RhdGUgPT09IFMuSEVBREVSX0ZJRUxEX1NUQVJUICYmIHRoaXMuaW5kZXggPT09IDApIHx8XG5cdFx0XHQodGhpcy5zdGF0ZSA9PT0gUy5QQVJUX0RBVEEgJiYgdGhpcy5pbmRleCA9PT0gdGhpcy5ib3VuZGFyeS5sZW5ndGgpKSB7XG5cdFx0XHR0aGlzLm9uUGFydEVuZCgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZSAhPT0gUy5FTkQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTXVsdGlwYXJ0UGFyc2VyLmVuZCgpOiBzdHJlYW0gZW5kZWQgdW5leHBlY3RlZGx5Jyk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9maWxlTmFtZShoZWFkZXJWYWx1ZSkge1xuXHQvLyBtYXRjaGVzIGVpdGhlciBhIHF1b3RlZC1zdHJpbmcgb3IgYSB0b2tlbiAoUkZDIDI2MTYgc2VjdGlvbiAxOS41LjEpXG5cdGNvbnN0IG0gPSBoZWFkZXJWYWx1ZS5tYXRjaCgvXFxiZmlsZW5hbWU9KFwiKC4qPylcInwoW14oKTw+QCw7OlxcXFxcIi9bXFxdPz17fVxcc1xcdF0rKSkoJHw7XFxzKS9pKTtcblx0aWYgKCFtKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbWF0Y2ggPSBtWzJdIHx8IG1bM10gfHwgJyc7XG5cdGxldCBmaWxlbmFtZSA9IG1hdGNoLnNsaWNlKG1hdGNoLmxhc3RJbmRleE9mKCdcXFxcJykgKyAxKTtcblx0ZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC8lMjIvZywgJ1wiJyk7XG5cdGZpbGVuYW1lID0gZmlsZW5hbWUucmVwbGFjZSgvJiMoXFxkezR9KTsvZywgKG0sIGNvZGUpID0+IHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcblx0fSk7XG5cdHJldHVybiBmaWxlbmFtZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvRm9ybURhdGEoQm9keSwgY3QpIHtcblx0aWYgKCEvbXVsdGlwYXJ0L2kudGVzdChjdCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gZmV0Y2gnKTtcblx0fVxuXG5cdGNvbnN0IG0gPSBjdC5tYXRjaCgvYm91bmRhcnk9KD86XCIoW15cIl0rKVwifChbXjtdKykpL2kpO1xuXG5cdGlmICghbSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vIG9yIGJhZCBjb250ZW50LXR5cGUgaGVhZGVyLCBubyBtdWx0aXBhcnQgYm91bmRhcnknKTtcblx0fVxuXG5cdGNvbnN0IHBhcnNlciA9IG5ldyBNdWx0aXBhcnRQYXJzZXIobVsxXSB8fCBtWzJdKTtcblxuXHRsZXQgaGVhZGVyRmllbGQ7XG5cdGxldCBoZWFkZXJWYWx1ZTtcblx0bGV0IGVudHJ5VmFsdWU7XG5cdGxldCBlbnRyeU5hbWU7XG5cdGxldCBjb250ZW50VHlwZTtcblx0bGV0IGZpbGVuYW1lO1xuXHRjb25zdCBlbnRyeUNodW5rcyA9IFtdO1xuXHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdGNvbnN0IG9uUGFydERhdGEgPSB1aThhID0+IHtcblx0XHRlbnRyeVZhbHVlICs9IGRlY29kZXIuZGVjb2RlKHVpOGEsIHtzdHJlYW06IHRydWV9KTtcblx0fTtcblxuXHRjb25zdCBhcHBlbmRUb0ZpbGUgPSB1aThhID0+IHtcblx0XHRlbnRyeUNodW5rcy5wdXNoKHVpOGEpO1xuXHR9O1xuXG5cdGNvbnN0IGFwcGVuZEZpbGVUb0Zvcm1EYXRhID0gKCkgPT4ge1xuXHRcdGNvbnN0IGZpbGUgPSBuZXcgRmlsZShlbnRyeUNodW5rcywgZmlsZW5hbWUsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuXHRcdGZvcm1EYXRhLmFwcGVuZChlbnRyeU5hbWUsIGZpbGUpO1xuXHR9O1xuXG5cdGNvbnN0IGFwcGVuZEVudHJ5VG9Gb3JtRGF0YSA9ICgpID0+IHtcblx0XHRmb3JtRGF0YS5hcHBlbmQoZW50cnlOYW1lLCBlbnRyeVZhbHVlKTtcblx0fTtcblxuXHRjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXHRkZWNvZGVyLmRlY29kZSgpO1xuXG5cdHBhcnNlci5vblBhcnRCZWdpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRwYXJzZXIub25QYXJ0RGF0YSA9IG9uUGFydERhdGE7XG5cdFx0cGFyc2VyLm9uUGFydEVuZCA9IGFwcGVuZEVudHJ5VG9Gb3JtRGF0YTtcblxuXHRcdGhlYWRlckZpZWxkID0gJyc7XG5cdFx0aGVhZGVyVmFsdWUgPSAnJztcblx0XHRlbnRyeVZhbHVlID0gJyc7XG5cdFx0ZW50cnlOYW1lID0gJyc7XG5cdFx0Y29udGVudFR5cGUgPSAnJztcblx0XHRmaWxlbmFtZSA9IG51bGw7XG5cdFx0ZW50cnlDaHVua3MubGVuZ3RoID0gMDtcblx0fTtcblxuXHRwYXJzZXIub25IZWFkZXJGaWVsZCA9IGZ1bmN0aW9uICh1aThhKSB7XG5cdFx0aGVhZGVyRmllbGQgKz0gZGVjb2Rlci5kZWNvZGUodWk4YSwge3N0cmVhbTogdHJ1ZX0pO1xuXHR9O1xuXG5cdHBhcnNlci5vbkhlYWRlclZhbHVlID0gZnVuY3Rpb24gKHVpOGEpIHtcblx0XHRoZWFkZXJWYWx1ZSArPSBkZWNvZGVyLmRlY29kZSh1aThhLCB7c3RyZWFtOiB0cnVlfSk7XG5cdH07XG5cblx0cGFyc2VyLm9uSGVhZGVyRW5kID0gZnVuY3Rpb24gKCkge1xuXHRcdGhlYWRlclZhbHVlICs9IGRlY29kZXIuZGVjb2RlKCk7XG5cdFx0aGVhZGVyRmllbGQgPSBoZWFkZXJGaWVsZC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYgKGhlYWRlckZpZWxkID09PSAnY29udGVudC1kaXNwb3NpdGlvbicpIHtcblx0XHRcdC8vIG1hdGNoZXMgZWl0aGVyIGEgcXVvdGVkLXN0cmluZyBvciBhIHRva2VuIChSRkMgMjYxNiBzZWN0aW9uIDE5LjUuMSlcblx0XHRcdGNvbnN0IG0gPSBoZWFkZXJWYWx1ZS5tYXRjaCgvXFxibmFtZT0oXCIoW15cIl0qKVwifChbXigpPD5ALDs6XFxcXFwiL1tcXF0/PXt9XFxzXFx0XSspKS9pKTtcblxuXHRcdFx0aWYgKG0pIHtcblx0XHRcdFx0ZW50cnlOYW1lID0gbVsyXSB8fCBtWzNdIHx8ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRmaWxlbmFtZSA9IF9maWxlTmFtZShoZWFkZXJWYWx1ZSk7XG5cblx0XHRcdGlmIChmaWxlbmFtZSkge1xuXHRcdFx0XHRwYXJzZXIub25QYXJ0RGF0YSA9IGFwcGVuZFRvRmlsZTtcblx0XHRcdFx0cGFyc2VyLm9uUGFydEVuZCA9IGFwcGVuZEZpbGVUb0Zvcm1EYXRhO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaGVhZGVyRmllbGQgPT09ICdjb250ZW50LXR5cGUnKSB7XG5cdFx0XHRjb250ZW50VHlwZSA9IGhlYWRlclZhbHVlO1xuXHRcdH1cblxuXHRcdGhlYWRlclZhbHVlID0gJyc7XG5cdFx0aGVhZGVyRmllbGQgPSAnJztcblx0fTtcblxuXHRmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIEJvZHkpIHtcblx0XHRwYXJzZXIud3JpdGUoY2h1bmspO1xuXHR9XG5cblx0cGFyc2VyLmVuZCgpO1xuXG5cdHJldHVybiBmb3JtRGF0YTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==