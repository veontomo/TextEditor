/*jslint plusplus: true, white: true */
/*global Cell, Row, Table, ListItem, UList, OList, Link, PlainText, Tag, Factory, Mapper,
		Node, Text, Element, ImageTag, CKEDITOR, ConverterFixed, ConverterElastic, CKEditorAdapter*/
/**
 * Singleton containing configuration settings. Some of the properties are write-protected.
 *
 * @module    Config
 * @class     NEWSLETTER
 * @type      {Object}
 * @since     1.0
 * @author    A.Shcherbakov
 */
var AppConfig = (function(){

	/**
	 * Singlet instance.
	 * @property   {Object}     _instance
	 * @private
	 */
	var _instance;

	/**
	 * Intializes the singlet instance.
	 * @method     _init
	 * @private
	 */
	var _init = function(){

		// an object that will be returned after filling in with required properties
		var _output = {};

		/**
		 * Default width, to be set to elements whose width can not be established.
		 * @property    {String}     defaultWidth
		 * @type        {String}
		 * @default 	"500px"
		 */
		_output.defaultWidth = '500px';

		/**
		 * {{#crossLink "NEWSLETTER/defaultWidth:property"}}defaultWidth{{/crossLink}} getter.
		 * @method    width
		 * @return    {String}
		 */
		_output.width = function(){
			return this.defaultWidth;
		};

		/**
		 * Fonts to be added to those already present in the editor.
		 *
		 * Object keys are to be displayed in the toolbar combo box, while thier
		 * values are to be used for 'font-family' attribute.
		 * @property {Object} additionalFonts
		 * @type     {Object}
		 * @default  {'Calibri': 'Calibri, sans-serif'}
		 */
		_output.additionalFonts = {'Calibri': 'Calibri, sans-serif'};

		/**
		 * Sets maximum width of element available inside editor window.
		 *
		 * This value is to be set to an element when it is failed to find its parent.
		 * If w is a string, its value is imposed as default width. If it is a number,
		 * default unit measure is appended to that number.
		 * @method  setWidth
		 * @param   {Number|String}       w
		 * @return  {void}
		 */
		_output.setWidth = function(w){
			if (typeof w === 'string'){
				this.defaultWidth = w;
			}
			if (typeof w === 'number'){
				this.defaultWidth = w.toString() + this.defaultUnitMeasure;
			}
		};


		/**
		 * Default font size, to be set to elements whose width can not be established.
		 * @property    {String}     defaultFontSize
		 * @type        {String}
		 * @default     "14px"
		 */
		_output.defaultFontSize = '14px';

		/**
		 * {{#crossLink "NEWSLETTER/defaultFontSize:property"}}defaultFontSize{{/crossLink}} getter.
		 * @method    fontsize
		 * @return    {String}
		 */
		_output.fontsize = function(){
			return this.defaultFontSize;
		};


		/**
		 * Default unit of measurement, to be applied to elements whose width can not be established.
		 * @property    {String}     defaultUnitMeasure
		 * @type        {String}
		 */
		_output.defaultUnitMeasure = 'px';


		/**
		 * {{#crossLink "NEWSLETTER/defaultUnitMeasure:property"}}defaultUnitMeasure{{/crossLink}} getter.
		 * @method    unitMeasure
		 * @return    {String}
		 */
		_output.unitMeasure = function(){
			return this.defaultUnitMeasure;
		};


		return _output;
	};

	if (_instance === undefined){
		_instance = _init();
	}
	return _instance;
}());
