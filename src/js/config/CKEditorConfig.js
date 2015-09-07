/**
 * Object that contains CKEditor instance settings.
 * This object is supposed to be given as a second argument to CKEditor.replace method
 * once the start page finishes loading.
 * @type Object
 * @since 1.0 
 */

var CKEditorConfig = function(){
	/**
	 * Object that stores config settings
     * @type Object
     * @private
	 */
	var config = {};
	
	/**
	 * Language in which toolbar phrases are displayed.
	 *
	 * @property       {String}        language
	 * @type           {String}
	 * @default        it
	 */
	config.language = 'it';

	/**
	 * Default language (in case {{#crossLink "CKEDITOR/language:property"}}language{{/crossLink}}
	 * is not found).
	 *
	 * @property       {String}        defaultLanguage
	 * @type           {String}
	 * @default        en
	 */
	config.defaultLanguage = 'en';

	/**
	 * Editor window width.
	 *
	 * @property       {String}        width
	 * @type           {String}
	 */
	config.width = '80%';

	/**
	 * Editor window height.
	 *
	 * @property       {String}        height
	 * @type           {String}
	 */
	config.height = '30em';

	/**
	 * Enter getMode: when pressing "ENTER", &lt;br&gt; is inserted, not &lt;p&gt;.
	 *
	 * @property       {Number}        enterMode
	 * @type           {Number}
	 * @default        CKEDITOR.ENTER_BR
	 */
	config.enterMode = CKEDITOR.ENTER_BR;

	/**
	 * Whether objects in the editor window can be resized or not.
	 *
	 * @property       {Boolean}        disableObjectResizing
	 * @type           {Boolean}
	 * @default        true
	 */
	config.disableObjectResizing = true;


	/**
	 * Activate browser spellchecker.
	 * @property       disableNativeSpellChecker
	 * @type           {Boolean}
	 * @since          1.0
	 * @default        false
	 */
	config.disableNativeSpellChecker = false;

	/**
	 * Allows appearance of the browser context menu (triggers upon ctrl + right mouse button click).
	 * @property       browserContextMenuOnCtrl
	 * @type           {Boolean}
	 * @since          1.0
	 * @default        false
	 */
	config.browserContextMenuOnCtrl = true;

	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'getMode', 'document', 'doctools' ] }, // getMode -> it is responsible for "source"
		// { name: 'document',	   groups: [ 'document', 'doctools' ] },
		{ name: 'save'},
		{ name: 'saveInstantState'},
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		// { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'editing',     groups: [ 'find', 'selection' ] },


		{ name: 'others' },
		'/',
		// { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'basicstyles2', groups: ['bold2', 'italic2', 'underline2', 'strike2']},
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align'] },
		{ name: 'styles' },
		{ name: 'colors' }
	];


	config.allowedContent = false;

	// Setting allowed elements and their attributes, styles and classes.
	// format: elements [attributes]{styles}(classes)
	// the line below allows all attributes and styles for tags p, table etc.
	config.allowedContent = 'p table tbody tr td span div h1 h2 h3 h4 h5 h6 img a ol ul li[*]{*}';
	// the line below prohibits tags b, strong, em, i
	config.disallowedContent = 'b strong em i';
	
	return config;

}();