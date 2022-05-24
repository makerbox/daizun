/**
 * BLOCK: lead-stat
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
registerBlockType( 'fbf/lead-stat', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'lead-stat' ), // Block title.
	icon: 'images-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'fbf' ),
	],
	attributes: {
		description: {
			type: "string",
			default: "description"
		},
		stat: {
			type: "string",
			default: "XXXXXX"
		}
	},
	parent: ['fbf/lead-stats'],

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
		

		const descriptionChange = (newText) => {
			setAttributes({ description: newText });			
		};
		const statChange = (newText) => {
			setAttributes({ stat: newText });			
		};

		return (
			<div className="b-lead-stat">
				<div className="b-lead-stat__inner">
					<div className="b-lead-stat__stat">
						<RichText
							onChange={statChange}
							value={attributes.stat}
						/>
					</div>
					<div className="b-lead-stat__description">
						<RichText
							onChange={descriptionChange}
							value={attributes.description}
						/>
					</div>
				</div>				
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
			<div className="b-lead-stat">
				<div className="b-lead-stat__inner">
					<div className="b-lead-stat__stat">
						<RichText.Content
							value={attributes.stat}
						/>
					</div>
					<div className="b-lead-stat__description">
						<RichText.Content
							value={attributes.description}
						/>
					</div>
				</div>
			</div>
		);
	},
} );
