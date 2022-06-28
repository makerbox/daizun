/**
 * BLOCK: case-study
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls, RichText, MediaUpload, InnerBlocks } = wp.blockEditor;
const { Panel, PanelBody, SelectControl, PanelRow } = wp.components;
const { select, dispatch } = wp.data;
import { useState } from '@wordpress/element';

const ALLOWED_BLOCKS = ['dz/case-study-slide'];
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
registerBlockType( 'dz/case-study', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'case-study' ), // Block title.
	icon: 'images-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'dz' ),
	],
	attributes: {
		title: {
			type: "string",
			default: "title"
		},
		date: {
			type: "string",
			default: "date"
		},
		imgURL: {
			type: "string"
		},
		imgID: {
			type: "string"
		},
		list: {
			type: "string"
		},
		alignment: {
			type: "string",
			default: "b-case-study__align--left"
		},
		sliderCopy: {
			type: "string",
			default: "slider copy"
		}
	},
	parent: ['dz/case-studys'],

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
		

		const titleChange = (newText) => {
			setAttributes({ title: newText });			
		};
		const dateChange = (newText) => {
			setAttributes({ date: newText });			
		};
		const sliderCopyChange = (newText) => {
			setAttributes({ sliderCopy: newText });			
		};
		const listChange = (newText) => {
			setAttributes({ list: newText });			
		};
		const imgChange = ( newImg ) => {
			let imgURL = newImg.sizes.full.url;
			let imgID = newImg.id.toString();
		    setAttributes({
		        imgURL: imgURL,
		        imgID: imgID
		    })
		};
		const alignmentChange = (newText) => {
			setAttributes({ alignment: newText });			
		};

		return (
			<div className={`b-case-study ${attributes.alignment}`}>
				<div className="b-case-study__inner">
					<div className="b-case-study__thumbnail">
						<img src={attributes.imgURL} className={`wp-image-${attributes.imgID}`} />
					</div>
					<div className="b-case-study__text">
						<div className="b-case-study__title">
							<RichText
								onChange={titleChange}
								value={attributes.title}
							/>
						</div>
						<div className="b-case-study__date">
							<RichText
								onChange={dateChange}
								value={attributes.date}
							/>
						</div>
					</div>
				</div>
				<div className="b-case-study__slides">
					<div className="b-case-study__slides--inner">
						<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
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
					<Panel className="panel-group" header="Alignment">					
						<SelectControl
							label="Alignment"
							value={attributes.alignment}
							options={
								[
									{ label: "Image left - text right", value: "b-case-study__align--left" },
									{ label: "Text left - image right", value: "b-case-study__align--right" }
								]
							}
							onChange={alignmentChange}
						/>
					</Panel>
					<hr style={{border:'2px solid black'}}/>
					<Panel className="panel-group" header="Slider copy">					
						<RichText
							value={attributes.sliderCopy}
							onChange={sliderCopyChange}
							multiline="p"
						/>
						<hr style={{border:'2px solid black'}}/>				
						<RichText
							onChange={listChange}
							value={attributes.list}
							tagName="ul"
        					multiline="li"
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
			<div className={`b-case-study ${attributes.alignment}`}>
				<div className="b-case-study__inner" data-toggle-case>
					<div className="b-case-study__thumbnail">
						<img src={attributes.imgURL} className={`wp-image-${attributes.imgID}`} />
					</div>
					<div className="b-case-study__text">
						<div className="b-case-study__title">
							<RichText.Content
								value={attributes.title}
							/>
						</div>
						<div className="b-case-study__date">
							<RichText.Content
								value={attributes.date}
							/>
						</div>
					</div>
				</div>
				<div className="b-case-study__slides">
					<div className="b-case-study__slides--inner">
						<div data-toggle-case className="b-case-study__slides--close">
							<svg xmlns="http://www.w3.org/2000/svg" width="25.707" height="25.707" viewBox="0 0 25.707 25.707">
							  <g id="Group_350" data-name="Group 350" transform="translate(-332.646 -21.646)">
							    <line id="Line_3" data-name="Line 3" x2="25" y2="25" transform="translate(333 22)" fill="none" stroke="#fff" stroke-width="1"/>
							    <line id="Line_12" data-name="Line 12" y1="24" x2="24" transform="translate(334 22)" fill="none" stroke="#fff" stroke-width="1"/>
							  </g>
							</svg>
						</div>
						<InnerBlocks.Content />
						<div className="b-case-study__slides--copy">
							<RichText.Content
								value={attributes.sliderCopy}
							/>
							<RichText.Content
								value={attributes.list}
							/>
						</div>
						<div className="b-case-study__slides--controls">
							<div data-case-prev className="b-case-study__slides--prev">
								<svg xmlns="http://www.w3.org/2000/svg" width="53.334" height="105.254" viewBox="0 0 53.334 105.254">
								  <path id="Path_369" data-name="Path 369" d="M125.156,1398.5l-52.273,52.273,52.273,52.273" transform="translate(-72.176 -1398.146)" fill="none" stroke="#fcf7f7" stroke-width="1"/>
								</svg>
							</div>
							<div data-case-next className="b-case-study__slides--next">
								<svg xmlns="http://www.w3.org/2000/svg" width="53.334" height="105.254" viewBox="0 0 53.334 105.254">
								  <path id="Path_370" data-name="Path 370" d="M125.156,1398.5l-52.273,52.273,52.273,52.273" transform="translate(125.51 1503.4) rotate(180)" fill="none" stroke="#fcf7f7" stroke-width="1"/>
								</svg>
							</div>
						</div>
					</div>
				</div>		
			</div>
		);
	},
} );
