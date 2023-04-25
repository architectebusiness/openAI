import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { imageFields, imageOperations } from './ImageDescription';
import { textFields, textOperations } from './TextDescription';
import { chatFields, chatOperations } from './ChatDescription';

export class OpenAi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OpenAImelo',
		name: 'openAimelo',
		icon: 'file:openAi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Open AI',
		defaults: {
			name: 'OpenAImelo',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'openAiApimelo',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.pawan.krd/v1',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Chat',
						value: 'chat',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Text',
						value: 'text',
					},
				],
				default: 'text',
			},

			...chatOperations,
			...chatFields,

			...imageOperations,
			...imageFields,

			...textOperations,
			...textFields,
		],
	};
}
