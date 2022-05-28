/**
 * BLOCK: slider
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls, RichText, InnerBlocks } = wp.blockEditor;
const { Panel, PanelBody, SelectControl, PanelRow } = wp.components;
const { select, dispatch } = wp.data;
import { useState } from '@wordpress/element';

const ALLOWED_BLOCKS = ['dz/slide'];
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
registerBlockType( 'dz/slider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'slider' ), // Block title.
	icon: 'images-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'dz' ),
	],
	attributes: {
		headline: {
			type: "string",
			default: "headline"
		},
		colorScheme: {
			type: "string",
			default: "dark"
		},
		ctaText: {
			type: "string",
			default: "Start your application here"
		}
	},
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
		

		const headlineChange = (newText) => {
			setAttributes({ headline: newText });			
		};

		const ctaTextChange = (newText) => {
			setAttributes({ ctaText: newText });			
		};

		const colorSchemeChange = (newText) => {
			setAttributes({ colorScheme: newText })
		};


		return (
			<div className={`b-slider b-slider__color--${attributes.colorScheme}`}>
				<div className="b-slider__inner">
					<h2 className="b-slider__headline">
						<RichText
							onChange={headlineChange}
							value={attributes.headline}
						/>
					</h2>
					<div className="b-slider__slides">
						<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
					</div>
					<div data-slider-dots className="b-slider__dots">
					</div>
					<div className="b-slider__controls">
						<div data-slider-prev className="b-slider__prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="53.334" height="105.254" viewBox="0 0 53.334 105.254">
							  <path id="Path_369" data-name="Path 369" d="M125.156,1398.5l-52.273,52.273,52.273,52.273" transform="translate(-72.176 -1398.146)" fill="none" stroke="#fcf7f7" stroke-width="1"/>
							</svg>
						</div>
						<div data-slider-next className="b-slider__next">
							<svg xmlns="http://www.w3.org/2000/svg" width="53.334" height="105.254" viewBox="0 0 53.334 105.254">
							  <path id="Path_370" data-name="Path 370" d="M125.156,1398.5l-52.273,52.273,52.273,52.273" transform="translate(125.51 1503.4) rotate(180)" fill="none" stroke="#fcf7f7" stroke-width="1"/>
							</svg>
						</div>
					</div>
					<div className="b-slider__cta">
						<RichText
							onChange={ctaTextChange}
							value={attributes.ctaText}
						/>
					</div>
				</div>
				<InspectorControls>
					<hr style={{border:'2px solid black'}}/>
					<Panel className="panel-group" header="Colour Scheme">					
						<SelectControl
							label="Colour scheme"
							value={attributes.colorScheme}
							options={
								[
									{ label: "Dark", value: "dark" },
									{ label: "Light", value: "light" }
								]
							}
							onChange={colorSchemeChange}
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
			<div className={`b-slider b-slider__color--${attributes.colorScheme}`}>
				<div className="b-slider__inner">
					<h2 className="b-slider__headline">
						<RichText.Content
							value={attributes.headline}
						/>
					</h2>
					<div className="b-slider__slides">
						<InnerBlocks.Content />
					</div>
					<div data-slider-dots className="b-slider__dots">
					</div>
					<div className="b-slider__controls">
						<div data-slider-prev className="b-slider__prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="53.334" height="105.254" viewBox="0 0 53.334 105.254">
							  <path id="Path_369" data-name="Path 369" d="M125.156,1398.5l-52.273,52.273,52.273,52.273" transform="translate(-72.176 -1398.146)" fill="none" stroke="#fcf7f7" stroke-width="1"/>
							</svg>
						</div>
						<div data-slider-next className="b-slider__next">
							<svg xmlns="http://www.w3.org/2000/svg" width="53.334" height="105.254" viewBox="0 0 53.334 105.254">
							  <path id="Path_370" data-name="Path 370" d="M125.156,1398.5l-52.273,52.273,52.273,52.273" transform="translate(125.51 1503.4) rotate(180)" fill="none" stroke="#fcf7f7" stroke-width="1"/>
							</svg>
						</div>
					</div>
					<div className="b-slider__cta">
						<RichText.Content
							value={attributes.ctaText}
						/>
					</div>
				</div>
			</div>
		);
	},
} );
