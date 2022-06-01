/**
 * BLOCK: tab
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls, RichText, MediaUpload, InnerBlocks } = wp.blockEditor;
const { Panel, PanelBody, PanelRow } = wp.components;
const { select, dispatch } = wp.data;
import { useState } from '@wordpress/element';

/**
 * Register a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'dz/tab', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tab' ), // Block title.
	icon: 'images-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'dz' ),
	],
	attributes: {
		title:{
			type: "string",
			default: "Title"
		},
		quote: {
			type: "string",
			default: "quote"
		},
		author: {
			type: "string",
			default: "author"
		},
		imgURL: {
			type: "string"
		},
		imgID: {
			type: "string"
		}
	},
	parent: ['dz/tabs'],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( {attributes, setAttributes} ) => {
		

		const quoteChange = (newText) => {
			setAttributes({ quote: newText });			
		};
		const authorChange = (newText) => {
			setAttributes({ author: newText });			
		};
		const titleChange = (newText) => {
			setAttributes({ title: newText });			
		};

		const imgChange = ( newImg ) => {
			let imgURL = newImg.sizes.full.url;
			let imgID = newImg.id.toString();
		    setAttributes({
		        imgURL: imgURL,
		        imgID: imgID
		    })
		};

		return (
			<div className="b-tab" data-tab-title={attributes.title}>
				<div className="b-tab__background">
					<img src={attributes.imgURL} className={`wp-image-${attributes.imgID}`} />
				</div>
				<div className="b-tab__foreground">
					<div className="b-tab__inner">
						<div className="b-tab__quote">
							<RichText
								onChange={quoteChange}
								value={attributes.quote}
							/>
						</div>
						<div className="b-tab__author">
							<RichText
								onChange={authorChange}
								value={attributes.author}
							/>
						</div>
					</div>
				</div>
				<InspectorControls>
					<hr style={{border:'2px solid black'}}/>
					<Panel className="panel-group" header="Image">					
						<img src={attributes.imgURL} className={`wp-image-${attributes.imgID}`} />
						<MediaUpload 
			                onSelect={imgChange}
			                render={
			                	({open}) => {
				                	return(
				                		<button onClick={ open }>
				                			Choose image..
				                		</button>
				                	)
					            }
					        }
			            />
					</Panel>
					<hr style={{border:'2px solid black'}}/>
					<Panel className="panel-group" header="Title">
						<RichText
							onChange={titleChange}
							value={attributes.title}
						/>	
					</Panel>
					<hr style={{border:'2px solid black'}}/>
				</InspectorControls>		
			</div>			
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( {attributes} ) => {	
		return (
			<div className="b-tab">
				<div className="b-tab__background">
					<img src={attributes.imgURL} className={`wp-image-${attributes.imgID}`} />
				</div>
				<div className="b-tab__foreground">
					<div className="b-tab__inner">
						<div className="b-tab__quote">
							<RichText.Content
								value={attributes.quote}
							/>
						</div>
						<div className="b-tab__author">
							<RichText.Content
								value={attributes.author}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
